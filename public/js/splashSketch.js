import "/js/p5/lib/p5.min.js";
import { v } from "./variables.js";
// import { getTideData } from "./pullData.js";

// OUT OF DATE MAYBE, use the one in pullData.js
// https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json?type=waterlevels&units=english
// https://tidesandcurrents.noaa.gov/api-helper/url-generator.html

export const sketch = (p) => {
  console.log("launching sketch");
  let zoff = 0;
  const particles = [];
  const DENSITY = 0.15;
  const noiseScale = 2;
  const noiseSpeed = 0.002;
  const amplitude = 120;
  let mono;
  let tideData = v.tideData;

  p.preload = () => {
    mono = p.loadFont("/assets/fonts/mono.ttf");
  };

  p.setup = () => {
    p.noCursor();
    let splashCanvas = document.getElementById("splashCanvas");
    let splashCanvasWidth = splashCanvas.clientWidth; // Get width of splashCanvas
    let splashCanvasHeight = splashCanvas.clientHeight; // Get height of splashCanvas

    const myCanvas = p.createCanvas(
      splashCanvasWidth,
      splashCanvasHeight,
      p.WEBGL
    );
    myCanvas.parent("splashCanvas");
    p.frameRate(p.max(60, p.getFrameRate()));
    p.pixelDensity(2);
    createParticles();
    // tideData = getTideData();
  };

  function calculateNumParticles() {
    return Math.ceil(p.width * DENSITY);
  }

  function createParticles() {
    particles.length = 0;
    const numParticles = calculateNumParticles();

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: p.map(i, 0, numParticles - 1, 0, p.width),
        y: p.height / 2,
        size: p.random(2.5, 4),
      });
    }
  }

  p.draw = () => {
    if (tideData) {
      // tideData
      // .then((data) => {
      const data = tideData;
      const textXOff = p.width - 400;
      p.translate(-p.width / 2, -p.height / 2, 0);
      p.clear();
      p.noStroke();
      p.textFont(mono);
      p.textSize(16);

      var gmtDate = new Date(data.lastData.t);
      var localTimeZoneOffset = new Date().getTimezoneOffset();
      gmtDate.setMinutes(gmtDate.getMinutes() - localTimeZoneOffset);
      var localDateString = gmtDate.toLocaleString();
      const seaLevel =
        parseFloat(data.lastData.v) + parseFloat(data.datums.datums[5].value);
      const aveHighLevel = data.datums.datums[1].value;
      const aveLowLevel = data.datums.datums[7].value;

      p.text(`Date: ${localDateString}`, textXOff, p.height - 220);
      p.text(`Location: ${data.name}`, textXOff, p.height - 190);
      p.text(`Sea Level: ${seaLevel} ft`, textXOff, p.height - 160);
      p.text(
        `Average High Sea Level: ${aveHighLevel} ft`,
        textXOff,
        p.height - 130
      );
      p.text(
        `Average Low Sea Level: ${aveLowLevel} ft`,
        textXOff,
        p.height - 100
      );

      for (let n = 1; n < 5; n++) {
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i];

          const xoff = p.map(particle.x, 0, p.width, 0, noiseScale);
          const mainNoise = p.noise(xoff, zoff);
          const subtleNoise = p.noise(xoff * 2 * n, zoff * 0.5 * n) * n * 0.1;
          const yoff = p.map(
            mainNoise + subtleNoise,
            0,
            1.15,
            -amplitude,
            amplitude
          );
          const dataYOff = p.map(
            seaLevel,
            aveLowLevel,
            aveHighLevel,
            p.height * 0.01,
            p.height * 0.99,
            aveLowLevel,
            aveHighLevel
          );

          particle.y = p.height - (yoff + dataYOff);

          const fadeEdge = p.width * 0;
          let opacity = 160;
          if (particle.x < fadeEdge) {
            opacity = map(particle.x, 0, fadeEdge, 0, 255);
          } else if (particle.x > p.width - fadeEdge) {
            opacity = map(particle.x, p.width - fadeEdge, p.width, 255, 0);
          }

          p.fill(255, opacity);
          p.circle(particle.x, particle.y, particle.size);
        }
      }

      zoff += noiseSpeed;
      // })
      // .catch((error) => {
      // const textXOff = p.width - 400;
      // p.text(
      // `Sea Level Data Currently Unavailable`,
      // textXOff,
      // p.height - 100
      // );
      // console.error("Error fetching tide data: ", error);
      // });
    } else {
      const textXOff = p.width - 400;
      p.translate(-p.width / 2, -p.height / 2, 0);
      p.clear();
      p.noStroke();
      p.textFont(mono);
      p.textSize(16);
      p.text(`Sea Level Data Currently Unavailable`, textXOff, p.height - 100);
    }
  };

  p.windowResized = () => {
    let splashCanvas = document.getElementById("splashCanvas");
    let splashCanvasWidth = splashCanvas.clientWidth;
    let splashCanvasHeight = splashCanvas.clientHeight;
    p.resizeCanvas(splashCanvasWidth, splashCanvasHeight);
    createParticles();
  };
};

// new p5(sketch, "splashCanvas");
