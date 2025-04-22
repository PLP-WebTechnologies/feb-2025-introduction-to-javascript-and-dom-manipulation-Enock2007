// Task 1: Change text content dynamically and modify CSS styles
const changeTextButton = document.getElementById("change-text-button");
const introText = document.getElementById("intro-text");

changeTextButton.addEventListener("click", () => {
  introText.textContent = "The text has been changed!";
  introText.style.color = "#ff6347"; // Changing text color to tomato
  introText.style.fontSize = "20px"; // Increasing font size
});

// Task 2: Add or remove an element when a button is clicked
const addRemoveButton = document.getElementById("add-remove-element-button");
const dynamicElementContainer = document.getElementById("dynamic-element-container");

addRemoveButton.addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.textContent = "This is a dynamically added paragraph!";
  newElement.style.backgroundColor = "#f0f0f0";
  newElement.style.padding = "10px";
  newElement.style.borderRadius = "5px";

  if (dynamicElementContainer.contains(newElement)) {
    dynamicElementContainer.removeChild(newElement);
  } else {
    dynamicElementContainer.appendChild(newElement);
  }
});
