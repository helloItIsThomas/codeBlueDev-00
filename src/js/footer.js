function setTimeForFooter() {}

function animateFooter(_ft) {
  const footerTime = document.querySelector("#footerTime");
  requestAnimationFrame(animateFooter);
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");
  const milliseconds = currentDate
    .getMilliseconds()
    .toString()
    .padStart(3, "0");
  if (footerTime) {
    footerTime.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
}

animateFooter();
