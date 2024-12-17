function calcTop() {
  const banner = document.querySelector(".projectBackCBanner");
  const row1 = banner.querySelector(".row1");
  const thisHeight = parseFloat(window.getComputedStyle(row1).height);
  return thisHeight;
}

function calcBottom() {
  const banner = document.querySelector("#projectBackC");
  const thisRow = banner.querySelector(".row3");
  const fullH = banner;
  const thisHeight =
    parseFloat(window.getComputedStyle(fullH).height) -
    parseFloat(window.getComputedStyle(thisRow).height);
  const insetHeightMaybe = parseFloat(window.getComputedStyle(thisRow).height);

  return insetHeightMaybe;
}

function updateClip(_t = 10, _b = 20, _l = 0, _r = 0, _rad = 30) {
  const thumbnail = document.querySelector("#thumbnail");

  gsap.to(clipShape, {
    top: _t,
    bottom: _b,
    left: _l,
    right: _r,
    radius: _rad,
    duration: 0.1,
    onUpdate: () => {
      const clipPathValue = `inset(${clipShape.top}px ${clipShape.right}px ${clipShape.bottom}px ${clipShape.left}px round ${_rad}px)`;

      thumbnail.style.clipPath = clipPathValue;
    },
  });
}

function setClipToProject() {
  // updateClip(calcTop(), undefined, undefined, undefined, 30);
  updateClip(calcTop(), calcBottom(), undefined, undefined, 30);
}

function setClipToHome() {
  updateClip();
}
