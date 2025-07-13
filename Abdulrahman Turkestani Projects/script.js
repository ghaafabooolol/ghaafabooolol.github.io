// Get the button element
const colorBtn = document.getElementById("changeBgBtn");

// List of color options
const colors = [
  "#5f9ea0", // Cadet Blue
  "#800085", // Purple
  "#578300", // Green
  "#ff6347", // Tomato
  "#4682b4", // Steel Blue
  "#9400d3"  // Dark Violet
];

// Add click event to the button
colorBtn.addEventListener("click", function() {
  // Get a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Change the background color
  document.body.style.backgroundColor = randomColor;
  
  // Optional: Change button text to show current color
  colorBtn.textContent = `Background: ${randomColor}`;
});