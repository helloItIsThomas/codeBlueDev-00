import { setupToContainer } from "./sectionJump.js";

export function initLoading(_logoLottie) {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  console.log("running initLoading");

  const disableScroll = (event) => {
    event.preventDefault();
  };
  window.addEventListener("wheel", disableScroll, { passive: false });
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.overflow = "hidden"; // Prevent scrolling
  document.body.style.overflow = "hidden"; // Lock the body scroll
  loadingScreen.scrollTo(0, 0); // Scroll to the top of the loading screen

  const timer = {
    val: 0,
  };

  gsap.to(timer, {
    val: 1,
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
