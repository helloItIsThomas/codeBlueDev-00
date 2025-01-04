import "/js/p5/lib/p5.min.js";
import { getTideData } from "./pullData.js";

// OUT OF DATE MAYBE, use the one in pullData.js
// https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json?type=waterlevels&units=english
// https://tidesandcurrents.noaa.gov/api-helper/url-generator.html

let sketch = (p) => {
  let zoff = 0;
  const particles = [];
  const DENSITY = 0.15;
  const noiseScale = 2;
  const noiseSpeed = 0.002;
  const amplitude = 120;
  let mono;
  let tideData;

  p.preload = () => {
    mono = p.loadFont("/assets/fonts/mono.ttf");
  };

  p.setup = () => {
    let splashCanvas = document.getElementById("splashCanvas");
    let splashCanvasWidth = splashCanvas.clientWidth; // Get width of splashCanvas
    let splashCanvasHeight = splashCanvas.clientHeight; // Get height of splashCanvas

    const myCanvas = p.createCanvas(
      splashCanvasWidth,
      splashCanvasHeight,
      p.WEBGL
    );
    myCanvas.parent("splashCanvas");
    p.frameRate(p.max(60, p.getFrameRate())); // Set frame rate to max device frame rate
    p.pixelDensity(2);
    createParticles();
    getTideData();
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
    p.translate(-p.width / 2, -p.height / 2, 0);
    p.clear();
    p.noStroke();

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];

      const xoff = p.map(particle.x, 0, p.width, 0, noiseScale);
      const mainNoise = p.noise(xoff, zoff);
      const subtleNoise = p.noise(xoff * 2, zoff * 0.5) * 0.15;
      const yoff = p.map(
        mainNoise + subtleNoise,
        0,
        1.15,
        -amplitude,
        amplitude
      );

      const lineHeightMult = 0.5;

      particle.y = p.height * lineHeightMult + yoff;

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

    p.textFont(mono);
    p.textSize(16);
    const xOff = p.width - 400;
    p.text("LOCATION", xOff, p.height - 100);
    p.text("SEA LEVEL", xOff, p.height - 130);
    p.text("NEXT HIGH TIDE", xOff, p.height - 160);

    zoff += noiseSpeed;
  };

  p.windowResized = () => {
    let splashCanvas = document.getElementById("splashCanvas");
    let splashCanvasWidth = splashCanvas.clientWidth;
    let splashCanvasHeight = splashCanvas.clientHeight;
    p.resizeCanvas(splashCanvasWidth, splashCanvasHeight);
    createParticles();
  };
};

new p5(sketch, "splashCanvas");
