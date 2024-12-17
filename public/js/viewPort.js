let options = {
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(myFunction, options);
const paragraph = document.querySelector("#animateMe");
observer.observe(paragraph);

function myFunction(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      detectLineBreaks(paragraph);
    } else {
    }
  });
}

function detectLineBreaks(paragraph) {
  const words = paragraph.innerText.split(" ");
  paragraph.innerHTML = ""; // Clear paragraph content

  const spans = words.map((word) => {
    const span = document.createElement("span");
    span.innerText = word + " ";
    paragraph.appendChild(span);
    return span;
  });

  let lastTop = spans[0].getBoundingClientRect().top;
  spans.forEach((span, index) => {
    const top = span.getBoundingClientRect().top;
    if (top > lastTop) {
      lastTop = top;
    }
  });
}
