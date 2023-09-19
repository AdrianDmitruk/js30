class CustomTooltip extends HTMLElement {
  static observedAttributes = ["text"];

  get text() {
    return this.getAttribute("text");
  }

  set text(value) {
    this.setAttribute("text", value);
  }

  connectedCallback() {
    this.updateTooltip();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "text" && oldValue !== newValue) {
      this.updateTooltip();
    }
  }

  updateTooltip() {
    this.innerHTML = `  
      <div class="custom-tooltip">
        <slot></slot>
        <div class="text">${this.text}</div>
      </div>
    `;
  }
}

customElements.define("custom-tooltip", CustomTooltip);
