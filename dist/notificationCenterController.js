/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/notification-center/notification-center-controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/notification-center/notification-center-controller.js":
/*!*******************************************************************!*\
  !*** ./src/notification-center/notification-center-controller.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const NotificationCenterController = function () {\n  this.pinned = false;\n  this.notifications = [];\n};\n\nNotificationCenterController.prototype.closeNotificationCenterPanel = function () {\n  const panel = document.querySelectorAll('#notificationcenterpanel')[0];\n  toggleClass(panel, 'show');\n  toggleClass(panel, 'hide');\n\n  if (!this.pinned) {\n    const bg = document.querySelectorAll('#notificationcenterbg')[0];\n    toggleClass(bg, 'show');\n    toggleClass(bg, 'hide');\n  }\n};\n\nNotificationCenterController.prototype.getPinned = function () {\n  return this.pinned;\n};\n\nNotificationCenterController.prototype.pinNotificationCenterPanel = function () {\n  this.togglePinned();\n  const bg = document.querySelectorAll('#notificationcenterbg')[0];\n  toggleClass(bg, 'show');\n  toggleClass(bg, 'hide');\n};\n\nNotificationCenterController.prototype.togglePinned = function () {\n  this.pinned = !this.pinned;\n};\n\nNotificationCenterController.prototype.addNotification = function (type, msg) {\n  const hostRoot = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname + '/../';\n  const notificationBoxSnippetUrl = hostRoot + '/notification-center/notification-box.html';\n\n  const getSnippet = function (reqUrl) {\n    const request = new XMLHttpRequest();\n    request.open('GET', reqUrl, true);\n\n    request.onload = function () {\n      if (request.status >= 200 && request.status < 400) {\n        // Success!\n        const resp = parseHTML(request.responseText)[0];\n        const panel = document.querySelectorAll('#notificationcenterpanel')[0];\n        panel.appendChild(resp);\n        const centerlist = document.querySelectorAll('.centerlist')[0];\n        let centerlistclass;\n        let notifyclass;\n        let notifyheadico;\n        const notifytypemsg = type;\n\n        switch (type) {\n          case 'success':\n            centerlistclass = 'centersuccess';\n            notifyclass = 'notify-success';\n            notifyheadico = 's';\n            break;\n\n          case 'error':\n            centerlistclass = 'centererror';\n            notifyclass = 'notify-error';\n            notifyheadico = 'e';\n            break;\n\n          case 'warning':\n            centerlistclass = 'centerwarning';\n            notifyclass = 'notify-warning';\n            notifyheadico = 'w';\n            break;\n\n          default:\n            centerlistclass = 'centerinfo';\n            notifyclass = 'notify-info';\n            notifyheadico = 'i';\n            break;\n        }\n\n        addClass(centerlist, centerlistclass);\n        let centerlistHTML;\n        const centerlistHTMLsuccess = parseHTML(`\n                    <div class=\"` + notifyclass + `\">\n                        <span class=\"notify-headico\">` + notifyheadico + `</span>` + notifytypemsg + `\n                    </div>`)[0];\n        centerlistHTML = centerlistHTMLsuccess;\n        centerlist.appendChild(centerlistHTML);\n        centerlist.insertBefore(centerlistHTML, centerlist.firstChild);\n        const notifHTML = `<div class=\"closenotif\">x</div>` + msg + `<br />`;\n        const notifcenterbox = document.querySelectorAll('.notifcenterbox')[0];\n        notifcenterbox.innerHTML = notifHTML;\n      } else {// We reached our target server, but it returned an error\n      }\n    };\n\n    request.onerror = function () {\n      // There was a connection error of some sort\n      console.error('connection error calling ' + reqUrl + ' snippet');\n    };\n\n    request.send();\n  };\n\n  getSnippet(notificationBoxSnippetUrl);\n};\n\n//# sourceURL=webpack:///./src/notification-center/notification-center-controller.js?");

/***/ })

/******/ });