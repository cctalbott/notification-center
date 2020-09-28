import NotificationCenterController from './notification-center-controller.js';
import { hasClass, ready, toggleClass } from '../../javascript/utility.js';

const notificationCenter = new NotificationCenterController();
const hostRoot = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname + '/../';
const notificationPanelSnippetUrl = hostRoot + '/src/notification-center/notificationcenterpanel.html';
const moduleName = 'notification-center-module';

ready(() => {
    getSnippet(notificationPanelSnippetUrl, moduleName);
});

const getSnippet = (reqUrl, moduleName) => {
    const request = new XMLHttpRequest();
    request.open('GET', reqUrl, true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            const resp = request.responseText;
            const module = document.querySelectorAll('notification-center-module')[0];
            module.innerHTML = resp;
            const notifIcon = document.querySelectorAll('#notificationcentericon')[0];
            notifIcon.addEventListener('click', openNotificationCenterPanel);

            notificationCenter.addNotification('success', 'Selected longevity calculation records successfully hidden.');
            document.querySelectorAll('#notificationcenterbg')[0].addEventListener('click', notificationCenter.closeNotificationCenterPanel);
            const closePanelDom = document.querySelectorAll('#notificationcenterpanel .panel-heading .panel-title a.closenotif:first-child')[0];
            closePanelDom.addEventListener('click', notificationCenter.closeNotificationCenterPanel);
            const pinPanelDom = document.querySelectorAll('#notificationcenterpanel .panel-heading .panel-title a.closenotif:last-child')[0];
            pinPanelDom.addEventListener('click', notificationCenter.togglePinned);
        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = () => {
        // There was a connection error of some sort
        console.error('connection error calling '+ reqUrl +' snippet');
    };

    request.send();
}

const openNotificationCenterPanel = () => {
    const panel = document.querySelectorAll('#notificationcenterpanel')[0];
    const bg = document.querySelectorAll('#notificationcenterbg')[0];
    if (hasClass(panel, 'hide')) {
        toggleClass(panel, 'show');
        toggleClass(panel, 'hide');

        if (!notificationCenter.pinned) {
            if (hasClass(bg, 'hide')) {
                toggleClass(bg, 'show');
                toggleClass(bg, 'hide');
            }
        }
    }
}
