class CustomTextarea extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <style>
            .custom-textarea {
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              resize: none;
              font-size: 16px;
              min-height: 40px;
              box-sizing: border-box;
              border-radius: 8px;
            }
          </style>
          <textarea class="custom-textarea"></textarea>
      `;

    const textarea = this.shadowRoot.querySelector(".custom-textarea");

    textarea.addEventListener("input", () => {
      this.adjustTextareaHeight(textarea);
    });

    this.adjustTextareaHeight(textarea);
  }

  adjustTextareaHeight(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }
}

customElements.define("custom-textarea", CustomTextarea);
