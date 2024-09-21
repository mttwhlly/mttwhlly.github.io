// Function to create and append a new image element
function createDraggableImageElement(src, x, y) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Random Image";
  img.style.position = "absolute";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.objectFit = "cover";
  img.style.cursor = "pointer";
  img.draggable = true;

  let isDragging = false;
  let startX, startY;

  img.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX - img.offsetLeft;
    startY = e.clientY - img.offsetTop;
    img.style.zIndex = String(parseInt(img.style.zIndex || "0") + 1);
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      img.style.left = `${newX}px`;
      img.style.top = `${newY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  return img;
}

// Function to get a random position within the viewport
function getRandomPosition() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  return { x, y };
}

// Main function to set up the random image placer
function setupRandomImagePlacer(images, interval = 2000) {
  // Create a container for the images
  //   const container = document.createElement("div");
  //   container.style.position = "relative";
  //   container.style.width = "100vw";
  //   container.style.height = "100vh";
  //   container.style.overflow = "hidden";
  //   document.body.appendChild(container);
  const container = document.querySelector("body");

  // Function to add a random image
  function addRandomImage() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const { x, y } = getRandomPosition();
    const imgElement = createDraggableImageElement(randomImage, x, y);
    container.appendChild(imgElement);
  }

  // Set up the interval to add images
  setInterval(addRandomImage, interval);
}

// Usage
const images = [
  "https://placehold.it/100/100",
  "https://placehold.it/100/100",
  "https://placehold.it/100/100",
];

// Call this function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  setupRandomImagePlacer(images, 3000); // Places a new image every 1.5 seconds
});
