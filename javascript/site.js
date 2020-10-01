import { ready } from './utility.js';
import { notificationCenter } from '../src/notification-center/notification-center-module.js';

ready(() => {
    notificationCenter.addNotification('success', 'A notification from site.js.');
    notificationCenter.addNotification('success', 'A second notification from site.js.');
    notificationCenter.addNotification('warning', 'A warning notification from site.js.');
    notificationCenter.addNotification('error', 'An error notification from site.js.');
});
