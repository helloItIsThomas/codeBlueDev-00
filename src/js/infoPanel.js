//newest
const aboutMe = document.getElementById("aboutMe");
const aboutButton = document.getElementById("aboutIcon");
let infoPanelStatus = window.getComputedStyle(aboutMe).display;
let isDragging = false;
let offsetX, offsetY;

document.onmousedown = function (e) {
  if (!isDragging) {
    // if (e.target !== aboutMe) {
    // isDragging = false;
    aboutIcon.style.backgroundColor = "black";
    aboutMe.style.display = "none";
  }
  // }
};

aboutMe.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - aboutMe.offsetLeft;
  offsetY = e.clientY - aboutMe.offsetTop;
  aboutMe.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    aboutMe.style.left = `${e.clientX - offsetX}px`;
    aboutMe.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  aboutMe.style.cursor = "grab";
});

if (infoPanelStatus === "flex") {
  aboutMe.style.color = "#c9221e";
}

aboutButton.addEventListener("click", () => {
  infoPanelStatus = window.getComputedStyle(aboutMe).display;
  if (infoPanelStatus === "none") {
    aboutIcon.style.backgroundColor = "#c9221e";
    aboutMe.style.display = "flex";
  } else if (infoPanelStatus === "flex") {
    aboutIcon.style.backgroundColor = "black";
    aboutMe.style.display = "none";
  }
});
