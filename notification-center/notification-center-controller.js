// class NotificationCenterController() {
//     constructor() {
//         this.pinned = false;
//     }
//
//     closeNotificationCenterPanel() {
//         const panel = document.querySelectorAll('#notificationcenterpanel')[0];
//
//         toggleClass(panel, 'show');
//         toggleClass(panel, 'hide');
//
//         if (!this.pinned) {
//             const bg = document.querySelectorAll('#notificationcenterbg')[0];
//
//             toggleClass(bg, 'show');
//             toggleClass(bg, 'hide');
//         }
//     }
//
//     getPinned() { return this.pinned; }
//
//     pinNotificationCenterPanel() {
//         this.togglePinned();
//
//         const bg = document.querySelectorAll('#notificationcenterbg')[0];
//
//         toggleClass(bg, 'show');
//         toggleClass(bg, 'hide');
//     }
//
//     togglePinned() { this.pinned = !this.pinned; }
// }


var NotificationCenterController = function () {
    this.pinned = false;
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

// var pinned = false;
//
// var closeNotificationCenterPanel = function () {
//     const panel = document.querySelectorAll('#notificationcenterpanel')[0];
//
//     toggleClass(panel, 'show');
//     toggleClass(panel, 'hide');
//
//     if (!pinned) {
//         const bg = document.querySelectorAll('#notificationcenterbg')[0];
//
//         toggleClass(bg, 'show');
//         toggleClass(bg, 'hide');
//     }
// }
//
// const pinNotificationCenterPanel = function () {
//     togglePinned();
//
//     const bg = document.querySelectorAll('#notificationcenterbg')[0];
//
//     toggleClass(bg, 'show');
//     toggleClass(bg, 'hide');
// }
//
// const togglePinned = function () {
//     pinned = !pinned;
// }
