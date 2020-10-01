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

/***/ "./javascript/utility.js":
/*!*******************************!*\
  !*** ./javascript/utility.js ***!
  \*******************************/
/*! exports provided: addClass, hasClass, parseHTML, ready, toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasClass\", function() { return hasClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseHTML\", function() { return parseHTML; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ready\", function() { return ready; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleClass\", function() { return toggleClass; });\nconst addClass = (el, className) => {\n  if (el.classList) {\n    el.classList.add(className);\n  } else {\n    const current = el.className,\n          found = false;\n    const all = current.split(' ');\n\n    for (let i = 0; i < all.length, !found; i++) {\n      found = all[i] === className;\n    }\n\n    if (!found) {\n      if (current === '') {\n        el.className = className;\n      } else {\n        el.className += ' ' + className;\n      }\n    }\n  }\n};\n\nconst hasClass = (el, className) => {\n  let result = false;\n\n  if (el.classList) {\n    result = el.classList.contains(className);\n  } else {\n    result = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);\n  }\n\n  return result;\n};\n\nconst parseHTML = str => {\n  const tmp = document.implementation.createHTMLDocument();\n  tmp.body.innerHTML = str;\n  return tmp.body.children;\n};\n\nconst ready = fn => {\n  if (document.readyState !== 'loading') {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n};\n\nconst toggleClass = (el, className) => {\n  if (el.classList) {\n    el.classList.toggle(className);\n  } else {\n    const classes = el.className.split(' ');\n    const existingIndex = classes.indexOf(className);\n\n    if (existingIndex >= 0) {\n      classes.splice(existingIndex, 1);\n    } else {\n      classes.push(className);\n    }\n\n    el.className = classes.join(' ');\n  }\n};\n\n\n\n//# sourceURL=webpack:///./javascript/utility.js?");

/***/ }),

/***/ "./src/notification-center/notification-center-controller.js":
/*!*******************************************************************!*\
  !*** ./src/notification-center/notification-center-controller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../javascript/utility.js */ \"./javascript/utility.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass NotificationCenterController {\n  constructor() {\n    _defineProperty(this, \"pinned\", false);\n\n    _defineProperty(this, \"notifications\", []);\n\n    _defineProperty(this, \"closeNotificationCenterPanel\", () => {\n      const panel = document.querySelectorAll('#notificationcenterpanel')[0];\n      const bg = document.querySelectorAll('#notificationcenterbg')[0];\n      Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(panel, 'show');\n      Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(panel, 'hide');\n\n      if (this.pinned) {\n        this.pinned = false;\n      }\n\n      if (Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(bg, 'show')) {\n        Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'show');\n        Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'hide');\n      }\n    });\n\n    _defineProperty(this, \"togglePinned\", () => {\n      this.pinned = !this.pinned ? true : false;\n      const bg = document.querySelectorAll('#notificationcenterbg')[0];\n\n      if (!this.pinned) {\n        if (Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(bg, 'hide')) {\n          Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'show');\n          Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'hide');\n        }\n      } else {\n        if (Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(bg, 'show')) {\n          Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'hide');\n          Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(bg, 'show');\n        }\n      }\n    });\n\n    _defineProperty(this, \"addNotification\", (type, msg) => {\n      this.notifications.push({\n        type: type,\n        msg: msg\n      });\n      const hostRoot = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname + '/../';\n      const notificationBoxSnippetUrl = hostRoot + '/src/notification-center/notification-box.html';\n\n      const getSnippet = reqUrl => {\n        const request = new XMLHttpRequest();\n        request.open('GET', reqUrl, true);\n\n        request.onload = () => {\n          if (request.status >= 200 && request.status < 400) {\n            // Success!\n            const resp = Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"parseHTML\"])(request.responseText)[0];\n            const panel = document.querySelectorAll('#notificationcenterpanel')[0];\n            panel.appendChild(resp);\n            const list_length = document.querySelectorAll('.centerlist').length - 1;\n            const centerlist = document.querySelectorAll('.centerlist')[list_length];\n            Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"addClass\"])(centerlist, 'item' + list_length.toString());\n            let centerlistclass;\n            let notifyclass;\n            let notifyheadico;\n            const notifytypemsg = type;\n\n            switch (type) {\n              case 'success':\n                centerlistclass = 'centersuccess';\n                notifyclass = 'notify-success';\n                notifyheadico = 's';\n                break;\n\n              case 'error':\n                centerlistclass = 'centererror';\n                notifyclass = 'notify-error';\n                notifyheadico = 'e';\n                break;\n\n              case 'warning':\n                centerlistclass = 'centerwarning';\n                notifyclass = 'notify-warning';\n                notifyheadico = 'w';\n                break;\n\n              default:\n                centerlistclass = 'centerinfo';\n                notifyclass = 'notify-info';\n                notifyheadico = 'i';\n                break;\n            }\n\n            Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"addClass\"])(centerlist, centerlistclass);\n            const centerlistHTML = Object(_javascript_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"parseHTML\"])(`\n                        <div class=\"` + notifyclass + `\">\n                            <span class=\"notify-headico\">` + notifyheadico + `</span>` + notifytypemsg + `\n                        </div>`)[0];\n            centerlist.appendChild(centerlistHTML);\n            centerlist.insertBefore(centerlistHTML, centerlist.firstChild);\n            const notifHTML = `<div class=\"closenotif\">x</div>` + msg + `<br />`;\n            console.log(list_length);\n            const notifcenterbox = document.querySelectorAll('.notifcenterbox')[list_length];\n            notifcenterbox.innerHTML = notifHTML;\n          } else {// We reached our target server, but it returned an error\n          }\n        };\n\n        request.onerror = () => {\n          // There was a connection error of some sort\n          console.error('connection error calling ' + reqUrl + ' snippet');\n        };\n\n        request.send();\n      };\n\n      getSnippet(notificationBoxSnippetUrl);\n    });\n  }\n\n  get pinned() {\n    return this.pinned;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationCenterController);\n\n//# sourceURL=webpack:///./src/notification-center/notification-center-controller.js?");

/***/ })

/******/ });