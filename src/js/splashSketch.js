import "/js/p5/p5.min.js";

let sketch = (p) => {
  p.setup = () => {
    const myCanvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL); // Set canvas size
    myCanvas.parent("splashCanvas");
    p.pixelDensity(2);
  };

  p.draw = () => {
    const backgroundColor = p.color(0, 255, 0);
    p.clear();

    p.translate(-p.width / 2, -p.height / 2, 0);
    p.fill(255, 0, 0); // Set fill color to red
    p.translate(p.width * 0.5, p.height * 0.5);
    p.ellipse(
      p.sin(p.frameCount * 0.05) * 100,
      p.cos(p.frameCount * 0.05) * 100,
      50,
      50
    );
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "splashCanvas"); // Create a new p5 instance in 'splashCanvas'
