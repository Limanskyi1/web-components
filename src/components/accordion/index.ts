import { AccordionContent } from "./accordion-content";
import { AccordionHeader } from "./accordion-header";
import { AccordionItem } from "./accordion-item";
import { AccordionList } from "./accordion-list";


customElements.define("accordion-item", AccordionItem);
customElements.define("accordion-list", AccordionList);
customElements.define('accordion-header', AccordionHeader);
customElements.define('accordion-content', AccordionContent);

