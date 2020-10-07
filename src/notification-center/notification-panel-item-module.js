import { parseHTML } from '../../javascript/utility.js';

class NotificationPanelItem extends HTMLElement {
    static get properties() {
        return {
            id: { type: Number },
            type: { type: String },
            msg: { type: String },
        }
    }

    constructor() {
        super();
        this.id = this.getAttribute('id');
        this.type = this.getAttribute('type');
        this.msg = this.getAttribute('msg');
    }

    connectedCallback() {
        console.log('NotificationPanelItem connected');

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this._getTemplate();
    }

    disconnectedCallback() {
        console.log('NotificationPanelItem disconnected');
    }

    _getTemplate = () => {
        const template = `
            <div id="item${this.id}" class="centerlist center${this.type}">
                <div class="notify-${this.type}">
                    <span class="notify-headico">${this._getTypeAbbrv()}</span>${this.type}
                </div>
                <ul>
                    <li>
                        <div class="notifcenterbox">
                            <div class="closenotif">x</div>
                            ${this.msg}
                        </div>
                    </li>
                </ul>
            </div>
        `;
        return template;
    };

    _getTypeAbbrv = () => {
        let abbrv = '';

        switch(this.type) {
            case 'success':
                abbrv = 's';
                break;
            case 'info':
                abbrv = 'i';
                break;
            case 'warning':
                abbrv = 'w';
                break;
            case 'error':
                abbrv = 'e';
                break;
            default:
                abbrv = 'i';
                break;
        }

        return abbrv;
    };
}

customElements.define('notification-panel-item', NotificationPanelItem);
