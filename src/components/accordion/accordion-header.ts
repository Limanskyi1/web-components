export class AccordionHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }).innerHTML = `
        <style>
          :host {
            display: block;
            background: #eee;
            padding: 10px;
            cursor: pointer;
            font-weight: bold;
          }
        </style>
        <slot></slot>
      `;
    }
  
    connectedCallback() {
      this.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('toggle', { bubbles: true, composed: true }));
      });
    }
  }