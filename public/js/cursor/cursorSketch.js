import {
  Application,
  Assets,
  Buffer,
  BufferUsage,
  Container,
  Geometry,
  Mesh,
  Shader,
  Graphics,
} from "/js/pixi/pixi.min.mjs";
import { BlurFilter } from "pixi.js";
import { BloomFilter } from "pixi-filters/bloom";
import { ConvolutionFilter } from "pixi-filters/convolution";
import { DisplacementFilter } from "pixi.js";
import { GlowFilter } from "pixi-filters/glow";
import { ShockwaveFilter } from "pixi-filters/shockwave";

const cursorCanvas = document.getElementById("cursorCanvas");
const pixiCanvas = document.createElement("canvas");
cursorCanvas.appendChild(pixiCanvas);

const app = new Application();
await app.init({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundAlpha: 0,
  resolution: 3,
  view: pixiCanvas,
  antialias: true,
  resizeTo: window,
});

const { vertex, fragment } = await loadShaders();

const cursorGraphics = new Graphics();
cursorGraphics.beginFill(0xffffff); // White color for the cursor
cursorGraphics.drawCircle(0, 0, 10); // Draw a circle with radius 10
cursorGraphics.endFill();
cursorGraphics.x = app.renderer.width / 2; // Center the cursor initially
cursorGraphics.y = app.renderer.height / 2;

app.renderer.events.cursor = "none";
app.renderer.events.setCursor("none");

app.stage.addChild(cursorGraphics);

document.addEventListener("mousemove", (event) => {
  cursorGraphics.x = event.clientX;
  cursorGraphics.y = event.clientY;
});
