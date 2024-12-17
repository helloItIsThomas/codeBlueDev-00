// const subPointer = document.querySelector("#subCursor");
// const subPointerP = document.querySelector("#subCursor p");
const frontC = document.querySelector("#frontC");
const navButtonHitZones = document.querySelectorAll(".socialButtonWrapper");

// document.addEventListener("mousemove", (event) => {
// const mouseX = event.clientX;
// const mouseY = event.clientY;
//
// subPointer.style.left = `${mouseX - 5}px`;
// subPointer.style.top = `${mouseY - 5}px`;
// });

navButtonHitZones.forEach((button, i) => {
  if (globalState.isHome) {
    button.addEventListener("mouseenter", () => {
      cursorEnterBehavior();
    });
    button.addEventListener("mouseleave", () => cursorLeaveBehavior());
    button.addEventListener("click", () => {
      if (i != 0) toProject();
      if (i != 2) toProject();
      if (i != 3) toProject();
    });
  }
});
// frontC.addEventListener("mouseleave", () => cursorLeaveBehavior());

function cursorEnterBehavior() {
  if (globalState.isHome) {
    // myCursor.subPointer.style.width = "50px";
    // myCursor.subPointer.style.height = "50px";
    myCursor.subPointer.style.border = "2px dashed black";
    myCursor.subPointerP.style.color = "black";
  }
}

function cursorLeaveBehavior() {
  // myCursor.subPointer.style.width = "16px";
  // myCursor.subPointer.style.height = "16px";
  myCursor.subPointer.style.border = "2px solid black";
  myCursor.subPointerP.style.color = "white";
}
