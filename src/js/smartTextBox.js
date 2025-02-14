export function initializeExpandCollapse() {
  console.log("initializeExpandCollapse");

  const container = document.querySelector(".magicTextContainer");
  const button = document.querySelector(".caret-button");

  button.addEventListener("click", () => {
    container.classList.toggle("expanded");
    button.classList.toggle("expanded");

    const isExpanded = container.classList.contains("expanded");
    button.setAttribute("aria-expanded", isExpanded);
    button.setAttribute(
      "aria-label",
      isExpanded ? "Collapse text" : "Expand text"
    );
  });
}
