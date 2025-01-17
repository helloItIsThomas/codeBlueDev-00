import { v } from "./variables.js";
import { initLoadingScreen } from "./loadingScreen.js";
import { disableScroll } from "./utils.js";
import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";
import { getTideData } from "./pullData.js";
import { sketch } from "./splashSketch.js";

document.addEventListener("DOMContentLoaded", async () => {
  // const logoLottie = await setup();
  // await initLoadingScreen(logoLottie);
  // new p5(sketch, "splashCanvas");
});

export async function setup() {
  // SETUP LENIS start
  const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on("scroll", (e) => {});
  // SETUP LENIS end

  // LOAD logoLottie start
  const logoLottie = new DotLottie({
    autoplay: false,
    loop: false,
    canvas: document.getElementById("lottieCanvas"),
    src: "assets/lottie/logo.lottie",
  });
  await new Promise((resolve) => {
    logoLottie.addEventListener("load", () => {
      resolve(logoLottie);
    });
  });
  // LOAD logoLottie end

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

  return logoLottie;
}
