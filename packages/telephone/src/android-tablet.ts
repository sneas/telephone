import { html } from './android-tablet.html';

const HTMLElement = typeof window !== 'undefined' && window?.HTMLElement;

export class HTMLAndroidTabletElement extends HTMLElement {
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
        left: 3.4722%;
        right: 3.7037%;
        top: 2.2355%;
        bottom: 2.2355%;
        overflow: hidden;
        border-radius: calc(var(--width) * 0.015046296296296);
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
      preparedHtml = preparedHtml.replace(/#1C1B1F/g, '#ffffff');
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

if (typeof window !== 'undefined' && window.customElements && !window.customElements.get('android-tablet')) {
  window.customElements.define('android-tablet', HTMLAndroidTabletElement);
}
