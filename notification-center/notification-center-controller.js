const NotificationCenterController = function () {
    this.pinned = false;
    this.notifications = [];
}

NotificationCenterController.prototype.closeNotificationCenterPanel = function () {
    const panel = document.querySelectorAll('#notificationcenterpanel')[0];

    toggleClass(panel, 'show');
    toggleClass(panel, 'hide');

    if (!this.pinned) {
        const bg = document.querySelectorAll('#notificationcenterbg')[0];

        toggleClass(bg, 'show');
        toggleClass(bg, 'hide');
    }
}

NotificationCenterController.prototype.getPinned = function () { return this.pinned; }

NotificationCenterController.prototype.pinNotificationCenterPanel = function () {
    this.togglePinned();

    const bg = document.querySelectorAll('#notificationcenterbg')[0];

    toggleClass(bg, 'show');
    toggleClass(bg, 'hide');
}

NotificationCenterController.prototype.togglePinned = function () { this.pinned = !this.pinned; }

NotificationCenterController.prototype.addNotification = function (type, msg) {
    const hostRoot = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname + '/../';
    const notificationBoxSnippetUrl = hostRoot + '/notification-center/notification-box.html';

    const getSnippet = function (reqUrl) {
        const request = new XMLHttpRequest();
        request.open('GET', reqUrl, true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                const resp = parseHTML(request.responseText)[0];
                const panel = document.querySelectorAll('#notificationcenterpanel')[0];
                panel.appendChild(resp);
                const centerlist = document.querySelectorAll('.centerlist')[0];
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
                let centerlistHTML;
                const centerlistHTMLsuccess = parseHTML(`
                    <div class="` + notifyclass + `">
                        <span class="notify-headico">` + notifyheadico + `</span>` + notifytypemsg + `
                    </div>`)[0];
                centerlistHTML = centerlistHTMLsuccess;
                centerlist.appendChild(centerlistHTML);
                centerlist.insertBefore(centerlistHTML, centerlist.firstChild);
                const notifHTML = `<div class="closenotif">x</div>` + msg + `<br />`;
                const notifcenterbox = document.querySelectorAll('.notifcenterbox')[0];
                notifcenterbox.innerHTML = notifHTML;
            } else {
                // We reached our target server, but it returned an error
            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
            console.error('connection error calling '+ reqUrl +' snippet');
        };

        request.send();
    }

    getSnippet(notificationBoxSnippetUrl);
}
