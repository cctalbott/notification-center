import { ready } from './utility.js';
import { notificationCenter } from '../src/notification-center/notification-center-module.js';

let i = 0;

ready(() => {
    notificationCenter.addNotification('success', 'A notification from site.js.');
    // console.log(i++);
    notificationCenter.addNotification('success', 'A second notification from site.js.');
    // console.log(i++);
    notificationCenter.addNotification('warning', 'A warning notification from site.js.');
    // console.log(i++);
    notificationCenter.addNotification('error', 'An error notification from site.js.');
    // console.log(i++);
});
