import { parseHTML } from '../../javascript/utility.js';

class NotificationPanelItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('NotificationPanelItem connected');

        // this._getTemplate.bind(this);
        this.attachShadow({ mode: 'open' });
        // this.shadowRoot.innerHTML = this._getTemplate;

        const id = this.getAttribute('id');
        const type = this.getAttribute('type');
        const msg = this.getAttribute('msg');
        const typeAbbrv = this.getTypeAbbrv();

        this.shadowRoot.innerHTML = `
            <div id="item${id}" class="centerlist center${type}">
                <div class="notify-${type}">
                    <span class="notify-headico">${typeAbbrv}</span>${type}
                </div>
                <ul>
                    <li>
                        <div class="notifcenterbox">
                            <div class="closenotif">x</div>
                            ${msg}
                        </div>
                    </li>
                </ul>
            </div>
        `;
    }

    disconnectedCallback() {
        console.log('NotificationPanelItem disconnected');
    }

    getTypeAbbrv = () => {
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

    _getTemplate = () => {
        const id = this.getAttribute('id');
        const type = this.getAttribute('type');
        const msg = this.getAttribute('msg');

        const template = `
            <div id="item${id}" class="centerlist center${type}">
                <div class="notify-${type}">
                    <span class="notify-headico">${this.getTypeAbbrv}</span>${type}
                </div>
                <ul>
                    <li>
                        <div class="notifcenterbox">
                            <div class="closenotif">x</div>
                            ${msg}
                        </div>
                    </li>
                </ul>
            </div>
        `;
        // console.log(template);
        return template;
    };
}

customElements.define('notification-panel-item', NotificationPanelItem);
