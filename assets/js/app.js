var modalButton = document.querySelector(".modal-button");
var closeButton = document.querySelector(".close-button");
var modalContent = document.querySelector(".modal-content");

modalButton.addEventListener("click", function () {
  modalContent.classList.add("show");
})

closeButton.addEventListener("click", function () {
  modalContent.classList.remove("show");
})