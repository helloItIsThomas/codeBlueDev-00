export function initLoading() {
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

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  setTimeout(() => {
    // fake loading
    loadingScreen.style.display = "none";
    document.body.style.overflow = "auto";
    window.removeEventListener("wheel", disableScroll);
  }, 1000);

  const toPurposeTimeline = gsap.timeline({
    duration: 0.5,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: "#purpose",
      start: "top-=45% center",
      end: "bottom-=55% center",
      scrub: false,
      markers: false,
      // onEnter onLeave onEnterBack onLeaveBack
      toggleActions: "play none reverse none",
      onEnter: () => {
        const disableScroll = (event) => {
          event.preventDefault();
        };
        window.addEventListener("wheel", disableScroll, { passive: false });

        gsap.to("#navBar", {
          opacity: 0,
          y: "-100%",
          duration: 0.5,
          ease: "power1.out",
        });
        gsap.to(window, {
          duration: 1,
          ease: "power3.out",
          scrollTo: { y: "#purpose" },
          onComplete: () => {
            window.removeEventListener("wheel", disableScroll);
          },
        });
      },
      onEnterBack: () => {
        const disableScroll = (event) => {
          event.preventDefault();
        };
        window.addEventListener("wheel", disableScroll, { passive: false });
        gsap.to("#navBar", {
          opacity: 1,
          y: "0",
          duration: 0.5,
          ease: "power1.out",
        });
        gsap.to(window, {
          duration: 1,
          ease: "power3.out",
          scrollTo: { y: "#splash" },
          onComplete: () => {
            window.removeEventListener("wheel", disableScroll);
          },
        });
      },
    },
  });
  toPurposeTimeline.to(splashVideo, { opacity: 0 }, 0);
}
