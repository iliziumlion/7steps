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
/******/ 		"base": 0
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
/******/ 	deferredModules.push(["./src/js/common.js","js/vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ "./src/js/filter.js");


window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
document.addEventListener("DOMContentLoaded", function () {
  __webpack_require__(/*! ./jquery.fancybox.js */ "./src/js/jquery.fancybox.js");

  __webpack_require__(/*! ../css/jquery.fancybox.css */ "./src/css/jquery.fancybox.css");

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".fancybox").fancybox({
    trapFocus: false,
    touch: false,
    loop: true,
    buttons: ["fullscreen", "slideShow", "close"],
    image: {
      preload: true
    },
    transitionEffect: "slide"
  });
});

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_ui_widgets_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/widgets/slider.js */ "./node_modules/jquery-ui/ui/widgets/slider.js");
/* harmony import */ var jquery_ui_ui_widgets_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_slider_js__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener("DOMContentLoaded", function () {
  /** Свернуть развернуть фильтр */
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").on("click", ".filter__item-title", function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        $list = $this.next(".filter__item-content");

    if ($this.hasClass("js__opened")) {
      $this.removeClass("js__opened");
      $list.slideUp(300);
    } else {
      // $(".filter__item-title.js__opened").removeClass("js__opened")
      // .next(".filter__item-content").slideUp(300)
      $this.addClass("js__opened");
      $list.slideDown(300);
    }
  });
  /** ul-slider Для цены в фильтре*/

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".price-filter").length) {// require("")
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".price-filter").each(function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        min = +$this.find(".price-min").val() || 0,
        max = +$this.find(".price-max").val() || 0,
        step = +$this.find(".price-step").val() || 0,
        curMin = +$this.find(".price-min-cur").val() || min,
        curMax = +$this.find(".price-max-cur").val() || max,
        $maxInput = $this.find(".price-min-cur"),
        $minInput = $this.find(".price-min-cur");
    $this.find(".price-filter__slider").slider({
      animate: "normal",
      min: min,
      max: max,
      values: [parseInt(curMin), parseInt(curMax)],
      range: true,
      step: step,
      slide: function slide(e, ui) {
        $maxInput.val(parseInt(ui.values[0]));
        $minInput.val(parseInt(ui.values[1]));
        setMinHandle($this.find(".price-filter__slider"), parseInt(ui.values[0]));
        setMaxHandle($this.find(".price-filter__slider"), parseInt(ui.values[1]));
      }
    });
    setMinHandle($this.find(".price-filter__slider"), parseInt(curMin));
    setMaxHandle($this.find(".price-filter__slider"), parseInt(curMax));
  });
});

var partNumber = function partNumber(number) {
  return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
},
    setMinHandle = function setMinHandle($uiSlider, count) {
  console.log($uiSlider.find(".ui-slider-handle:nth-last-child(2)"));
  $uiSlider.find(".ui-slider-handle:nth-last-child(2)").attr("data-count", partNumber(count));
},
    setMaxHandle = function setMaxHandle($uiSlider, count) {
  console.log($uiSlider.find(".ui-slider-handle:nth-last-child(1)"));
  $uiSlider.find(".ui-slider-handle:nth-last-child(1)").attr("data-count", partNumber(count));
};

/***/ })

/******/ });
//# sourceMappingURL=base.js.map