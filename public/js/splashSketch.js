import "/js/p5/lib/p5.min.js";

let sketch = (p) => {
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
    let splashCanvas = document.getElementById("splashCanvas");
    let splashCanvasWidth = splashCanvas.clientWidth;
    let splashCanvasHeight = splashCanvas.clientHeight;
    p.resizeCanvas(splashCanvasWidth, splashCanvasHeight);
  };
};

new p5(sketch, "splashCanvas"); // Create a new p5 instance in 'splashCanvas'
