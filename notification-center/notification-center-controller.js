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

NotificationCenterController.prototype.addNotification = function () {
    const hostRoot = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname + '/../';
    const notificationBoxSnippetUrl = hostRoot + '/notification-center/notification-box.html';

    const getSnippet = function (reqUrl) {
        const request = new XMLHttpRequest();
        request.open('GET', reqUrl, true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                const resp = parseHTML(request.responseText)[0];
                console.log(resp);
                const panel = document.querySelectorAll('#notificationcenterpanel')[0];
                panel.appendChild(resp);
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
