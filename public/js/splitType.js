export function splitType() {
  const text = new SplitType("#split-type");

  text.lines.forEach((line) => {
    const charsInLine = line.querySelectorAll(".char");

    gsap.from(charsInLine, {
      // opacity: 0,
      y: 300,
      ease: "power1.inOut",
      stagger: {
        amount: 0.1,
        from: "center",
        grid: [text.lines.length, charsInLine.length],
      },
    });
  });
}
