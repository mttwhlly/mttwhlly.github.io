class TypingEffect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.text = "";
    this.speed = 100; // Default typing speed (ms)
    this.currentIndex = 0;
    this.isTyping = false;
    this.isPaused = false;
  }

  connectedCallback() {
    this.setupStyles();
    this.setupContainer();
    this.text = this.getAttribute("text") || "";
    this.speed = parseInt(this.getAttribute("speed")) || this.speed;
    this.startTyping();
  }

  setupStyles() {
    const style = document.createElement("style");
    style.textContent = `
        :host {
          display: inline-block;
        }
        .typing-container {
          font-family: monospace;
          font-size: 16px;
          line-height: 1.5;
        }
        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: #000;
          animation: blink 0.7s infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `;
    this.shadowRoot.appendChild(style);
  }

  setupContainer() {
    this.container = document.createElement("div");
    this.container.className = "typing-container";
    this.shadowRoot.appendChild(this.container);

    this.cursor = document.createElement("span");
    this.cursor.className = "cursor";
    this.shadowRoot.appendChild(this.cursor);
  }

  startTyping() {
    if (this.isTyping) return;
    this.isTyping = true;
    this.typeNextCharacter();
  }

  typeNextCharacter() {
    if (this.isPaused) {
      setTimeout(() => this.typeNextCharacter(), this.speed);
      return;
    }

    if (this.currentIndex < this.text.length) {
      this.container.textContent += this.text[this.currentIndex];
      this.currentIndex++;
      setTimeout(() => this.typeNextCharacter(), this.speed);
    } else {
      this.isTyping = false;
      this.dispatchEvent(new CustomEvent("typingcomplete"));
    }
  }

  // Public methods
  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  reset() {
    this.currentIndex = 0;
    this.container.textContent = "";
    this.isTyping = false;
    this.isPaused = false;
  }

  // Attribute change callback
  static get observedAttributes() {
    return ["text", "speed"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === "text") {
        this.text = newValue;
        this.reset();
        this.startTyping();
      } else if (name === "speed") {
        this.speed = parseInt(newValue) || 100;
      }
    }
  }
}

customElements.define("typing-effect", TypingEffect);
