// let hKnobContainers;
// let hKnobs;
//
// function initHKnobs() {
// hKnobContainers = document.querySelectorAll(".knob-container-H");
// hKnobs = Array.from(hKnobContainers).map((container) => {
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
// function updateHKnobs(vals, index) {
// trackNavThumb(index);
// gsap.to(
// hKnobs.map((k) => k.knob),
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
// updateHLights(vals);
// }

function updateHLights(vals) {
  hKnobContainers = document.querySelectorAll(".knob-container-H");
  hKnobContainers.forEach((knobContainer, i) => {
    const hLights = knobContainer.querySelectorAll(".knobLight");
    const numLights = hLights.length;

    hLights.forEach((light) => {
      // light.style.opacity = 0.1;
      light.style.backgroundColor = "white";
    });

    // Calculate the index of the closest light
    const closestLightIndex = Math.round(vals[i] * (numLights - 1));
    if (closestLightIndex >= 0 && closestLightIndex < numLights) {
      hLights[closestLightIndex].style.opacity = 1.0;
      hLights[closestLightIndex].style.backgroundColor = "rgb(255, 0, 0)";
    }
  });
}
