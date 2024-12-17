let knobBallFullW = 70;
let navBallFullW = 60;

const clipShape = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  bottomOffsetExtra: 0,
  radius: 0,
};

const globalState = {
  isHome: true,
};

let imageIndex = 0;
let selectedProject = 0;

// let rightAppImages;

class ProjectInfo {
  constructor(title, thumbnail, link, knobValues) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.link = link;
    this.knobValues = knobValues;
  }
}

const globalProjectInfo = [
  new ProjectInfo(
    "Bud Music",
    "/assets/projects/budMusic/product-3-01.webp",
    "/projects/budMusic",
    [0.8, 0.8, 0.2, 0.0]
  ),
  new ProjectInfo(
    "Youtube",
    "/assets/projects/youtubeCherry/liveOak/FinalComps/5.webp",
    "/projects/youtube",
    [0.6, 0.8, 0.6, 0.1]
  ),
  new ProjectInfo(
    "Snickers",
    "/assets/projects/snickers/banner.mp4",
    "/projects/snickers",
    [0.8, 0.7, 0.2, 0.0]
  ),
  new ProjectInfo(
    "Mozilla",
    "/assets/projects/mozilla/banner.webp",
    "/projects/mozilla",
    [0.8, 0.7, 0.2, 0.0]
  ),
  new ProjectInfo(
    "DIA",
    "/assets/projects/main/dia/sign-2.webp",
    "/projects/dia",
    [0.4, 0.9, 0.6, 0.0]
  ),
  new ProjectInfo(
    "AAFF",
    "/assets/projects/main/aaff/poster-1.webp",
    "/projects/aaff",
    [0.7, 0.9, 0.6, 0.0]
  ),
  new ProjectInfo(
    "826",
    "/assets/projects/main/826/book-0.webp",
    "/projects/826",
    [0.5, 0.9, 0.3, 0.0]
  ),
  new ProjectInfo(
    "TechnoParty",
    "/assets/projects/main/techno/ticket.mp4",
    "/projects/techno",
    [0.6, 0.8, 0.8, 0.0]
  ),
  new ProjectInfo(
    "c4a",
    "/assets/projects/main/c4a/code.png",
    "/projects/c4a",
    [0.7, 0.2, 0.6, 0.5]
  ),
  new ProjectInfo(
    "language",
    "/assets/projects/main/language/doc-2.webp",
    "/projects/language",
    [0.8, 0.3, 0.9, 0.0]
  ),
  new ProjectInfo(
    "PARC",
    "/assets/projects/main/parc/parc-square.mp4",
    "/projects/parc",
    [0.6, 0.6, 0.2, 0.6]
  ),
];
