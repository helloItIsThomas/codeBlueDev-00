import { Application, Graphics } from "/js/pixi/pixi.min.mjs";

const cursorCanvas = document.getElementById("cursorCanvas");
const pixiCanvas = document.createElement("canvas");
// cursorCanvas.appendChild(pixiCanvas);

const app = new Application();
await app.init({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundAlpha: 0,
  view: pixiCanvas,
  antialias: true,
  resizeTo: window,
});

const cursorGraphics = new Graphics();
cursorGraphics.beginFill(0xffffff); // White color for the cursor
cursorGraphics.drawCircle(0, 0, 10); // Draw a circle with radius 10
cursorGraphics.endFill();
cursorGraphics.x = app.renderer.width / 2; // Center the cursor initially
cursorGraphics.y = app.renderer.height / 2;
// app.renderer.plugins.interaction.defaultCursorStyle = "inherit";
// app.renderer.events.cursorStyles.default = "inherit";
app.renderer.events.cursor = "none";
app.renderer.events.setCursor("none");
console.log(app.renderer);

app.stage.addChild(cursorGraphics);

document.addEventListener("mousemove", (event) => {
  cursorGraphics.x = event.clientX;
  cursorGraphics.y = event.clientY;
});
