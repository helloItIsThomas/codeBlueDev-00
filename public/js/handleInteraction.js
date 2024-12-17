const tbc = document.getElementById("topAndBottomContent");
const l0 = document.getElementById("layout0");

function homeButton() {
  document.getElementById("logo").addEventListener("click", () => {
    toHome();
  });
}
homeButton();

if (globalState.isHome) {
  topAndBottomContent.style.overflowY = "visible";
}

function toHome() {
  if (globalState.isHome) {
    return;
  }
  topFunction();
  globalState.isHome = true;
  tbc.style.overflowY = "hidden";
  const thumb = document.getElementById("frontC");
  thumb.style.display = "block";
  expandSocials();
  expandNavButtons();
  // expandSlider();
  setClipToHome();
}

function toProject() {
  if (!globalState.isHome) {
    return;
  }
  globalState.isHome = false;

  const contentURL = globalProjectInfo[imageIndex].link;
  loadContent(contentURL);
  shrinkSocials();
  // shrinkSlider();
  shrinkNavButtons();
  contentToggle();
}

function shrinkSocials() {
  const socials = document.querySelectorAll(".socialIcon img");
  gsap.to(socials, {
    width: 0,
    duration: 0.4,
    opacity: 0,
    display: "none",
    stagger: {
      each: 0.05,
      from: "center",
      grid: "auto",
      ease: "power2.inOut",
    },
    onComplete: () => {
      shrinkKnobBar();
      shrinkNavBar();
    },
  });
}

function unlockScroll() {
  tbc.style.overflowY = "scroll";
}

function shrinkNavBar() {
  const bar = document.querySelector("#navBar");
  gsap.to(bar, {
    width: 20,
    duration: 0.4,
    ease: "power2.inOut",
    onComplete: () => {
      unlockScroll();
      setClipToProject();
      cursorLeaveBehavior();
    },
  });
}

function expandNavBar() {
  const bar = document.querySelector("#navBar");
  // bar.style.width = `${navBallFullW}px`;
  gsap.to(bar, {
    width: `${navBallFullW}px`,
    duration: 0.4,
    ease: "power2.inOut",
  });
}

function expandSocials() {
  const socials = document.querySelectorAll(".socialIcon img");
  gsap.to(socials, {
    width: "100%",
    duration: 0.4,
    opacity: 1,
    display: "block",
    stagger: {
      // wrap advanced options in an object
      each: 0.05,
      from: "center",
      grid: "auto",
      ease: "power2.inOut",
    },
  });
}

function shrinkSlider() {
  const navBar = document.querySelectorAll(".vertical-slider")[0];

  gsap.to(navBar, {
    "--thumbDiam": "0",
    "--thumbRad": "0",
    "--thumbDisplay": "none",
    duration: 0.4,
    stagger: 0.222,
    ease: "power2.in",
  });

  const s = document.querySelector("#nav-container ");
  gsap.to(s, {
    height: `${0}%`,
    duration: 0.4,
    stagger: 0.222,
    ease: "power2.in",
  });
}

function shrinkNavButtons() {
  const sbw = document.querySelectorAll(".socialButtonWrapper");
  gsap.to(sbw, {
    // "--thumbDisplay": "none",
    opacity: 0,
    display: "none",
    duration: 0.1,
    stagger: 0.02,
    ease: "power2.in",
  });

  const s = document.querySelector("#nav-container ");
  gsap.to(s, {
    height: `${0}%`,
    duration: 0.4,
    stagger: 0.222,
    ease: "power2.in",
  });
}

function expandNavButtons() {
  const sbw = document.querySelectorAll(".socialButtonWrapper");
  gsap.to(sbw, {
    opacity: 1,
    display: "block",
    duration: 0.1,
    stagger: 0.02,
    ease: "power2.in",
    onComplete: () => {
      expandKnobBar();
      expandNavBar();
    },
  });

  const s = document.querySelector("#nav-container ");
  gsap.to(s, {
    height: `${100}%`,
    duration: 0.4,
    ease: "power2.in",
  });
}

function expandSlider() {
  const navBar = document.querySelectorAll(".vertical-slider")[0];

  gsap.to(navBar, {
    "--thumbDiam": "8",
    "--thumbRad": "4",
    "--thumbDisplay": "block",
    duration: 0.4,
    stagger: 0.222,
    // ease: "power2.out",
    onComplete: () => {
      // expandKnobBar();
      // expandNavBar();
    },
  });

  const s = document.querySelector("#nav-container ");
  gsap.to(s, {
    height: `${100}%`,
    duration: 0.4,
    stagger: 0.222,
    ease: "power2.in",
  });
}

function shrinkKnobBar() {
  const knobBar = document.querySelector("#knobBar");
  const knobContainers = document.querySelectorAll(".knob-container");
  gsap.to(knobContainers, {
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    ease: "power2.inOut",
    onComplete: () => {
      // resizeClip();
    },
  });
  gsap.to(knobBar, {
    width: 20,
    duration: 0.4,
    stagger: 0.222,
    ease: "power2.inOut",
  });
}

function expandKnobBar() {
  const knobBar = document.querySelector("#knobBar");

  gsap.to(knobBar, {
    // width: knobBallFullW,
    width: `${knobBallFullW}px`,

    opacity: 1,
    duration: 0.4,
    stagger: 0.222,
    ease: "power2.inOut",
  });

  const knobContainers = document.querySelectorAll(".knob-container");
  gsap.to(knobContainers, {
    opacity: 1,
    duration: 0.4,
    stagger: 0.222,
    ease: "power2.inOut",
  });
}
