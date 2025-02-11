import { sv } from "./cursor/variables.js";

export function styleThisPageNavLink(link) {
  link.style.opacity = 1;
}

export function toggleMobileMenu() {
  document.getElementById("hamburgerMenu").addEventListener("click", () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.display === "none") {
      mobileMenu.style.display = "flex";
      document.body.style.overflow = "hidden";
      sv.lenis.stop();
    } else {
      mobileMenu.style.display = "none";
      document.body.style.overflow = "auto";
      sv.lenis.start();
    }
  });
}
