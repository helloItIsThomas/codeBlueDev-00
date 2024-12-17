// initial loading stuff logic
const loadContent = (url) => {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("projectContent").innerHTML = html;
      getContentReferences();
    })
    .then(() => {
      updateHLights(globalProjectInfo[imageIndex].knobValues);
      instantTopFunction();
      myLazyLoad();
      setTimeForFooter();
    })
    .catch((error) => console.error("Error loading content:", error));
};

document.addEventListener("DOMContentLoaded", () => {
  setup();
});

function getContentReferences() {
  appImageListener();
  imageTileListener();
}

function contentToggle() {
  const projectContent = document.getElementById("projectContent");
  if (globalState.isHome) {
    projectContent.style.opacity = "0.0";
  } else {
    projectContent.style.opacity = "1.0";
  }
}
