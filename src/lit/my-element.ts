import { customElement, LitElement, html } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    render() {
        return html`
            <p>Hello world! From my-element.</p>
        `;
    }
}

// declare global {
//     interface IHTMLElementTagNameMap {
//         'my-element': MyElement,
//     }
// }

// customElements.define('my-element', MyElement);
