export function initLoading() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.overflow = "hidden"; // Prevent scrolling
  document.body.style.overflow = "hidden"; // Lock the body scroll
  loadingScreen.scrollTo(0, 0); // Scroll to the top of the loading screen

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  setTimeout(() => {
    loadingScreen.style.display = "none";
    document.body.style.overflow = "auto";
    let splashVideo = document.getElementById("splashVideo");
  }, 1000);

  const toPurposeTimeline = gsap.timeline({
    duration: 0.5,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: "#purpose",
      start: "top-=30% center",
      scrub: false,
      markers: true,
      // onEnter onLeave onEnterBack onLeaveBack
      toggleActions: "play none none reverse",
    },
  });
  toPurposeTimeline.to(splashVideo, { opacity: 0 }, 0);
}
