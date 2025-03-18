import data from "./data.js";

const technologyImage = document.getElementById("technology-image");
const technologyName = document.getElementById("technology-name");
const technologyDescription = document.getElementById("technology-description");
const paginationButtons = document.querySelectorAll(".navigation-button");

const technologys = data.technology;

// Function to update the technology content with responsive images
function updatetechnology(index) {
  const technology = technologys[index];
  const screenWidth = window.innerWidth;
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  // Permanent landscape image when screen width is below 760px
  if (screenWidth < 760) {
    technologyImage.src = technology.images.landscape;
  } else {
    // Switch between portrait and landscape images based on orientation for screens ≥ 760px
    technologyImage.src = isPortrait ? technology.images.landscape : technology.images.portrait;
  }

  technologyName.textContent = technology.name;
  technologyDescription.textContent = technology.description;
}

// Add event listeners to pagination buttons
paginationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    paginationButtons.forEach((btn) => btn.classList.remove("clicked"));
    button.classList.add("clicked");
    const index = parseInt(button.getAttribute("data-index"), 10);
    updatetechnology(index);
  });
});

// Listen for window resize and orientation change events
const handleResizeOrOrientationChange = () => {
  const activeButton = document.querySelector(".navigation-button.clicked");
  if (activeButton) {
    const index = parseInt(activeButton.getAttribute("data-index"), 10);
    updatetechnology(index);
  }
};

window.addEventListener("resize", handleResizeOrOrientationChange);
window.addEventListener("orientationchange", handleResizeOrOrientationChange);

// Initialize with the first technology
window.addEventListener("load", () => {
  const firstButton = paginationButtons[0];
  firstButton.classList.add("clicked");
  updatetechnology(parseInt(firstButton.getAttribute("data-index"), 10));
});
