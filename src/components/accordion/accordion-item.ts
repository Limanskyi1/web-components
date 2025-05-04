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

  get isOpen() {
    return this.hasAttribute("open");
  }

  showContent() {
    this.content.setAttribute("visible", "true");
    this.content.style.maxHeight = `${this.content.scrollHeight}px`;
  }

  hideContent() {
    this.content.setAttribute("visible", "false");
    this.content.style.maxHeight = "0";
  }

  updateContent() {
    const isOpen = this.isOpen;
    isOpen ? this.showContent() : this.hideContent();
  }

  attributeChangedCallback(name: string) {
    if (name === "open") {
      this.updateContent();
    }
  }

  connectedCallback() {
    this.addEventListener(ACCORDION_TOGGLE_EVENT, () => this.toggleAttribute("open"));
  }
}
