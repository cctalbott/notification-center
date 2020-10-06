import { addClass, elementReady, hasClass, parseHTML, ready, removeEventListener, toggleClass } from '../../javascript/utility.js';

class NotificationPanel extends HTMLElement {
    pinned = false;

    constructor() {
        super();
    }

    connectedCallback() {
        console.log('NotificationPanel connected');

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                * {
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
                .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
                    font-family: inherit;
                    font-weight: 500;
                    line-height: 1.1;
                    color: inherit;
                }
                #notificationcenterbg.show { display: block; }
                #notificationcenterbg.hide { display: none; }
                #notificationcenterpanel {
                    width: 300px;
                    height: 100%;
                    overflow-y: auto;
                    min-height: 600px;
                    position: fixed;
                    top: 0;
                    right: 0px;
                    background-color: white;
                }
                #notificationcenterpanel.show { display: block; }
                #notificationcenterpanel.hide { display: none; }
                #notificationcenterbg {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.2;
                    filter: alpha(opacity=20);
                    z-index: 1099;
                    background-color: #000;
                }
                .notifywindow a,.notifywindow a:hover {
                    text-decoration: none;
                    color: #4aaafc;
                }
                .notifywindow .panel-title .closenotif {
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
                .notifywindow .panel-title .closenotif:nth-child(2) {
                    right: 40px;
                }
                .notifywindow {
                    z-index: 1100;
                    opacity: 0.9;
                    filter: alpha(opacity=90);
                }
                .notifywindow .notifyheader, .notifywindow a {
                    width: 100%;
                    background-color: #2F2F2F;
                    color: #FFF;
                    font-weight: bold;
                    padding: 5px
                }
                .notifywindow .panel-title { width: 100%; }
                .panel-title {
                    margin-top: 0;
                    margin-bottom: 0;
                    font-size: 16px;
                    color: inherit;
                }
                .notifywindow .panel-title .closenotif { display: block; }
                .notify-pin {
                    border: 5px solid #fff;
                    border-radius: 50% 50% 50% 0;
                    height: 16px;
                    position: absolute;
                    transform: rotate(-45deg);width: 16px;
                }
                .panel-default {
                    border-color: #ddd;
                }
                .panel-default > .panel-heading {
                    color: #333;
                    background-color: #f5f5f5;
                    border-color: #ddd;
                }
                .panel-heading {
                    padding: 10px 15px;
                    border-bottom: 1px solid transparent;
                    border-top-left-radius: 3px;
                    border-top-right-radius: 3px;
                }
                .panel {
                    margin-bottom: 20px;
                    background-color: #fff;
                    border: 1px solid transparent;
                    border-radius: 4px;
                    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
                    box-shadow: 0 1px 1px rgba(0,0,0,.05);
                }
            </style>
            <div id="notificationcenterbg" class="hide"></div>
            <div id="notificationcenterpanel" class="panel panel-default notifywindow hide">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Notifications
                        <a href="#" class="closenotif">X</a>
                        <a href="#" class="closenotif">
                            <div class="notify-pin" alt="Pin Panel"></div>
                        </a>
                    </h3>
                </div>
            </div>
        `;
        const notifIcon = document.querySelector('#notificationcentericon');
        const that = this;
        this.shadowRoot.querySelector('#notificationcenterbg').addEventListener('click', that.closeNotificationCenterPanel);
        notifIcon.addEventListener('click', that.openNotificationCenterPanel);
        const closePanelDom = this.shadowRoot.querySelectorAll('#notificationcenterpanel .panel-heading .panel-title a.closenotif:first-child')[0];
        closePanelDom.addEventListener('click', that.closeNotificationCenterPanel);
        const pinPanelDom = this.shadowRoot.querySelectorAll('#notificationcenterpanel .panel-heading .panel-title a.closenotif:last-child')[0];
        pinPanelDom.addEventListener('click', that.togglePinned);
    }

    closeNotificationCenterPanel = () => {
        const panel = this.shadowRoot.querySelectorAll('#notificationcenterpanel')[0];
        const bg = this.shadowRoot.querySelectorAll('#notificationcenterbg')[0];

        toggleClass(panel, 'show');
        toggleClass(panel, 'hide');

        if (this.pinned) { this.pinned = false; }

        if (hasClass(bg, 'show')) {
            toggleClass(bg, 'show');
            toggleClass(bg, 'hide');
        }
    };

    openNotificationCenterPanel = () => {
        const panel = this.shadowRoot.querySelector('#notificationcenterpanel');
        const bg = this.shadowRoot.querySelector('#notificationcenterbg');
        if (hasClass(panel, 'hide')) {
            toggleClass(panel, 'show');
            toggleClass(panel, 'hide');

            if (!this.pinned) {
                if (hasClass(bg, 'hide')) {
                    toggleClass(bg, 'show');
                    toggleClass(bg, 'hide');
                }
            }
        }
    };

    togglePinned = () => {
        this.pinned = !this.pinned ? true : false;
        const bg = this.shadowRoot.querySelectorAll('#notificationcenterbg')[0];

        if (!this.pinned) {
            if (hasClass(bg, 'hide')) {
                toggleClass(bg, 'show');
                toggleClass(bg, 'hide');
            }
        } else {
            if (hasClass(bg, 'show')) {
                toggleClass(bg, 'hide');
                toggleClass(bg, 'show');
            }
        }
    };
}

customElements.define('notification-panel', NotificationPanel);
