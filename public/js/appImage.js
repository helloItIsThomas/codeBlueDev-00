// function createPopupImage(_imgCopy) {
//   const imageDiv = document.createElement("div");
//   imageDiv.id = "popupImageDiv";
//   _imgCopy.id = "popupImage";

//   gsap.to(_imgCopy, {
//     top: 0,
//     height: "100%",
//     duration: 0.333,
//     ease: "power2.out",
//   });
//   gsap.to(imageDiv, {
//     opacity: 1,
//     duration: 0.333,
//     ease: "power2.out",
//   });
//   imageDiv.appendChild(_imgCopy);
//   document.body.appendChild(imageDiv);
//   imageDiv.addEventListener("click", function () {
//     gsap.to(_imgCopy, {
//       top: "50%",
//       height: "0",
//       duration: 0.333,
//       ease: "power2.out",
//       onComplete: function () {
//         document.body.removeChild(imageDiv);
//       },
//     });
//     gsap.to(imageDiv, {
//       opacity: 0,
//       duration: 0.333,
//       ease: "power2.out",
//     });
//   });
// }

// function appImageListener() {
//   const rightAppImages = document.querySelectorAll(
//     ".contentModule .grid .right"
//   );

//   rightAppImages.forEach((rightAppImage) => {
//     rightAppImage.childNodes.forEach((child) => {
//       child.addEventListener("click", function (event) {
//         if (child.nodeName === "IMG") {
//           const imageCopy = child.cloneNode(true);
//           createPopupImage(imageCopy);
//         }
//       });
//     });
//   });
// }
