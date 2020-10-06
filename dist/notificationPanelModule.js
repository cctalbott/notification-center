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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/notification-center/notification-panel-module.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/utility.js":
/*!*******************************!*\
  !*** ./javascript/utility.js ***!
  \*******************************/
/*! exports provided: addClass, elementReady, hasClass, parseHTML, ready, removeEventListener, toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementReady\", function() { return elementReady; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasClass\", function() { return hasClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseHTML\", function() { return parseHTML; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ready\", function() { return ready; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeEventListener\", function() { return removeEventListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleClass\", function() { return toggleClass; });\nconst addClass = (el, className) => {\n  if (el.classList) {\n    el.classList.add(className);\n  } else {\n    const current = el.className,\n          found = false;\n    const all = current.split(' ');\n\n    for (let i = 0; i < all.length, !found; i++) {\n      found = all[i] === className;\n    }\n\n    if (!found) {\n      if (current === '') {\n        el.className = className;\n      } else {\n        el.className += ' ' + className;\n      }\n    }\n  }\n};\n\nconst elementReady = (fn, sel) => {\n  if (document.querySelectorAll(sel)[0]) {\n    fn();\n  } else {\n    setTimeout(() => {\n      elementReady(fn, sel);\n    }, 500);\n  }\n};\n\nconst hasClass = (el, className) => {\n  let result = false;\n\n  if (el.classList) {\n    result = el.classList.contains(className);\n  } else {\n    result = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);\n  }\n\n  return result;\n};\n\nconst parseHTML = str => {\n  const tmp = document.implementation.createHTMLDocument();\n  tmp.body.innerHTML = str;\n  return tmp.body.children;\n};\n\nconst ready = fn => {\n  if (document.readyState !== 'loading') {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n};\n\nconst removeEventListener = (el, eventName, handler) => {\n  if (el.removeEventListener) {\n    el.removeEventListener(eventName, handler);\n  } else {\n    el.detachEvent('on' + eventName, handler);\n  }\n};\n\nconst toggleClass = (el, className) => {\n  if (el.classList) {\n    el.classList.toggle(className);\n  } else {\n    const classes = el.className.split(' ');\n    const existingIndex = classes.indexOf(className);\n\n    if (existingIndex >= 0) {\n      classes.splice(existingIndex, 1);\n    } else {\n      classes.push(className);\n    }\n\n    el.className = classes.join(' ');\n  }\n};\n\n\n\n//# sourceURL=webpack:///./javascript/utility.js?");

/***/ }),

