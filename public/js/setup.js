function setup() {
  console.log(" •• hello! •• ");
  projectContent = document.querySelector("#projectContent");
  preloadMedia();
  doImageVideoChange();

  // loadContent("/projects/snickers");
  updateThumbnail(0);

  const navBar = document.querySelector("#navBar");
  navBar.style.maxWidth = `${navBallFullW}px`;
  navBar.style.width = `${navBallFullW}px`;
  const knobBar = document.querySelector("#knobBar");
  knobBar.style.width = `${navBallFullW}px`;
  knobBar.style.maxWidth = `${navBallFullW}px`;

  updateClip();
  setupDebug();
}

function setupDebug() {}

function preloadMedia() {
  globalProjectInfo.forEach((project, index) => {
    if (
      project.thumbnail.includes("mov") ||
      project.thumbnail.includes("mp4")
    ) {
      const vid = document.createElement("video");
      vid.src = project.thumbnail;
      vid.preload = "auto"; // Preload video
    } else {
      const img = new Image();
      img.src = project.thumbnail;
    }
  });
}
