// let knobContainers;
// let knobs;
//
// function initKnobs() {
// knobContainers = document.querySelectorAll(".knob-container");
// knobs = Array.from(knobContainers).map((container) => {
// const knobElement = container.querySelector(".knob");
// const knobDisplay = container.querySelector(".knob-display");
// const knobInstance = new Knob(knobElement, function (knobInstance) {
// const angle = knobInstance.angle();
// let value = (angle % 360) / 360;
// if (value < 0) value += 1;
// knobElement.style.transform = `rotate(${angle}deg)`;
// });
//
// return {
// el: knobElement,
// display: knobDisplay,
// knob: knobInstance,
// };
// });
// }
//
// function updateKnobs(vals, index) {
// trackNavThumb(index);
// gsap.to(
// knobs.map((k) => k.knob),
// {
// angle: (i) => vals[i] * 360,
// duration: 0.666,
// stagger: {
// each: -0.05,
// from: "random",
// },
// ease: "elastic.inOut",
// }
// );
// updateLights(vals);
// }
//
function updateLights(vals) {
  knobContainers = document.querySelectorAll(".knob-container");
  knobContainers.forEach((knobContainer, i) => {
    const lights = knobContainer.querySelectorAll(".knobLight");
    const numLights = lights.length;

    lights.forEach((light) => {
      light.style.backgroundColor = "white";
    });

    // Calculate the index of the closest light
    const closestLightIndex = Math.round(vals[i] * (numLights - 1));
    if (closestLightIndex >= 0 && closestLightIndex < numLights) {
      lights[closestLightIndex].style.opacity = 1.0;
      lights[closestLightIndex].style.backgroundColor = "#c9221e";
    }
  });
}
