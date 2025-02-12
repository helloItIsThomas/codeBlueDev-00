const granteeRights = document.querySelectorAll(".granteeRight");

granteeRights.forEach((gr) => {
  const expandTextArrow = gr.querySelector(".expandTextArrow");
  expandTextArrow.addEventListener("click", () => {
    console.log("clicked");
    const textBox = gr.querySelector(".granteeRightTextContainer");
    const gradient = gr.querySelector(".slidingTextBoxOverflowGradient");
    console.log(textBox);

    const isExpanded = textBox.classList.toggle("full");
    gsap.to(textBox, {
      maxHeight: isExpanded ? "5000px" : "300px",
      duration: 1,
      ease: "power3.inOut",
      onUpdate: () => {
        gsap.to(gradient, {
          opacity: isExpanded ? 0 : 1,
          ease: "power2.inOut",
        });
      },
      onComplete: () => {
        handleSlidingTextBox(gr);
      },
    });
  });
});

export function handleSlidingTextBox(gr) {
  const textBox = gr.querySelector(".granteeRightTextContainer");
  const gradient = gr.querySelector(".slidingTextBoxOverflowGradient");
  textBox.scrollTop = 0;
  if (isOverflowing(textBox)) {
    gradient.style.display = "block";
    console.log("HIDE");
  } else {
    gradient.style.display = "none";
    console.log("SHOW");
  }
}

function isOverflowing(element) {
  return element.scrollHeight > element.offsetHeight;
}
