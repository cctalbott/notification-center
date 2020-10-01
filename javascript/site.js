import { ready } from './utility.js';
import { notificationCenter } from '../src/notification-center/notification-center-module.js';

ready(() => {
    notificationCenter.addNotification('success', 'A notification from site.js.');
    notificationCenter.addNotification('success', 'A second notification from site.js.');
    notificationCenter.addNotification('warning', 'A warning notification from site.js.');
    notificationCenter.addNotification('error', 'An error notification from site.js.');
});

// import { hasClass, ready, toggleClass } from './utility.js';
// import { NotificationCenterController } from '../src/notification-center/notification-center-controller.js';
//
// // const notifIcon = document.querySelectorAll('#notificationcentericon')[0];
// const notificationCenter = new NotificationCenterController();
//
// ready(() => {
//     const notifIcon = document.querySelectorAll('#notificationcentericon')[0];
//     notifIcon.addEventListener('click', () => {
//         openNotificationCenterPanel();
//         console.log('notifIcon click listener');
//     });
//
//     console.log('hi site ready');
//
//     notificationCenter.addNotification('success', 'Selected longevity calculation records successfully hidden.');
// });
//
// const openNotificationCenterPanel = () => {
//     console.log('openNotificationCenterPanel');
//     const panel = document.querySelectorAll('#notificationcenterpanel')[0];
//     if (hasClass(panel, 'hide')) {
//         toggleClass(panel, 'show');
//         toggleClass(panel, 'hide');
//
//         const pinned = notificationCenter.getPinned();
//         if (!pinned) {
//             const bg = document.querySelectorAll('#notificationcenterbg')[0];
//
//             if (hasClass(bg, 'hide')) {
//                 toggleClass(bg, 'show');
//                 toggleClass(bg, 'hide');
//             }
//         }
//     }
// }
