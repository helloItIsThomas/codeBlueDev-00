import { v } from "./variables.js";

const granteeRights = document.querySelectorAll(".granteeRight");

export function updateSlidingTextBoxes() {
  // console.log("updating sliding text boxes");
  const granteeRights = document.querySelectorAll(".granteeRight");
  granteeRights.forEach((gr) => {
    // const tb = gr.querySelector(".granteeRightTextContainer");
    // granteeRightTextContainer.max - height;
    // if (!v.isMobile) {
    // tb.style.maxHeight = "5000px";
    // }
    // isOverflowing(gr);
  });
}

const expandTextArrows = document.querySelectorAll(".expandTextArrow");
// expandTextArrows.forEach((expandTextArrow) => {
// expandTextArrow.addEventListener("click", () => {
// console.log("clicked");
// const textBox = expandTextArrow.parentElement.querySelector(
// ".granteeRightTextContainer"
// );
// const gradient = textBox.querySelector(".slidingTextBoxOverflowGradient");

// const isExpanded = textBox.classList.toggle("full");

// gsap.to(textBox, {
// maxHeight: isExpanded ? "5000px" : "300px",
// duration: 1,
// ease: "power3.inOut",
// });

// gsap.to(gradient, {
// opacity: isExpanded ? 0 : 1, // Animate opacity
// duration: 1,
// ease: "power3.inOut",
// });
// });
// });

function isOverflowing(element) {
  const textBox = element.querySelector(".granteeRightTextContainer");
  const overflowing = textBox.scrollHeight > textBox.offsetHeight;
  if (overflowing) {
    element.querySelector(".expandTextArrow").style.display = "block";
    element.querySelector(".slidingTextBoxOverflowGradient").style.opacity = 1;
  } else {
    element.querySelector(".expandTextArrow").style.display = "none";
    element.querySelector(".slidingTextBoxOverflowGradient").style.opacity = 0;
  }
}
