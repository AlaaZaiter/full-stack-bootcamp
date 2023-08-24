// Get a reference to the button element
const button = document.createElement("button");
button.textContent = "Click Me";

// Apply styles to the button
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#3498db";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.cursor = "pointer";

// Add button to the body of the page
document.body.appendChild(button);

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Generate a random number between 1 and 1000
  const randomNumber = Math.floor(Math.random() * 1000) + 1;

  // Change button styles
  button.style.backgroundColor = "red";
  button.style.color = "white";

  // Change button text content
  button.textContent = `Clicked ${randomNumber}!`;
});
