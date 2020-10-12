import { css, customElement, LitElement, html, property } from 'lit-element';

@customElement('notif-list-item')
class NotifListItem extends LitElement {
    // @property({ type: String }) notifId = '';
    // static get properties() {
    //     return {
    //         notifId: { attribute: 'notif-id' },
    //     };
    // }

    // constructor() {
    //     super();
    //     this.notifId = 'notifId';
    // }

    static get styles() {
        return css`
            :host {
                font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
                font-size: 0.85em;
                color: #333;
                list-style: none;
            }
            :host li {
                margin: 20px;
                /*transition-property: right,position;
                transition-duration: 500ms;
                transition-timing-function: linear;*/
            }
            .indNotifVis {
                right: 30px; 
                position: relative;
            }
            .notification {
                position: relative;
                min-height: 100px;
                width: 400px;
                background-color: #e7e8ec;
                color: #a5a6a9;
                border: 1px solid #CCC;
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                border-radius: 10px;
                box-shadow: 0 2px 1px 0 #f2f2f2;
            }
            .notification a,.notification a:hover {
                text-decoration: none;
                color: #4aaafc;
            }
            .notification:hover .closenotif { display: block; }
            .notification .closenotif {
                background-color: #B7B8BC;
                border-radius: 6px;
                color: #FFFFFF;
                cursor: pointer;
                display: none;
                font-size: 20px;
                font-weight: bold;
                height: 28px;
                line-height: 1;
                padding-top: 5px;
                position: absolute;
                right: 5px;
                text-align: center;
                top: 5px;
                width: 28px;
                text-transform: uppercase;
            }
        `;
    }

    render() {
        return html`
            <li class="indNotifVis">
                <div class="notification">
                    <div class="closenotif">X</div>
                    <slot name="icon"></slot>
                    <slot name="message"></slot>
                </div>
            </li>
        `;
    }

    // attibuteChangedCallback(name:String, oldval:String, newval:String) {
    //     console.log('attribute change: ', name, newval);
    //     super.attibuteChangedCallback(name, oldval, newval);
    // }

    // changedAttributes() {
    //     let saltedTimestamp = Date.now().toString() + Math.floor(Math.random() * 1199999).toString();
    //     this.setAttribute('notif-id', 'box'+ saltedTimestamp);
    // }

    // updated(changedProperties:String) {
    //     changedProperties.forEach((oldValue:String, propName:String) => {
    //         console.log(`${propName} changed. oldValue: ${oldValue}`);
    //     });
    // }
}
