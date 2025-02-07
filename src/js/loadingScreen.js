import { setupToContainer } from "./sectionJump.js";
import { disableScroll } from "./utils.js";
import { getTideData } from "./pullData.js";
import { v } from "./variables.js";
import { sv } from "./cursor/variables.js";

// test for test branch
// a second test for test branch

export async function initLoadingScreen(_logoLottie) {
  const timer = {
    val: 0,
  };
  const tideData = await getTideData();
  v.tideData = tideData;
  const tideDataLocation = document.getElementById("tideDataLocation");
  tideDataLocation.textContent = tideData.name;
  const tideDataSeaLevel = document.getElementById("tideDataSeaLevel");
  tideDataSeaLevel.textContent = tideData.currentData.highest;

  gsap.to(timer, {
    val: 1.0,
    duration: 2.0,
    onUpdate: () => {
      _logoLottie.setFrame(Math.ceil(timer.val * _logoLottie.totalFrames));
    },
    onComplete: () => {
      gsap.to(loadingScreen, {
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          loadingScreen.style.display = "none";
          document.body.style.overflow = "auto";
          window.removeEventListener("wheel", disableScroll);
          splashTextToggle();
        },
      });
    },
  });

  setupToContainer();
}

function splashTextToggle() {
  const text = document.getElementById("splashStatement");
  const logoCanvas = document.getElementById("lottieCanvas");
  const splashCTA = document.getElementById("splashCTA");
  gsap.to(logoCanvas, {
    opacity: 0,
    delay: 3,
    duration: 1,
    ease: "power3.inOut",
    onComplete: () => {
      logoCanvas.style.display = "none";
      splashCTA.style.display = "flex";
      text.style.display = "block";
      gsap.to([text, splashCTA], {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.5,
        onComplete: () => {
          sv.lenis.start();
        },
      });
    },
  });
}

export function onProgress(loaded) {
  console.log("loaded", loaded);
}
