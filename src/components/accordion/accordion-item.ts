import { ACCORDION_CONTENT_TAG, ACCORDION_TOGGLE_EVENT } from "./config";

export class AccordionItem extends HTMLElement {
  private content: HTMLElement;
  
  constructor() {
    super();
    this.content = this.querySelector(ACCORDION_CONTENT_TAG) as HTMLElement;
  }

  static get observedAttributes() {
    return ["open"];
  }

  attributeChangedCallback(name: string) {
    if (name === "open") {
      this.content.toggleAttribute("visible");
    }
  }

  connectedCallback() {
    this.addEventListener(ACCORDION_TOGGLE_EVENT, () => this.toggleAttribute("open"));
  }
}
