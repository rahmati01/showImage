var allImagesEl = document.querySelectorAll(".wrapper >img");
var modalEl = document.querySelector(".modal");
var modalImageEl = document.querySelector(".modal img");

function show(type) {
  for (let i = 0; i < allImagesEl.length; i++) {
    if (allImagesEl[i].dataset.type == type || type == "all") {
      allImagesEl[i].style.display = "block";
    } else {
      allImagesEl[i].style.display = "none";
    }
  }
}

for (let i = 0; i < allImagesEl.length; i++) {
  allImagesEl[i].addEventListener("click", showModal);
}

function showModal(e) {
  var newSrc = this.getAttribute("src");
  modalImageEl.setAttribute(`src`, newSrc);
  modalEl.style.transformOrigin = `${e.clientX}px ${e.clientY}px`;
  modalEl.style.transform = "scale(1)";
}

modalEl.addEventListener(`dblclick`, closemodal);
function closemodal() {
  modalEl.style.transform = "scale(0)";
}

modalImageEl.addEventListener(`mousemove`, rotateImage);

function rotateImage(e) {
  modalImageEl.style.transform = `rotateY(${
    e.offsetX / 10 - this.width / 20
  }deg) rotateX(${-(e.offsetY / 10 - this.height / 20)}deg)`;
}
