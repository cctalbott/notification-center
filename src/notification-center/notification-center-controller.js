import { addClass, hasClass, parseHTML, toggleClass } from '../../javascript/utility.js';

class NotificationCenterController {
    pinned = false;
    notifications = [];

    constructor() {
    }

    get pinned() { return this.pinned; }

    closeNotificationCenterPanel = () => {
        const panel = document.querySelectorAll('#notificationcenterpanel')[0];
        const bg = document.querySelectorAll('#notificationcenterbg')[0];

        toggleClass(panel, 'show');
        toggleClass(panel, 'hide');

        if (this.pinned) { this.pinned = false; }

        if (hasClass(bg, 'show')) {
            toggleClass(bg, 'show');
            toggleClass(bg, 'hide');
        }
    };

    togglePinned = () => {
        this.pinned = !this.pinned ? true : false;
        const bg = document.querySelectorAll('#notificationcenterbg')[0];

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

    addNotification = (type, msg) => {
        this.notifications.push({
            type: type,
            msg: msg
        });
        const hostRoot = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname + '/../';
        const notificationBoxSnippetUrl = hostRoot + '/src/notification-center/notification-box.html';

        const getSnippet = (reqUrl) => {
            const request = new XMLHttpRequest();
            request.open('GET', reqUrl, true);

            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    const resp = parseHTML(request.responseText)[0];
                    const panel = document.querySelectorAll('#notificationcenterpanel')[0];
                    panel.appendChild(resp);
                    const list_length = document.querySelectorAll('.centerlist').length - 1;
                    const centerlist = document.querySelectorAll('.centerlist')[list_length];
                    addClass(centerlist, 'item' + list_length.toString());
                    let centerlistclass;
                    let notifyclass;
                    let notifyheadico;
                    const notifytypemsg = type;
                    switch (type) {
                        case 'success':
                            centerlistclass = 'centersuccess';
                            notifyclass = 'notify-success';
                            notifyheadico = 's';
                            break;
                        case 'error':
                            centerlistclass = 'centererror';
                            notifyclass = 'notify-error';
                            notifyheadico = 'e';
                            break;
                        case 'warning':
                            centerlistclass = 'centerwarning';
                            notifyclass = 'notify-warning';
                            notifyheadico = 'w';
                            break;
                        default:
                            centerlistclass = 'centerinfo';
                            notifyclass = 'notify-info';
                            notifyheadico = 'i';
                            break;
                    }
                    addClass(centerlist, centerlistclass);
                    const centerlistHTML = parseHTML(`
                        <div class="` + notifyclass + `">
                            <span class="notify-headico">` + notifyheadico + `</span>` + notifytypemsg + `
                        </div>`)[0];
                    centerlist.appendChild(centerlistHTML);
                    centerlist.insertBefore(centerlistHTML, centerlist.firstChild);
                    const notifHTML = `<div class="closenotif">x</div>` + msg + `<br />`;
                    console.log(list_length);
                    const notifcenterbox = document.querySelectorAll('.notifcenterbox')[list_length];
                    notifcenterbox.innerHTML = notifHTML;
                } else {
                    // We reached our target server, but it returned an error
                }
            };

            request.onerror = () => {
                // There was a connection error of some sort
                console.error('connection error calling '+ reqUrl +' snippet');
            };

            request.send();
        };

        getSnippet(notificationBoxSnippetUrl);
    }
}

export default NotificationCenterController;
