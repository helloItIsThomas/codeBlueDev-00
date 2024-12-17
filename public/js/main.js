function doImageVideoChange() {
  if (
    globalProjectInfo[imageIndex].thumbnail.includes("mov") ||
    globalProjectInfo[imageIndex].thumbnail.includes("mp4")
  ) {
    thumbnailImg.style.display = "none";
    thumbnailVid.style.display = "block";
    thumbnailVid.src = globalProjectInfo[imageIndex].thumbnail;

    // Run a function after the video has loaded
    thumbnailVid.onloadeddata = function () {
      openDoors();
    };
  } else {
    thumbnailImg.style.display = "block";
    thumbnailVid.style.display = "none";
    thumbnailImg.src = globalProjectInfo[imageIndex].thumbnail;

    // Run a function after the image has loaded
    thumbnailImg.onload = function () {
      openDoors();
    };
  }
}

// Define the function to run after loading
function afterLoad() {}

window.addEventListener("resize", () => {
  if (globalState.isHome) {
    setClipToHome();
  } else {
    setClipToProject();
  }
});

let scrollPos = 0;
let lastRoundedIndex = -1; // Keep track of the last rounded index
const thumbnail = document.querySelector("#thumbnail");
const thumbnailImg = document.querySelector("#thumbnail img");
const thumbnailVid = document.querySelector("#thumbnail video");

let isScrolling = false; // Flag to track the scrolling state
const sensitivity = 0.05;
let timeoutId;

function updateThumbnail(newImgIndex) {
  if (newImgIndex === imageIndex) return;
  imageIndex = newImgIndex;
  closeDoors();
}

function openDoors() {
  const cont = document.getElementById("frontC");
  gsap.to(cont, {
    "--after-height": "0%",
    "--before-height": "0%",
    duration: 0.25,
    // duration: 1.25,
    ease: "power2.inOut",
  });
}

function closeDoors() {
  const cont = document.getElementById("frontC");
  gsap.to(cont, {
    "--after-height": "50%",
    "--before-height": "50%",
    duration: 0.333,
    // duration: 1.333,
    ease: "power2.out",
    onComplete: () => {
      doImageVideoChange();
      updateLights(globalProjectInfo[imageIndex].knobValues);
      if (
        imageIndex == 1 ||
        imageIndex == 4 ||
        imageIndex == 5 ||
        imageIndex == 6 ||
        imageIndex == 7 ||
        imageIndex == 8 ||
        imageIndex == 9 ||
        imageIndex == 10
      ) {
        thumbnail.style.filter = "blur(0px)";
      } else thumbnail.style.filter = "blur(40px)";
    },
  });
}
