const hostRoot = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname + '/../';
const notificationPanelSnippetUrl = hostRoot + '/notification-center/notificationcenterpanel.html';
const moduleName = 'notification-center-module';

const getSnippet = function (reqUrl, moduleName) {
    const request = new XMLHttpRequest();
    request.open('GET', reqUrl, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            const resp = request.responseText;
            const module = document.querySelectorAll('notification-center-module')[0];
            module.innerHTML = resp;
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

ready(function () {
    getSnippet(notificationPanelSnippetUrl, moduleName);
});


