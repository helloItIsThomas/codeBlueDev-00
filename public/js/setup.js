function setup() {
  console.log(" •• hello! •• ");
}

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
