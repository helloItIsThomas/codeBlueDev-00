import { setupToContainer } from "./sectionJump.js";
import { disableScroll } from "./utils.js";
import { getTideData } from "./pullData.js";
import { v } from "./variables.js";

// test for test branch

export async function initLoadingScreen(_logoLottie) {
  const timer = {
    val: 0,
  };
  const tideData = await getTideData();
  v.tideData = tideData;

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
        },
      });
    },
  });

  setupToContainer();
}

export function onProgress(loaded) {
  console.log("loaded", loaded);
}
