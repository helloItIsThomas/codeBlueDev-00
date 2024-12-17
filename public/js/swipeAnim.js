document.addEventListener("DOMContentLoaded", function () {
  const swipeIcon = document.querySelector("#swipeIcon");
  const swipeAnim = document.querySelector("#swipeAnim");

  setTimeout(() => {
    gsap.to(swipeAnim, {
      opacity: 0.8,
      duration: 0.6,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(swipeIcon, {
          y: -100,
          duration: 0.6,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.to(swipeAnim, {
              opacity: 0.0,
              duration: 0.3,
              display: "none",
              ease: "power1.inOut",
            });
          },
        });
      },
    });
  }, 1000);
});
