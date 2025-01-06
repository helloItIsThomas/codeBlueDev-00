export function setupParallaxFish() {
  console.log("running setupParallaxFish");

  const footerScrollTrigger = {
    trigger: "#footer",
    start: "top-=25% center",
    end: "top+=15% center",
    scrub: true,
    markers: true,
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
}
