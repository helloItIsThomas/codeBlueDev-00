function lerp(start, end, amount) {
  return (1 - amount) * start + amount * end;
}

let targetX = 0,
  targetY = 0;
let currentX = 0,
  currentY = 0;
let targetWidth = 10,
  targetHeight = 10;

const cursorLerpSpeed = 0.1;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animate() {
  currentX = lerp(currentX, targetX, cursorLerpSpeed);
  currentY = lerp(currentY, targetY, cursorLerpSpeed);

  const hoveredElement = document.elementFromPoint(targetX, targetY);

  if (hoveredElement && window.getComputedStyle(hoveredElement).border) {
    const rect = hoveredElement.getBoundingClientRect();
    targetWidth = rect.width;
    targetHeight = rect.height;
  } else {
    targetWidth = 10;
    targetHeight = 10;
  }

  const width = lerp(
    parseFloat(document.body.style.getPropertyValue("--div-width") || 10),
    targetWidth,
    cursorLerpSpeed
  );
  const height = lerp(
    parseFloat(document.body.style.getPropertyValue("--div-height") || 10),
    targetHeight,
    cursorLerpSpeed
  );

  document.body.style.setProperty("--div-width", `${width}px`);
  document.body.style.setProperty("--div-height", `${height}px`);
  document.body.style.setProperty("--mouse-x", `${currentX}px`);
  document.body.style.setProperty("--mouse-y", `${currentY}px`);

  const radius = 20; // Distance from the origin cursor
  const cursors = document.querySelectorAll(".cursor");
  cursors.forEach((cursor) => {
    const angle = parseFloat(cursor.style.getPropertyValue("--angle"));
    const x = currentX + radius * Math.cos((angle * Math.PI) / 180);
    const y = currentY + radius * Math.sin((angle * Math.PI) / 180);
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  });

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousedown", () => {
  const cursors = document.querySelectorAll(".cursor");
  cursors.forEach((cursor) => (cursor.style.transform += " scale(1.5)"));
});

document.addEventListener("mouseup", () => {
  const cursors = document.querySelectorAll(".cursor");
  cursors.forEach(
    (cursor) =>
      (cursor.style.transform = cursor.style.transform.replace(
        " scale(1.5)",
        ""
      ))
  );
});
