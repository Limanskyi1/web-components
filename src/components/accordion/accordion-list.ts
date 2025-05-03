export class AccordionList extends HTMLElement {
  get isSingleOpen() {
    return this.hasAttribute("single-open");
  }

  getAccordionItems() {
    return this.querySelectorAll("accordion-item");
  }

  getClosestAccordionItem(event: Event) {
    return (event.target as HTMLElement).closest("accordion-item");
  }

  closeAccordionItems(targetItem: Element) {
    this.getAccordionItems().forEach((item) => {
      if (item !== targetItem) {
        item.removeAttribute("open");
      }
    });
  }

  connectedCallback() {
    this.addEventListener("toggle", (event: Event) => {
      const targetItem = this.getClosestAccordionItem(event);
      if (this.isSingleOpen) {
        this.closeAccordionItems(targetItem as Element);
      }
    });
  }
}
