// const subPointerP = document.querySelector("#subCursor p");
// const subPointer = document.querySelector("#subCursor");

const myCursor = {
  subPointerP: document.querySelector("#subCursor p"),
  subPointer: document.querySelector("#subCursor"),
  overButton: false,
};

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  if (!myCursor.overButton) {
    myCursor.subPointer.style.left = `${mouseX - 5}px`;
    myCursor.subPointer.style.top = `${mouseY - 5}px`;
  }
});

const navButtons = document.querySelectorAll(".socialButton");
navButtons.forEach((button, i) => {
  const img = document.createElement("img");
  img.src = globalProjectInfo[i].thumbnail;
  button.appendChild(img);
});

const buttonWrappers = document.querySelectorAll(".socialButtonWrapper");
buttonWrappers.forEach((wrapper, i) => {
  const button = wrapper.querySelector(".socialButton");
  wrapper.addEventListener("mouseover", () => {
    if (globalState.isHome) {
      updateThumbnail(i);
      myCursor.overButton = true;
      const buttonBounds = button.getBoundingClientRect();
      myCursor.subPointer.style.width = buttonBounds.width + "px";
      myCursor.subPointer.style.height = buttonBounds.height + "px";
      myCursor.subPointer.style.left =
        buttonBounds.left +
        buttonBounds.width / 2 -
        buttonBounds.width / 2 +
        "px";
      myCursor.subPointer.style.top =
        buttonBounds.top +
        buttonBounds.height / 2 -
        buttonBounds.height / 2 +
        "px";
      gsap.to(button, {
        "--offsetTop": "0",
        "--offsetLeft": "0",
        duration: 0.16,
      });
    }
  });
  wrapper.addEventListener("mouseout", () => {
    myCursor.overButton = false;
    gsap.to(button, {
      "--offsetTop": "4px",
      "--offsetLeft": "-4px",
      duration: 0.16,
      ease: "power1.out",
    });
  });
});
