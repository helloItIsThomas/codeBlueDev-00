export function handleSlidingTextBox() {
  console.log("slidingTextBox.js loaded");

  const textBoxes = document.querySelectorAll(".granteeRightTextContainer");
  console.log(textBoxes.length);

  textBoxes.forEach((textBox) => {
    textBox.scrollTop = 0;
    if (isOverflowing(textBox)) {
      textBox.classList.add("slidingTextBoxOverflow");
      console.log("YES OVERFLOW");
      textBox.querySelector(".slidingTextBoxOverflowGradient").style.display =
        "block";
    } else {
      textBox.classList.remove("slidingTextBoxOverflow");
      console.log("NO OVERFLOW");
      textBox.querySelector(".slidingTextBoxOverflowGradient").style.display =
        "none";
    }
  });
}

function isOverflowing(element) {
  console.log(element);
  console.log(element.scrollHeight);
  console.log(element.offsetHeight);
  return element.scrollHeight > element.offsetHeight;
}
