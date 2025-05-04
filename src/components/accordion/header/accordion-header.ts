import { ACCORDION_TOGGLE_EVENT } from "../config";
import { template } from "./template";

export class AccordionHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = template;
  }
  onClick() {
    const event = new CustomEvent(ACCORDION_TOGGLE_EVENT, { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  connectedCallback() {
    this.addEventListener("click", this.onClick);
  }
}
