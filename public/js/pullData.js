// https://tidesandcurrents.noaa.gov/waterlevels.html?id=1611400&units=standard&bdate=20250103&edate=20250104&timezone=GMT&datum=MLLW&interval=6&action=data

function findClosestStation(position, stationList) {
  const { latitude: userLat, longitude: userLng } = position.coords;
  let closestStation = null;
  let minDistanceSquared = Infinity;

  stationList.forEach(({ lat, lng, datumsURL, name, id }) => {
    const distanceSquared =
      Math.pow(lat - userLat, 2) + Math.pow(lng - userLng, 2);
    if (distanceSquared < minDistanceSquared) {
      minDistanceSquared = distanceSquared;
      closestStation = { lat, lng, datumsURL, name, id };
    }
  });

  return closestStation;
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export function getTideData() {
  console.log("Pulling Tide Data");
  const url =
    "https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json?type=waterlevels&units=english";
  fetchData(url).then(async (data) => {
    const stationList = data.stations
      .filter((station) => station.tidal === true)
      .map((station) => ({
        name: station.name,
        lat: station.lat,
        lng: station.lng,
        datumsURL: station.datums.self,
        id: station.id,
      }));
    const position = await getLocalCoords();
    const closestStation = findClosestStation(position, stationList);
    const closestStationID = closestStation.id;
    const specificDataURL = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=water_level&application=NOS.COOPS.TAC.WL&begin_date=20250103&end_date=20250104&datum=MLLW&station=${closestStationID}&time_zone=GMT&units=english&format=json`;
    fetchData(specificDataURL).then((data) => {
      console.log(data);
    });
  });
}

export function getLocalCoords() {
  console.log("Getting Local Coords");
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        console.error("Error getting local coords: ", error);
        reject(error);
      }
    );
  });
}
