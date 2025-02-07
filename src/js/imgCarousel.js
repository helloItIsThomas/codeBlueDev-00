class ImageCarousel {
  constructor() {
    this.slides = document.querySelector(".slides");
    this.images = document.querySelectorAll(".slides .carouselSlide");
    this.prevButton = document.querySelector(".prev");
    this.nextButton = document.querySelector(".next");
    this.currentIndex = 1;
    this.totalImages = this.images.length;
    this.imageWidth = this.images[0].clientWidth;
    this.isAnimating = false; // Flag to prevent rapid clicks
    this.setupCarousel();
    this.addEventListeners();
  }

  setupCarousel() {
    // Clone first and last images for infinite looping
    const firstClone = this.images[0].cloneNode(true);
    const lastClone = this.images[this.totalImages - 1].cloneNode(true);
    this.slides.appendChild(firstClone);
    this.slides.insertBefore(lastClone, this.slides.firstChild);
    this.images = document.querySelectorAll(".slides img"); // Update images NodeList
    this.currentIndex = 1;
    // Set initial position
    gsap.set(this.slides, { x: -this.imageWidth * this.currentIndex });
  }

  addEventListeners() {
    this.nextButton.addEventListener("click", () => this.next());
    this.prevButton.addEventListener("click", () => this.prev());
    // Disable transitionend since GSAP handles animations
  }

  next() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex++;
    this.animateSlide(() => {
      if (this.currentIndex === this.totalImages + 1) {
        // Reset to first real image
        gsap.set(this.slides, { x: -this.imageWidth });
        this.currentIndex = 1;
      }
      this.isAnimating = false;
    });
  }

  prev() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex--;
    this.animateSlide(() => {
      if (this.currentIndex === 0) {
        // Reset to last real image
        gsap.set(this.slides, { x: -this.imageWidth * this.totalImages });
        this.currentIndex = this.totalImages;
      }
      this.isAnimating = false;
    });
  }

  animateSlide(onCompleteCallback) {
    gsap.to(this.slides, {
      x: -this.imageWidth * this.currentIndex,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: onCompleteCallback,
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ImageCarousel();
});
