const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

function closeMenu() {
  menuBtn.classList.remove("open");
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", () => {
  const willOpen = !nav.classList.contains("open");
  menuBtn.classList.toggle("open", willOpen);
  nav.classList.toggle("open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
  menuBtn.setAttribute("aria-expanded", String(willOpen));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
