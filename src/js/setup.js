import { initLoading } from "./loadingScreen.js";
import { getTideData } from "./pullData.js";
document.addEventListener("DOMContentLoaded", () => {
  setup();
  initLoading();
});

export async function setup() {}
