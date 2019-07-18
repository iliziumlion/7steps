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

/***/ "./src/ts/advertiser.ts":
/*!******************************!*\
  !*** ./src/ts/advertiser.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1, swiper_esm_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Lazy, swiper_esm_js_1.Keyboard, swiper_esm_js_1.Navigation]);
    index_1.domReady(function () {
        index_1.App.each(".advertiser__slider", function (el) {
            new swiper_esm_js_1.Swiper(el.querySelector(".advertiser-slider"), {
                slidesPerView: 4,
                loop: true,
                spaceBetween: 20,
                lazy: {
                    loadPrevNext: true
                },
                navigation: {
                    prevEl: el.querySelector(".swiper-button-prev"),
                    nextEl: el.querySelector(".swiper-button-next")
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                breakpoints: {
                    1050: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    900: {
                        slidesPerView: 2
                    },
                    660: {
                        slidesPerView: 1
                    }
                }
            });
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

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
                breakpoints: {
                    1000: {
                        slidesPerView: 2
                    },
                    660: {
                        slidesPerView: 1
                    }
                }
            });
        });
        setSameHeights();
        window.addEventListener("resize", setSameHeights);
    });
    var setSameHeights = function () {
        index_1.App.each(".catalog-slider", function (el) {
            new index_1.Element(el.querySelectorAll(".cat-item__title")).height(Math.max.apply(Math, new index_1.Element(el.querySelectorAll(".cat-item__title")).map(function (value) {
                value.removeAttribute("style");
                return parseInt(getComputedStyle(value).height);
            })));
            new index_1.Element(el.querySelectorAll(".cat-buy")).height(Math.max.apply(Math, new index_1.Element(el.querySelectorAll(".cat-buy")).map(function (value) {
                value.removeAttribute("style");
                return parseInt(getComputedStyle(value).height);
            })));
        });
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/common.ts":
/*!**************************!*\
  !*** ./src/ts/common.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts"), __webpack_require__(/*! ./main-slider */ "./src/ts/main-slider.ts"), __webpack_require__(/*! ./main-banners */ "./src/ts/main-banners.ts"), __webpack_require__(/*! ./catalog-slider */ "./src/ts/catalog-slider.ts"), __webpack_require__(/*! ./tovar */ "./src/ts/tovar.ts"), __webpack_require__(/*! ./forms */ "./src/ts/forms.ts"), __webpack_require__(/*! ./ts-slider */ "./src/ts/ts-slider.ts"), __webpack_require__(/*! ./shops */ "./src/ts/shops.ts"), __webpack_require__(/*! ./advertiser */ "./src/ts/advertiser.ts"), __webpack_require__(/*! ./recipes */ "./src/ts/recipes.ts"), __webpack_require__(/*! ./textPage/text-page */ "./src/ts/textPage/text-page.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var adaptiveMedia = "(max-width: 1000px)";
    index_1.domReady(function () {
        new index_1.MobileMenu({
            burger: ".head__burger",
            menu: ".mobile-menu",
            menuActiveClass: "js__opened",
            bodyActiveClass: "js__menu-opened",
            ignoreWarnings: false,
            fixBody: true,
            media: adaptiveMedia
        });
        var filter = new index_1.MobileMenu({
            burger: ".filter-btn",
            menu: ".cat2__filter",
            menuActiveClass: "js__opened",
            bodyActiveClass: "js__filter__opened",
            ignoreWarnings: true,
            fixBody: true,
            media: adaptiveMedia
        });
        new index_1.EventListener(".m-menu__item--submenu > .m-menu__link").add("click", function (el, e) {
            e.preventDefault();
            el.classList.add("js__opened");
        });
        new index_1.EventListener(".m-submenu__back").add("click", function (el) {
            new index_1.Element(el).closest(".m-menu__item--submenu").find(".m-menu__link").removeClass("js__opened");
        });
    });
    index_1.domReady(function () {
        setSameHeights();
        var updatedDiv = document.querySelector("#update_ajax");
        if (!updatedDiv)
            return;
        var observer = new MutationObserver(function (mutations) {
            setSameHeights();
        });
        window.addEventListener("resie", setSameHeights);
        window.addEventListener("orientationchange", setSameHeights);
        observer.observe(updatedDiv, { attributes: false, childList: true, characterData: false });
    });
    var setSameHeights = function () {
        index_1.App.each(".catalog-list, .cat2-list", function (el) {
            new index_1.Element(el.querySelectorAll(".cat-item__title")).height(Math.max.apply(Math, new index_1.Element(el.querySelectorAll(".cat-item__title")).map(function (value) {
                value.removeAttribute("style");
                return parseInt(getComputedStyle(value).height);
            })));
            new index_1.Element(el.querySelectorAll(".cat-buy")).height(Math.max.apply(Math, new index_1.Element(el.querySelectorAll(".cat-buy")).map(function (value) {
                value.removeAttribute("style");
                return parseInt(getComputedStyle(value).height);
            })));
        });
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/forms.ts":
/*!*************************!*\
  !*** ./src/ts/forms.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    index_1.domReady(function () {
        index_1.App.each(".default-input__input--file", function (el) {
            var textInput = new index_1.Element(el).closest(".default-input")
                .find(".default-input__input[type='text']").getHTMLElement(0);
            new index_1.EventListener(textInput).add("click", function (input) {
                el.click();
            });
            new index_1.EventListener(el).add("change", function (el) {
                var files = [];
                for (var i = 0; i < el.files.length; i++)
                    files.push(el.files[i].name);
                if (!files.length)
                    textInput.value = "";
                else {
                    textInput.value = files.join(", ");
                }
            });
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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1, swiper_esm_js_1) {
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

/***/ "./src/ts/recipes.ts":
/*!***************************!*\
  !*** ./src/ts/recipes.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    index_1.domReady(function () {
        new index_1.EventListener(".recipes__select-select").add("change", function (el) {
            var value = parseInt(el.value) + 1, target = new index_1.Element(".recipes__link:nth-child(" + value + ") a");
            if (target.length)
                target.getHTMLElement(0).click();
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/shops.ts":
/*!*************************!*\
  !*** ./src/ts/shops.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    index_1.domReady(function () {
        var tabs = document.querySelectorAll(".sh-tabs__tab");
        new index_1.EventListener(tabs).add("click", function (el) {
            var $this = new index_1.Element(el);
            if ($this.hasClass("active"))
                return;
            var targetId = $this.attr("data-target");
            new index_1.Element(".sh-tabs__tab.active, .sh-content.active").removeClass("active");
            $this.addElement(".sh-content[data-id='" + targetId + "']").addClass("active");
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/textPage/text-page.ts":
/*!**************************************!*\
  !*** ./src/ts/textPage/text-page.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../xpage/index */ "./src/ts/xpage/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    index_1.domReady(function () {
        var tableWrap = document.createElement("div"), tableWrapTrack = document.createElement("div"), shadows = {
            right: document.createElement("div"),
            left: document.createElement("div"),
        };
        shadows.right.classList.add("table-wrap__shadow");
        shadows.right.classList.add("table-wrap__shadow--right");
        shadows.left.classList.add("table-wrap__shadow");
        shadows.left.classList.add("table-wrap__shadow--left");
        tableWrap.classList.add("table-wrap");
        tableWrapTrack.classList.add("table-wrap__track");
        index_1.App.wrap(".standart-page__text table:not([class])", tableWrapTrack);
        index_1.App.wrap(".table-wrap__track", tableWrap);
        index_1.App.each(".table-wrap", function (el) {
            el.insertBefore(shadows.left, el.querySelector("*:first-child"));
            el.insertBefore(shadows.right, null);
        });
        index_1.App.each(".table-wrap__track", function (track) {
            if (track.scrollWidth > track.clientWidth) {
                var wrap = track.closest(".table-wrap");
                var shadows_1 = {
                    right: wrap.querySelector(".table-wrap__shadow--right")
                };
                setShadowOpacity(shadows_1.right, track.scrollWidth - track.clientWidth);
            }
            new index_1.EventListener(track).add("scroll", function (el) {
                var wrap = el.closest(".table-wrap");
                var shadows = {
                    left: wrap.querySelector(".table-wrap__shadow--left"),
                    right: wrap.querySelector(".table-wrap__shadow--right")
                };
                setShadowOpacity(shadows.right, el.scrollWidth - el.clientWidth - el.scrollLeft);
                setShadowOpacity(shadows.left, el.scrollLeft);
            });
        });
    });
    var setShadowOpacity = function (element, scrollWidth, offsetWidth) {
        if (offsetWidth === void 0) { offsetWidth = 80; }
        element.style.opacity = (scrollWidth / offsetWidth <= 1 ? scrollWidth / offsetWidth : 1).toString();
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/tovar.ts":
/*!*************************!*\
  !*** ./src/ts/tovar.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1, swiper_esm_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Lazy, swiper_esm_js_1.EffectFade, swiper_esm_js_1.Navigation]);
    index_1.domReady(function () {
        var mainSlider, navSlider;
        mainSlider = new swiper_esm_js_1.Swiper(".tb-slider", {
            effect: "fade",
            lazy: {
                loadPrevNext: true,
                loadOnTransitionStart: true,
            },
            roundLengths: true
        });
        index_1.App.each(".ts-slider__slide", function (el, i) {
            new index_1.EventListener(el).add("click", function () {
                navSlider.slideTo(i);
                mainSlider.slideTo(i);
            });
        });
        navSlider = new swiper_esm_js_1.Swiper(".ts-slider__list", {
            slidesPerView: 3,
            spaceBetween: 14,
            lazy: {
                loadPrevNext: true
            },
            navigation: {
                prevEl: ".ts-slider__arrows .swiper-button-prev",
                nextEl: ".ts-slider__arrows .swiper-button-next",
            },
            roundLengths: true,
            breakpoints: {
                1000: {
                    slidesPerView: 5
                },
                660: {
                    slidesPerView: 2
                }
            }
        });
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/ts-slider.ts":
/*!*****************************!*\
  !*** ./src/ts/ts-slider.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./xpage/index */ "./src/ts/xpage/index.ts"), __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "./node_modules/swiper/dist/js/swiper.esm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1, swiper_esm_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    swiper_esm_js_1.Swiper.use([swiper_esm_js_1.Lazy, swiper_esm_js_1.Navigation, swiper_esm_js_1.Keyboard]);
    index_1.domReady(function () {
        index_1.App.each(".tenant-slider__slider", function (el) {
            new swiper_esm_js_1.Swiper(el.querySelector(".tns-slider"), {
                slidesPerView: 4,
                lazy: {
                    loadPrevNext: true
                },
                navigation: {
                    prevEl: el.querySelector(".swiper-button-prev"),
                    nextEl: el.querySelector(".swiper-button-next"),
                },
                roundLengths: true,
                spaceBetween: 21,
                loop: true,
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                breakpoints: {
                    1000: {
                        slidesPerView: 3
                    },
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 45
                    },
                    660: {
                        slidesPerView: 1
                    }
                }
            });
        });
        setSameHeights();
        window.addEventListener("reisze", setSameHeights);
    });
    var setSameHeights = function () {
        index_1.App.each(".tns-slider", function (el) {
            new index_1.Element(el.querySelectorAll(".cat-item__title")).height(Math.max.apply(Math, new index_1.Element(el.querySelectorAll(".cat-item__title")).map(function (value) {
                return parseInt(getComputedStyle(value).height);
            })));
            new index_1.Element(el.querySelectorAll(".cat-buy")).height(Math.max.apply(Math, new index_1.Element(el.querySelectorAll(".cat-buy")).map(function (value) {
                value.removeAttribute("style");
                return parseInt(getComputedStyle(value).height);
            })));
        });
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/xpage/index.ts":
/*!*******************************!*\
  !*** ./src/ts/xpage/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./core */ "./src/ts/xpage/core.ts"), __webpack_require__(/*! ./Element */ "./src/ts/xpage/Element.ts"), __webpack_require__(/*! ./EventListener */ "./src/ts/xpage/EventListener.ts"), __webpack_require__(/*! ./mobileMenu */ "./src/ts/xpage/mobileMenu.ts"), __webpack_require__(/*! ./ready */ "./src/ts/xpage/ready.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, Element_1, EventListener_1, mobileMenu_1, ready_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = core_1.default;
    exports.Element = Element_1.default;
    exports.EventListener = EventListener_1.default;
    exports.MobileMenu = mobileMenu_1.default;
    exports.domReady = ready_1.default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=common.js.map