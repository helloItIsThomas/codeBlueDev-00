import { initLoading } from "./loadingScreen.js";
import { setupParallaxFish } from "./parallaxFish.js";
import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

document.addEventListener("DOMContentLoaded", async () => {
  const logoLottie = await setup();
  console.log(logoLottie);
  initLoading(logoLottie);
  setupParallaxFish();
});

export async function setup() {
  const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on("scroll", (e) => {});

  const logoLottie = new DotLottie({
    autoplay: false,
    loop: false,
    canvas: document.getElementById("lottieCanvas"),
    src: "assets/lottie/logo.lottie",
  });
  await new Promise((resolve) => {
    logoLottie.addEventListener("load", () => {
      console.log(logoLottie.totalFrames);
      resolve(logoLottie);
    });
  });
  return logoLottie;
}
