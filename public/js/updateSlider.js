const slider = document.getElementById("myNavSlider");
slider.max = globalProjectInfo.length - 1;

function trackNavThumb(i) {
  gsap.to(document.getElementById("myNavSlider"), {
    value: imageIndex,
    duration: 0.01,
    ease: "power1.inOut",
  });
}

slider.addEventListener("input", function (event) {
  const value = event.target.value;
  updateThumbnail(value);
});
