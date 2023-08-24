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
// Create and style the h1 element
const h1 = document.createElement("h1");
h1.textContent = "Hello, Challenge 5.1!";
h1.style.border = "10px dotted green";

// Add the h1 element to the body
document.body.appendChild(h1);

// Add keydown event listener
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
      h1.style.backgroundColor = "red";
      break;
    case "s":
      h1.style.marginLeft = parseInt(h1.style.marginLeft, 10) + 10 + "px";
      break;
    case "d":
      const newParagraph = document.createElement("p");
      newParagraph.textContent = "Key D was pressed!";
      document.body.appendChild(newParagraph);
      break;
    case "w":
      h1.style.display = h1.style.display === "none" ? "block" : "none";
      break;
    case " ":
      const currentFontSize = parseInt(getComputedStyle(h1).fontSize);
      h1.style.fontSize = currentFontSize + 2 + "px";
      break;
  }
});