/***/ "./src/notification-center/notification-panel-module.js":
/*!**************************************************************!*\
  !*** ./src/notification-center/notification-panel-module.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../javascript/utility.js */ \"./javascript/utility.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass NotificationPanel extends HTMLElement {\n  constructor() {\n    super();\n\n    _defineProperty(this, \"pinned\", false);\n\n    _defineProperty(this, \"notifications\", []);\n\n    _defineProperty(this, \"addNotification\", (type, msg) => {\n      let saltedTimestamp = Date.now().toString() + Math.floor(Math.random() * 1199999).toString();\n      const existingNotif = this.notifications.filter(item => {\n        return item.id === saltedTimestamp;\n      })[0];\n\n      if (existingNotif) {\n        this.extraSalt++;\n        saltedTimestamp += this.extraSalt.toString();\n      }\n\n      this.notifications.push({\n        id: saltedTimestamp,\n        type: type,\n        msg: msg\n      });\n      const panel = this.shadowRoot.querySelector('#notificationcenterpanel');\n      panel.appendChild(Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"parseHTML\"])(`\n            <notification-panel-item id=\"${saltedTimestamp}\" type=\"${type}\" msg=\"${msg}\"></notification-panel-item>\n        `)[0]);\n    });\n\n    _defineProperty(this, \"closeNotificationCenterPanel\", () => {\n      const panel = this.shadowRoot.querySelectorAll('#notificationcenterpanel')[0];\n      const bg = this.shadowRoot.querySelectorAll('#notificationcenterbg')[0];\n      Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(panel, 'show');\n      Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(panel, 'hide');\n\n      if (this.pinned) {\n        this.pinned = false;\n      }\n\n      if (Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(bg, 'show')) {\n        Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'show');\n        Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'hide');\n      }\n    });\n\n    _defineProperty(this, \"openNotificationCenterPanel\", () => {\n      const panel = this.shadowRoot.querySelector('#notificationcenterpanel');\n      const bg = this.shadowRoot.querySelector('#notificationcenterbg');\n\n      if (Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(panel, 'hide')) {\n        Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(panel, 'show');\n        Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(panel, 'hide');\n\n        if (!this.pinned) {\n          if (Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(bg, 'hide')) {\n            Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'show');\n            Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'hide');\n          }\n        }\n      }\n    });\n\n    _defineProperty(this, \"togglePinned\", () => {\n      this.pinned = !this.pinned ? true : false;\n      const bg = this.shadowRoot.querySelectorAll('#notificationcenterbg')[0];\n\n      if (!this.pinned) {\n        if (Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(bg, 'hide')) {\n          Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'show');\n          Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'hide');\n        }\n      } else {\n        if (Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(bg, 'show')) {\n          Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'hide');\n          Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'show');\n        }\n      }\n    });\n  }\n\n  connectedCallback() {\n    console.log('NotificationPanel connected');\n    this.attachShadow({\n      mode: 'open'\n    });\n    this.shadowRoot.innerHTML = this._getTemplate();\n    const notifIcon = document.querySelector('#notificationcentericon');\n    const that = this;\n    this.shadowRoot.querySelector('#notificationcenterbg').addEventListener('click', that.closeNotificationCenterPanel);\n    notifIcon.addEventListener('click', that.openNotificationCenterPanel);\n    const closePanelDom = this.shadowRoot.querySelectorAll('#notificationcenterpanel .panel-heading .panel-title a.closenotif:first-child')[0];\n    closePanelDom.addEventListener('click', that.closeNotificationCenterPanel);\n    const pinPanelDom = this.shadowRoot.querySelectorAll('#notificationcenterpanel .panel-heading .panel-title a.closenotif:last-child')[0];\n    pinPanelDom.addEventListener('click', that.togglePinned);\n  }\n\n  disconnectedCallback() {\n    const that = this;\n    const notifIcon = document.querySelector('#notificationcentericon');\n    notifIcon.removeEventListener(notifIcon, 'click', that.openNotificationCenterPanel);\n    const closePanelDom = this.shadowRoot.querySelectorAll('#notificationcenterpanel .panel-heading .panel-title a.closenotif:first-child')[0];\n    closePanelDom.removeEventListener(closePanelDom, 'click', that.closeNotificationCenterPanel);\n    const pinPanelDom = this.shadowRoot.querySelectorAll('#notificationcenterpanel .panel-heading .panel-title a.closenotif:last-child')[0];\n    pinPanelDom.removeEventListener(pinPanelDom, 'click', that.togglePinned);\n    console.log('NotificationPanel disconnected');\n  }\n\n  _getTemplate() {\n    const template = `\n            <style>\n                #notificationcenterbg.show { display: block; }\n                #notificationcenterbg.hide { display: none; }\n                #notificationcenterpanel {\n                    width: 300px;\n                    height: 100%;\n                    overflow-y: auto;\n                    min-height: 600px;\n                    position: fixed;\n                    top: 0;\n                    right: 0px;\n                    background-color: white;\n                }\n                #notificationcenterpanel.show { display: block; }\n                #notificationcenterpanel.hide { display: none; }\n                #notificationcenterbg {\n                    display: none;\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n                    opacity: 0.2;\n                    filter: alpha(opacity=20);\n                    z-index: 1099;\n                    background-color: #000;\n                }\n                .notifywindow a,.notifywindow a:hover {\n                    text-decoration: none;\n                    color: #4aaafc;\n                }\n                .notifywindow .panel-title .closenotif {\n                    background-color: #B7B8BC;\n                    border-radius: 6px;\n                    color: #FFFFFF;\n                    cursor: pointer;\n                    display: none;\n                    font-size: 20px;\n                    font-weight: bold;\n                    height: 28px;\n                    line-height: 1;\n                    padding-top: 5px;\n                    position: absolute;\n                    right: 5px;\n                    text-align: center;\n                    top: 5px;\n                    width: 28px;\n                    text-transform: uppercase;\n                }\n                .notifywindow .panel-title .closenotif:nth-child(2) {\n                    right: 40px;\n                }\n                .notifywindow {\n                    z-index: 1100;\n                    opacity: 0.9;\n                    filter: alpha(opacity=90);\n                }\n                .notifywindow .panel-title .closenotif { display: block; }\n                .notifywindow .notifyheader, .notifywindow a {\n                    width: 100%;\n                    background-color: #2F2F2F;\n                    color: #FFF;\n                    font-weight: bold;\n                    padding: 5px\n                }\n                .notify-pin {\n                    border: 5px solid #fff;\n                    border-radius: 50% 50% 50% 0;\n                    height: 16px;\n                    position: absolute;\n                    transform: rotate(-45deg);width: 16px;\n                }\n                /*\n                 * Bootstrap hangover\n                 */\n                * {\n                    -webkit-box-sizing: border-box;\n                    -moz-box-sizing: border-box;\n                    box-sizing: border-box;\n                }\n                .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n                    font-family: inherit;\n                    font-weight: 500;\n                    line-height: 1.1;\n                    color: inherit;\n                }\n                .notifywindow .panel-title { width: 100%; }\n                .panel-title {\n                    margin-top: 0;\n                    margin-bottom: 0;\n                    font-size: 16px;\n                    color: inherit;\n                }\n                .panel-default {\n                    border-color: #ddd;\n                }\n                .panel-default > .panel-heading {\n                    color: #333;\n                    background-color: #f5f5f5;\n                    border-color: #ddd;\n                }\n                .panel-heading {\n                    padding: 10px 15px;\n                    border-bottom: 1px solid transparent;\n                    border-top-left-radius: 3px;\n                    border-top-right-radius: 3px;\n                }\n                .panel {\n                    margin-bottom: 20px;\n                    background-color: #fff;\n                    border: 1px solid transparent;\n                    border-radius: 4px;\n                    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);\n                    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n                }\n            </style>\n            <div id=\"notificationcenterbg\" class=\"hide\"></div>\n            <div id=\"notificationcenterpanel\" class=\"panel panel-default notifywindow hide\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">\n                        Notifications\n                        <a href=\"#\" class=\"closenotif\">X</a>\n                        <a href=\"#\" class=\"closenotif\">\n                            <div class=\"notify-pin\" alt=\"Pin Panel\"></div>\n                        </a>\n                    </h3>\n                </div>\n            </div>\n        `;\n    return template;\n  }\n\n}\n\ncustomElements.define('notification-panel', NotificationPanel);\n\n//# sourceURL=webpack:///./src/notification-center/notification-panel-module.js?");

/***/ })

/******/ });