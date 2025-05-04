import { AccordionList } from "./accordion-list";
import { AccordionItem } from "./accordion-item";
import { AccordionHeader } from "./header/accordion-header";
import { AccordionContent } from "./content/accordion-content";

import {
  ACCORDION_LIST_TAG,
  ACCORDION_ITEM_TAG,
  ACCORDION_HEADER_TAG,
  ACCORDION_CONTENT_TAG,
} from "./config";

customElements.define(ACCORDION_LIST_TAG, AccordionList);
customElements.define(ACCORDION_ITEM_TAG, AccordionItem);
customElements.define(ACCORDION_HEADER_TAG, AccordionHeader);
customElements.define(ACCORDION_CONTENT_TAG, AccordionContent);
