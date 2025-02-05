import "/js/p5/lib/p5.min.js";
import { v } from "./variables.js";
import { sv } from "./cursor/variables.js";
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
      const data = tideData;
      const textXOff = p.width - 400;
      p.translate(-p.width / 2, -p.height / 2, 0);
      p.clear();
      p.noStroke();
      p.textFont(mono);
      p.textSize(16);

      // console.log(data.firstData.year, data.firstData.highest);
      // console.log(data.lastData.year, data.lastData.highest);

      var localTimeZoneOffset = new Date().getTimezoneOffset();
      // const aveHighLevel = data.datums.datums[1].value;
      // const aveLowLevel = data.datums.datums[7].value;
      let seaLevel;
      let fillCol;

      for (let n = 1; n < 3; n++) {
        if (n == 1) {
          seaLevel = parseFloat(data.currentData.highest); // + parseFloat(data.datums.datums[5].value);
          fillCol = p.color(255, 255, 255);
        } else {
          seaLevel = parseFloat(data.historicData.lowest); // + parseFloat(data.datums.datums[5].value);
          fillCol = p.color(0, 0, 255);
        }
        const dataYOff = p.map(
          seaLevel,
          -2.0, // aveLowLevel,
          2.0, // aveHighLevel,
          p.height * 0.01,
          p.height * 0.99,
          -2.0, // aveLowLevel,
          2.0 // aveHighLevel
        );
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i];

          const xoff = p.map(particle.x, 0, p.width, 0, noiseScale);
          const mainNoise = p.noise(xoff, zoff);
          const subtleNoise =
            p.noise(xoff * 2 * n * 3, zoff * 0.5 * n) * n * 0.1;
          const yoff = p.map(
            mainNoise + subtleNoise,
            0,
            1.15,
            -amplitude,
            amplitude
          );

          particle.y = p.height - (yoff + dataYOff);

          const fadeEdge = p.width * 0;
          let opacity = 160;
          if (particle.x < fadeEdge) {
            opacity = p.map(particle.x, 0, fadeEdge, 0, 255);
          } else if (particle.x > p.width - fadeEdge) {
            opacity = p.map(particle.x, p.width - fadeEdge, p.width, 255, 0);
          }

          p.fill(fillCol, opacity);
          p.circle(particle.x, particle.y, particle.size);
        }
        p.fill(255);
        if (n == 1) {
          p.fill(p.color(0, 0, 255));
          p.text("HISTORIC", p.width * 0.3, dataYOff);
        } else {
          p.fill(p.color(255));
          p.text("TODAY", p.width * 0.3, dataYOff);
        }
      }

      p.fill(255, 160);
      p.text(`Location: ${data.name}`, textXOff, p.height - 190);
      p.text(
        `Sea Level: ${data.currentData.highest} ft`,
        textXOff,
        p.height - 160
      );

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
