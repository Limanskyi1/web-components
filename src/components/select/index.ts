import { template } from "./template";

class UISelect extends HTMLElement {

    private currentElement: HTMLElement;
    private optionsElements: HTMLElement;

    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = template;

      this.currentElement = shadowRoot.querySelector('.current')!;
      this.optionsElements = shadowRoot.querySelector('.options')!;
  
      this.toggle = this.toggle.bind(this);
    }
  
    connectedCallback() {
      this.renderOptions();
      this.addEventListener('click', this.toggle);
    }
  
    getOptions() {
      const options = this.querySelectorAll('option');
      return Array.from(options).map(option => ({
        value: option.value,
        label: option.textContent,
        selected: option.selected
      }));
    }
  
    renderOptions() {
      const options = this.getOptions();
  
      const selected = options.find(opt => opt.selected) || options[0];
      this.currentElement.textContent = selected.label;
  
      for (const option of options) {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option.label;
        div.dataset.value = option.value;
  
        div.addEventListener('click', (e) => {
          e.stopPropagation(); 
          this.currentElement.textContent = option.label;
          this.currentElement.classList.remove('open');
          this.dispatchEvent(new Event('change'));
        });
  
        this.optionsElements.appendChild(div);
      }
    }
  
    toggle() {
      this.currentElement.classList.toggle('open');
    }

  }
  
  customElements.define('ui-select', UISelect);