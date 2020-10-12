import { css, customElement, LitElement, html, property } from 'lit-element';

@customElement('notif-list')
class NotifList extends LitElement {
    static get styles() {
        return css`
            :host {
                list-style: none;
                margin: 0;
                padding: 0;
                position: fixed;
                top: 60px;
                right: 0;
                z-index: 1101;
            }
        `;
    }

    render() {
        return html`
            <ul class="notificationul indNotifs">
                <slot name="item"></slot>
            </ul>
        `;
    }
}
