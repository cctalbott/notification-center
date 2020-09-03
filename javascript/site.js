const notifIcon = document.querySelectorAll('#notificationcentericon')[0];
const notificationCenter = new NotificationCenterController();

ready(function () {
    notifIcon.addEventListener('click', function () {
        openNotificationCenterPanel();
    });
});

var openNotificationCenterPanel = function () {
    const panel = document.querySelectorAll('#notificationcenterpanel')[0];

    if (hasClass(panel, 'hide')) {
        toggleClass(panel, 'show');
        toggleClass(panel, 'hide');

        const pinned = notificationCenter.getPinned();
        if (!pinned) {
            const bg = document.querySelectorAll('#notificationcenterbg')[0];

            if (hasClass(bg, 'hide')) {
                toggleClass(bg, 'show');
                toggleClass(bg, 'hide');
            }
        }
    }
}
