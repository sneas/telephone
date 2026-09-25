import { html } from './ipad-air-13.html';


const HTMLElement = typeof window !== 'undefined' && window?.HTMLElement;

export class HTMLiPadAir13Element extends HTMLElement {
  constructor() {
    super();

    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      :host {
        display: inline-block;
        pointer-events: none;

        --width: auto;
      }

      .container {
        position: relative;
      }

      .screenshot {
        position: absolute;
        left: 4.5035%;
        right: 4.5035%;
        top: 3.3688%;
        bottom: 3.3688%;
        overflow: hidden;
        border-radius: calc(var(--width) * 0.016166281755196);
        pointer-events: all;
      }

      .frame {
        width: 100%;
        position: relative;
        top: 0;
        line-height: 0;
      }
    `;

    const shadowRoot = this.attachShadow({ mode: 'open' });

    if (this.getAttribute('nonce')) {
      styleEl.setAttribute('nonce', this.getAttribute('nonce'));
    }

    const mode = this.getAttribute('mode') ?? 'light';

    let preparedHtml = html;
    if (mode === 'dark') {
      preparedHtml = preparedHtml.replace(/#0D0D0E/g, '#ffffff');
    }

    shadowRoot.appendChild(styleEl);
    shadowRoot.innerHTML = shadowRoot.innerHTML + preparedHtml;
  }

  private connectedCallback() {
    const resizeObserver = new ResizeObserver(this.resetWidth.bind(this));
    resizeObserver.observe(this);
    this.resetWidth();
    this.setAttribute('rendered', '');
  }

  private resetWidth() {
    this.style.setProperty('--width', `${this.clientWidth}px`);
  }
}

if (typeof window !== 'undefined' && window.customElements && !window.customElements.get('ipad-air-13')) {
  window.customElements.define('ipad-air-13', HTMLiPadAir13Element);
}
