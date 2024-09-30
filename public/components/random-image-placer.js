class RandomImagePlacer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.images = [];
    this.interval = 8000;
    this.isOverlayActive = true;
  }

  connectedCallback() {
    this.setupStyles();
    this.setupContainer();
    this.setupToggleButton();
    this.startPlacingImages();
  }

  setupStyles() {
    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 9999;
      }
      .container {
        width: 100%;
        height: 100%;
      }
      img {
        position: absolute;
        width: 100px;
        height: 100px;
        object-fit: cover;
        cursor: pointer;
        pointer-events: auto;
      }
      .toggle-button {
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 10000;
        padding: 5px 10px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        cursor: pointer;
        pointer-events: auto;
      }
    `;
    this.shadowRoot.appendChild(style);
  }

  setupContainer() {
    this.container = document.createElement("div");
    this.container.className = "container";
    this.shadowRoot.appendChild(this.container);
  }

  setupToggleButton() {
    this.toggleButton = document.createElement("button");
    this.toggleButton.className = "toggle-button";
    this.toggleButton.textContent = "Disable Image Overlay";
    this.toggleButton.addEventListener("click", () => this.toggleOverlay());
    this.shadowRoot.appendChild(this.toggleButton);
  }

  toggleOverlay() {
    this.isOverlayActive = !this.isOverlayActive;
    this.container.style.display = this.isOverlayActive ? "block" : "none";
    this.toggleButton.textContent = this.isOverlayActive
      ? "Disable Image Overlay"
      : "Enable Image Overlay";
  }

  startPlacingImages() {
    setInterval(() => {
      if (this.isOverlayActive) {
        this.addRandomImage();
      }
    }, this.interval);
  }

  addRandomImage() {
    const randomImage =
      this.images[Math.floor(Math.random() * this.images.length)];
    const { x, y } = this.getRandomPosition();
    const imgElement = this.createDraggableImageElement(randomImage, x, y);
    this.container.appendChild(imgElement);
  }

  getRandomPosition() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    return { x, y };
  }

  createDraggableImageElement(src, x, y) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Random Image";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

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

  set imageUrls(urls) {
    this.images = urls;
  }

  set placementInterval(ms) {
    this.interval = ms;
  }
}

customElements.define("random-image-placer", RandomImagePlacer);
