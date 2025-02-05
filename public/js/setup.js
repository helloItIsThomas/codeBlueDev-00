document.addEventListener("DOMContentLoaded", async () => {
  console.log("running general setup");

  const pageLoadingScreen = document.getElementById("pageLoadingScreen");

  pageLoadingScreen.style.display = "block";
  // pageLoadingScreen.style.display = "none";

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
});
