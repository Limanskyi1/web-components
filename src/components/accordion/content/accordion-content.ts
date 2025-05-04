import { template } from "./template";

export class AccordionContent extends HTMLElement {
  private parentAccordion: HTMLElement;
  
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = template;
    this.parentAccordion = this.closest("accordion-item") as HTMLElement;
  }

  static get observedAttributes() {
    return ["visible"];
  }

  show() {
    this.style.maxHeight = `${this.scrollHeight}px`;
  }

  hide() {
    this.style.maxHeight = "0";
  }

  updateContent() {
    const isOpenParent = this.parentAccordion.hasAttribute("open");
    this.toggleAttribute("visible", isOpenParent);
    isOpenParent ? this.show() : this.hide();
  }

  attributeChangedCallback(name:string){
    if (name === "visible") {
      this.updateContent();
    }
  }

}
