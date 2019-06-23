/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"common": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/ts/common.ts","js/vendors","js/xpage"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/catalog-slider.ts":
/*!**********************************!*\
  !*** ./src/ts/catalog-slider.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, swiper_esm_js_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Lazy, swiper_esm_js_1.Navigation, swiper_esm_js_1.Keyboard, swiper_esm_js_1.Autoplay]);
    index_1.domReady(function () {
        index_1.App.each(".catalog-slider", function (el) {
            new swiper_esm_js_1.Swiper(el.querySelector(".catalog-slider__list"), {
                loop: true,
                slidesPerView: 4,
                watchSlidesProgress: true,
                roundLengths: true,
                spaceBetween: 21,
                navigation: {
                    prevEl: el.querySelector(".swiper-button-prev"),
                    nextEl: el.querySelector(".swiper-button-next")
                },
                lazy: {
                    loadPrevNext: true,
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
            });
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/common.ts":
/*!**************************!*\
  !*** ./src/ts/common.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts"), __webpack_require__(/*! ./main-slider */ "./src/ts/main-slider.ts"), __webpack_require__(/*! ./main-banners */ "./src/ts/main-banners.ts"), __webpack_require__(/*! ./catalog-slider */ "./src/ts/catalog-slider.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    index_1.domReady(function () {
        index_1.App.each(".catalog-list, .cat2-list", function (el) {
            new index_1.Element(el.querySelectorAll(".cat-item__title")).height(Math.max.apply(Math, new index_1.Element(el.querySelectorAll(".cat-item__title")).map(function (value) {
                return parseInt(getComputedStyle(value).height);
            })));
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/main-banners.ts":
/*!********************************!*\
  !*** ./src/ts/main-banners.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, swiper_esm_js_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Lazy, swiper_esm_js_1.EffectFade, swiper_esm_js_1.Autoplay]);
    index_1.domReady(function () {
        index_1.App.each(".main-banners", function (el) {
            new swiper_esm_js_1.Swiper(el, {
                effect: 'fade',
                watchSlidesProgress: true,
                lazy: {
                    loadPrevNext: true,
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/main-slider.ts":
/*!*******************************!*\
  !*** ./src/ts/main-slider.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js"), __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, swiper_esm_js_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Lazy, swiper_esm_js_1.Pagination, swiper_esm_js_1.EffectFade, swiper_esm_js_1.Autoplay]);
    var autoplayDelay = 3000;
    index_1.domReady(function () {
        new swiper_esm_js_1.Swiper(".main-slider", {
            effect: 'fade',
            loop: true,
            watchSlidesProgress: true,
            lazy: {
                loadPrevNext: true,
            },
            autoplay: {
                delay: autoplayDelay,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.main-slider__bullets .swiper-pagination',
                type: 'bullets',
                clickable: true,
                progressbarOpposite: true,
                renderBullet: function (index, className) {
                    return "<div class=\"" + className + "\">\t\t\t\t\t<div style=\"transition-duration: " + autoplayDelay + "ms\" class=\"swiper-pagination-bullet-progress\"></div>\t\t\t\t</div>";
                }
            }
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/xpage/index.ts":
/*!*******************************!*\
  !*** ./src/ts/xpage/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./core */ "./src/ts/xpage/core.ts"), __webpack_require__(/*! ./Element */ "./src/ts/xpage/Element.ts"), __webpack_require__(/*! ./EventListener */ "./src/ts/xpage/EventListener.ts"), __webpack_require__(/*! ./ready */ "./src/ts/xpage/ready.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, Element_1, EventListener_1, ready_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = core_1.default;
    exports.Element = Element_1.default;
    exports.EventListener = EventListener_1.default;
    exports.domReady = ready_1.default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=common.js.map