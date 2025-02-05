import { sv } from "./cursor/variables.js";
// import { cursorSetup } from "./cursor/cursorSketch.js";
import {
  Application,
  Assets,
  Buffer,
  BufferUsage,
  Container,
  Geometry,
  Mesh,
  Point,
  Shader,
  Sprite,
  Texture,
} from "/js/pixi/pixi.min.mjs";

import { BloomFilter, GlowFilter } from "/js/pixi-filters/pixi-filters.mjs";

import { loadShaders } from "./cursor/loadShaders.js";
import { render } from "./cursor/render.js";
import { Triangle } from "./cursor/triangle.js";

document.addEventListener("DOMContentLoaded", async () => {
  console.log("running general setup");

  const pageLoadingScreen = document.getElementById("pageLoadingScreen");

  // pageLoadingScreen.style.display = "none";
  pageLoadingScreen.style.display = "block";

  gsap.from(
    ".h2_0, .h1_0, .h0_5, .h1_5, .bm0, .bm1, .bm2, .bm3, .bs0, .bs1, .bs2, .bs3, .bser0, .bser1, .bser2, .bser3, hr",
    {
      y: 15,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.05,
      delay: 1.9,
    }
  );

  gsap.to(pageLoadingScreen, {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 2,
    onComplete: () => {
      pageLoadingScreen.style.display = "none";
    },
  });

  // SETUP LENIS start
  // const lenis = new Lenis({
  // autoRaf: true,
  // });
  // lenis.on("scroll", (e) => {});
  // SETUP LENIS end

  // SETUP PARALLAX FISH start
  const footerScrollTrigger = {
    trigger: "#footer",
    start: "top-=25% center",
    end: "top+=15% center",
    scrub: true,
    markers: false,
  };

  gsap.from("#footerFish", {
    scrollTrigger: footerScrollTrigger,
    y: 100,
    ease: "power1.inOut",
  });

  gsap.from("#footer", {
    scrollTrigger: footerScrollTrigger,
    backgroundPosition: "85% 85%",
    ease: "power1.inOut",
  });
  // SETUP PARALLAX FISH end

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  mySetup();
});

async function mySetup() {
  sv.pApp = new Application();

  await sv.pApp.init({
    width: window.innerWidth,
    height: window.innerHeight,
    // backgroundColor: 0x071134,
    backgroundColor: 0x000,
    // transparent: true,
    // resolution: 3,
    resizeTo: window,
  });

  const cursorCanvas = document.getElementById("cursorCanvas");
  cursorCanvas.appendChild(sv.pApp.canvas);

  const spinnyBG = await Assets.load("/assets/images/dot2.png");

  const { vertex, fragment } = await loadShaders();

  const instancePositionBuffer = new Buffer({
    data: new Float32Array(sv.totalTriangles * 2),
    usage: BufferUsage.VERTEX | BufferUsage.COPY_DST,
  });

  const alphaBuffer = new Buffer({
    data: new Float32Array(sv.totalTriangles),
    usage: BufferUsage.VERTEX | BufferUsage.COPY_DST,
  });

  sv.triangles = [];

  for (let i = 0; i < sv.totalTriangles; i++) {
    sv.triangles[i] = new Triangle(
      i,
      Math.random() * sv.pApp.screen.width,
      Math.random() * sv.pApp.screen.height,
      Math.random() * 0.05
    );
  }

  const cellW = 5;
  const cellH = cellW;
  const geometry = new Geometry({
    topology: "triangle-strip",
    instanceCount: sv.totalTriangles,
    attributes: {
      aPosition: [
        0.0,
        0.0,
        cellW,
        0.0,
        cellW,
        cellH,
        cellW,
        cellH,
        0.0,
        cellH,
        0.0,
        0.0,
      ],
      aUV: [0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
      aPositionOffset: {
        buffer: instancePositionBuffer,
        instance: true,
      },
      aAlpha: {
        buffer: alphaBuffer,
        instance: true,
      },
      aSize: {
        buffer: new Buffer({
          data: new Float32Array(sv.triangles.map((t) => t.size)),
          usage: BufferUsage.VERTEX | BufferUsage.COPY_DST,
        }),
        instance: true,
      },
    },
  });

  const gl = { vertex, fragment };

  const shader = Shader.from({
    gl,
    resources: {
      myTexture: spinnyBG.source,
      uSampler: spinnyBG.source.style,
      waveUniforms: {
        mouseVelocity: { value: 0.5, type: "f32" },
        mousePos: { value: sv.mousePos, type: "vec2<f32>" },
        time: { value: sv.pApp.ticker.lastTime, type: "f32" },
      },
    },
  });

  const triangleMesh = new Mesh({
    geometry,
    shader,
  });

  const container = new Container();
  container.width = sv.pApp.screen.width;
  container.height = sv.pApp.screen.height;
  container.filterArea = sv.pApp.screen;

  // try glow, displacement, convolution?, shockwave?,
  container.filters = [
    new BloomFilter({
      strength: 10,
      quality: 5,
      kernelSize: 7,
    }),
    new GlowFilter({
      color: 0x64f0f5,
      distance: 1,
      innerStrength: 0,
      outerStrength: 5.0,
    }),
  ];

  container.addChild(triangleMesh);
  sv.pApp.stage.addChild(container);

  sv.pApp.ticker.add(() => {
    sv.clock = sv.pApp.ticker.lastTime * 0.001;
    render(instancePositionBuffer, alphaBuffer, triangleMesh);
  });
}
