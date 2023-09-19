class CustomTextarea extends HTMLElement {
  static observedAttributes = ["value"];

  get value() {
    return this.getAttribute("value") || "";
  }

  set value(newValue) {
    this.setAttribute("value", newValue);
  }

  connectedCallback() {
    this.innerHTML = `
      <textarea class="custom-textarea">${this.value}</textarea>
    `;

    const textarea = this.querySelector(".custom-textarea");

    textarea.addEventListener("input", () => {
      this.adjustTextareaHeight(textarea);
      this.value = textarea.value;
    });

    this.adjustTextareaHeight(textarea);
  }

  adjustTextareaHeight(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "value" && oldValue !== newValue) {
      const textarea = this.querySelector(".custom-textarea");
      textarea.value = newValue || "";
      this.adjustTextareaHeight(textarea);
    }
  }
}

customElements.define("custom-textarea", CustomTextarea);
