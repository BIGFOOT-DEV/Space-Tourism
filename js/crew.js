import data from "./data.js";

const crewImage = document.getElementById("crew-image");
const crewName = document.getElementById("crew-name");
const crewBio = document.getElementById("crew-bio");
const crewRole = document.getElementById("crew-role");
const paginationButtons = document.querySelectorAll(".navigation-button");

const crews = data.crew;

// Function to update the destination content
function updateCrew(index) {
  const crew = crews[index];
  crewImage.src = crew.images.png; // Use PNG as default
  crewName.textContent = crew.name;
  crewBio.textContent = crew.bio;
  crewRole.textContent = crew.role;
  
}

// Add event listeners to pagination buttons
paginationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    paginationButtons.forEach((btn) => btn.classList.remove("clicked"));
    button.classList.add("clicked");
    const index = parseInt(button.getAttribute("data-index"), 10);
    updateCrew(index);
  });
});

window.addEventListener("load", () => {
    const firstButton = paginationButtons[0];
    firstButton.classList.add("clicked");  // Add the 'clicked' class to the first button
    updateCrew(parseInt(firstButton.getAttribute("data-index"), 10));  // Update content with the first destination
  });

// Initialize with the first destination
updateCrew(0);