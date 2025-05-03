export class AccordionContent extends HTMLElement {
  static get observedAttributes() {
    return ["visible"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: none;
          background: #fff;
          padding: 10px;
          border: 1px solid #ccc;
        }
        :host([visible="true"]) {
          display: block;
        }
      </style>
      <slot></slot>
    `;
  }
}
