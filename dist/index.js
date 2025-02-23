const mobileMenu = document.getElementById("mobile-menu");
const hamburgerLayers = document.querySelectorAll(".hamburger-layer");
const header = document.querySelector("header");

document.getElementById("hamburger").addEventListener("click", () => {
  // Toggle open/close
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.replace("hidden", "flex");
  } else {
    mobileMenu.classList.replace("flex", "hidden");
  }

  // Change colour
  if (header.classList.contains("text-white")) {
    hamburgerLayers.forEach((el) => el.classList.toggle("bg-black!"));
  }
});
