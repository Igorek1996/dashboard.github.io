/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/burger/burger.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/burger/burger.js ***!
  \*********************************************/
/***/ (function() {

var burger = document.getElementById("burger");
var nav = document.getElementById("sidebar");
var body = document.getElementById("body");
var main = document.getElementById("main");
var overlay = document.getElementById("overlay");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("active");
  main.classList.toggle("active");
});
overlay.addEventListener("click", function () {
  burger.classList.remove("active");
  nav.classList.remove("active");
  body.classList.remove("active");
  main.classList.remove("active");
});

/***/ }),

/***/ "./src/blocks/modules/nav/nav.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/nav/nav.js ***!
  \***************************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".js-nav__link");
  var activeLink = document.querySelector(".js-nav__link.active").getAttribute("href");
  var content = document.getElementById("content");
  var contentStorage = document.getElementById("content-storage");
  var currentValue = activeLink;
  if (content && contentStorage) {
    content.innerHTML = contentStorage.innerHTML;
  }
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      navLinks.forEach(function (link) {
        return link.classList.remove("active");
      });
      this.classList.add("active");
      currentValue = this.getAttribute("href");
      if (currentValue != "/customers") {
        content.innerHTML = "Default string";
      } else {
        content.innerHTML = contentStorage.innerHTML;
      }
    });
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".nav__item, .user, .title, .content__header, .content__table, .pagination");
  function showElements() {
    elements.forEach(function (el, index) {
      setTimeout(function () {
        el.classList.add("show");
      }, index * 100); // добавление задержки между анимациями элементов
    });
  }

  // Запускаем анимацию при загрузке страницы
  showElements();
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/burger/burger */ "./src/blocks/modules/burger/burger.js");
/* harmony import */ var _modules_burger_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_burger_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/nav/nav */ "./src/blocks/modules/nav/nav.js");
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_nav_nav__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=main.js.map