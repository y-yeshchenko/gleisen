const openBtn = document.getElementById("openVideo");
const modal = document.getElementById("videoModal");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

modal.addEventListener("click", () => {
  modal.classList.remove("active");
});