class CustomTooltip extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <style>
            .custom-tooltip {
              position: relative;
              display: inline-block;
            }
        
            .text {
              visibility: hidden;
              background-color: #333;
              color: #fff;
              text-align: center;
              border-radius: 4px;
              padding: 6px;
              position: absolute;
              z-index: 1;
              bottom: 125%;   
              left: 50%;
              transform: translateX(-50%);
              opacity: 0;
              transition: opacity 0.3s, visibility 0.3s;
            }
        
            .custom-tooltip:hover .text {
              visibility: visible;
              opacity: 1;
            }
          </style>
          <div class="custom-tooltip">
              <slot></slot>
              <div class="text">${this.getAttribute("text")}</div>
          </div>
      `;
  }
}

customElements.define("custom-tooltip", CustomTooltip);
