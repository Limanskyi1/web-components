export class AccordionItem extends HTMLElement {
    connectedCallback() {
      this.addEventListener('toggle', () => {
        const isOpen = this.hasAttribute('open');
        this.toggleAttribute('open', !isOpen);
        this.dispatchEvent(new CustomEvent('item-toggle', { bubbles: true, composed: true }));
      });
    }
  
    static get observedAttributes() {
      return ['open'];
    }
  
    attributeChangedCallback(name: string) {
      if (name === 'open') {
        this.updateContent();
      }
    }
    updateContent() {
      const content = this.querySelector('accordion-content');
      if (content) {
        content.setAttribute('visible', this.hasAttribute('open') ? 'true' : 'false');
      }
    }
  }