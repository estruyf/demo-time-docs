import {
  css,
  html,
  LitElement
} from 'https://esm.run/lit';

export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'from Demo Time!';
  }

  render() {
    return html`<p>Hello ${this.name}</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);