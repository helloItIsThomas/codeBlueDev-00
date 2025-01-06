import { initLoading } from "./loadingScreen.js";
import { getTideData } from "./pullData.js";
import { setupParallaxFish } from "./parallaxFish.js";
document.addEventListener("DOMContentLoaded", () => {
  setup();
  initLoading();
  setupParallaxFish();
});

export async function setup() {
  const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on("scroll", (e) => {});
}
