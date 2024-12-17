document.querySelector("#mobile-view").style.display = "none";

if (
  navigator.userAgent.match(/Mobi/i) ||
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  document.querySelector("body").style.background =
    "linear-gradient(to bottom, #ffffff, #f3f3f3)";
  const mobile = document.querySelector("#mobile-view");
  document.querySelector("#desktop-view").style.display = "none";
  mobile.style.display = "block";
  mobile.style.width = "100%";
  mobile.style.height = "100%";
  mobile.style.background = "linear-gradient(to bottom, #ffffff, #f3f3f3)";
  mobile.style.display = "flex";
  mobile.style.textAlign = "center";
  mobile.style.flexDirection = "column";
  mobile.style.lineHeight = "0.95";
  mobile.style.justifyContent = "center";
  mobile.style.alignItems = "center";
}
