function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");

  const hamburger = document.querySelector(".hamburger");
  if (menu.classList.contains("hidden")) {
    hamburger.textContent = "☰"; // Menu
  } else {
    hamburger.textContent = "✖"; // X
  }
}
