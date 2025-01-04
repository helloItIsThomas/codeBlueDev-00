import "/js/p5/lib/p5.min.js";

let sketch = (p) => {
  let zoff = 0;
  const particles = [];
  const DENSITY = 0.15;
  const noiseScale = 2;
  const noiseSpeed = 0.002;
  const amplitude = 120;

  p.setup = () => {
    let splashCanvas = document.getElementById("splashCanvas");
    let splashCanvasWidth = splashCanvas.clientWidth; // Get width of splashCanvas
    let splashCanvasHeight = splashCanvas.clientHeight; // Get height of splashCanvas
    const myCanvas = p.createCanvas(
      splashCanvasWidth,
      splashCanvasHeight,
      p.WEBGL
    ); // Set canvas size
    myCanvas.parent("splashCanvas");
    p.frameRate(p.max(60, p.getFrameRate())); // Set frame rate to max device frame rate
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
    p.translate(-p.width / 2, -p.height / 2, 0);
    const backgroundColor = p.color(0, 255, 0);
    p.clear();
    // p.background(0);
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

new p5(sketch, "splashCanvas"); // Create a new p5 instance in 'splashCanvas'
