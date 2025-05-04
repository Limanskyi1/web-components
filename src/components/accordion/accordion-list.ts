import { ACCORDION_ITEM_TAG, ACCORDION_TOGGLE_EVENT } from "./config";

type Mode = "multiple" | "single";

export class AccordionList extends HTMLElement {

  get mode(): Mode {
    return (this.getAttribute("mode") || "multiple") as Mode;
  }

  get accordionItems() {
    return this.querySelectorAll(ACCORDION_ITEM_TAG);
  }

  getClosestAccordionItem(event: Event) {
    return (event.target as HTMLElement).closest(ACCORDION_ITEM_TAG);
  }

  closeAccordionItems(targetItem: HTMLElement) {
    const accordionItems = this.accordionItems;
    accordionItems.forEach((item) => {
      if (item !== targetItem) {
        item.removeAttribute("open");
      }
    });
  }

  toggle(event: Event) {
    if (this.mode === "single") {
      const targetItem = this.getClosestAccordionItem(event) as HTMLElement;
      this.closeAccordionItems(targetItem);
    }
  }

  connectedCallback() {
    this.addEventListener(ACCORDION_TOGGLE_EVENT, (event: Event) => this.toggle(event));
  }
}
