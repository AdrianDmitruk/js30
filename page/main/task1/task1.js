class CustomDropdown extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <style>
            .custom-dropdown {
              position: relative;
              display: inline-block;
            }
          
            .content {
              display: none;
              position: absolute;
              background: #a55757;
              width: 200px;
              z-index: 1;
              color: #fff;         
            }
          
            .custom-dropdown:hover .content {
              display: block;
            }
          
            .dropdown-item {
              padding: 10px;
              display: block;
              color: #333;
            }
          
            .dropdown-item:hover {
              background: #ddd;
            }
            </style>
          <div class="custom-dropdown">
              <slot name="btn"></slot>
              <div class="content">
                  <slot name="options"></slot>
              </div>
          </div>
      `;

    const button = this.shadowRoot.querySelector('slot[name="btn"]');
    const ul = this.shadowRoot.querySelector('slot[name="options"]');
    const content = this.shadowRoot.querySelector(".content");

    button.addEventListener("click", () => {
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });

    ul.addEventListener("slotchange", () => {
      const options = ul.assignedNodes();
      options.forEach((option) => {
        option.addEventListener("click", () => {
          content.style.display = "none";
        });
      });
    });
  }
}

customElements.define("custom-dropdown", CustomDropdown);
