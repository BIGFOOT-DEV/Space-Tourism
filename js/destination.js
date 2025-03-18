import data from "./data.js";

const destinationImage = document.getElementById("destination-image");
const destinationName = document.getElementById("destination-name");
const destinationDescription = document.getElementById("destination-description");
const destinationDistance = document.getElementById("distance");
const destinationTravel = document.getElementById("travel-time");
const paginationButtons = document.querySelectorAll(".navigation-button");

const destinations = data.destinations;

// Function to update the destination content
function updateDestination(index) {
  const destination = destinations[index];
  destinationImage.src = destination.images.png; // Use PNG as default
  destinationName.textContent = destination.name;
  destinationDescription.textContent = destination.description;
  destinationDistance.textContent = destination.distance;
  destinationTravel.textContent = destination.travel;
}

// Add event listeners to pagination buttons
paginationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    paginationButtons.forEach((btn) => btn.classList.remove("clicked"));
    button.classList.add("clicked");
    const index = parseInt(button.getAttribute("data-index"), 10);
    updateDestination(index);
  });
});

window.addEventListener("load", () => {
    const firstButton = paginationButtons[0];
    firstButton.classList.add("clicked");  // Add the 'clicked' class to the first button
    updateDestination(parseInt(firstButton.getAttribute("data-index"), 10));  // Update content with the first destination
  });

// Initialize with the first destination
updateDestination(0);

