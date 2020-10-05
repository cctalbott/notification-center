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
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/utility.js");
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

/***/ })

/******/ });