import { ACCORDION_ITEM_TAG, ACCORDION_TOGGLE_EVENT, Mode } from "./config";

export class AccordionList extends HTMLElement {
  get mode(): Mode {
    return (this.getAttribute("mode") || "multiple") as Mode;
  }

  closeAccordionItems(targetItem: HTMLElement) {
    const accordionItems = this.querySelectorAll(ACCORDION_ITEM_TAG);
    accordionItems.forEach((item) => {
      if (item !== targetItem) {
        item.removeAttribute("open");
      }
    });
  }

  toggle(event: Event) {
    if (this.mode === "single") {
      const targetItem: HTMLElement | null = (event.target as HTMLElement).closest(
        ACCORDION_ITEM_TAG
      );
      if (targetItem) {
        this.closeAccordionItems(targetItem);
      }
    }
  }

  connectedCallback() {
    this.addEventListener(ACCORDION_TOGGLE_EVENT, (event: Event) => this.toggle(event));
  }
}
