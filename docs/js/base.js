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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

__webpack_require__(/*! ./jquery.fancybox.js */ "./src/js/jquery.fancybox.js");

__webpack_require__(/*! ../css/jquery.fancybox.css */ "./src/css/jquery.fancybox.css");

__webpack_require__(/*! ../js/jquery.menu-aim.js */ "./src/js/jquery.menu-aim.js");

(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})();

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})();

window.animateScroll = function () {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({
    scrollTop: offset - parseInt(getComputedStyle(document.querySelector(".head")).height) - 40
  });
};

window.isScrolledIntoView = function (elem) {
  var docViewTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
  var docViewBottom = docViewTop + window.innerHeight;
  var elemTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).offset().top;
  var elemBottom = elemTop + 10;
  return elemBottom <= docViewBottom && elemTop >= docViewTop;
};

document.addEventListener("DOMContentLoaded", function () {
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
  var menu = new Menu(".h-menu");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".h-menu").menuAim({
    activate: menu.open,
    deactivate: menu.close,
    submenuDirection: "below",
    exitMenu: menu.close
  });
});

var Menu =
/*#__PURE__*/
function () {
  _createClass(Menu, [{
    key: "$menu",
    set: function set(selector) {
      this._menu = selector;
    },
    get: function get() {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu);
    }
  }]);

  function Menu($obj) {
    _classCallCheck(this, Menu);

    this.$menu = $obj; // this.$menu.hover(_ => {}, e => {
    // 	this.close();
    // });
  }

  _createClass(Menu, [{
    key: "open",
    value: function open(el) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find(".submenu").addClass("js__opened");
    }
  }, {
    key: "close",
    value: function close() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".submenu").removeClass("js__opened");
    }
  }]);

  return Menu;
}();

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
      $list.slideUp(300);
      $this.removeClass("js__opened");
    } else {
      // $(".filter__item-title.js__opened").removeClass("js__opened")
      // .next(".filter__item-content").slideUp(300)
      $list.slideDown(300);
      $this.addClass("js__opened");
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
        $maxInput = $this.find(".price-max-cur"),
        $minInput = $this.find(".price-min-cur");
    $this.find(".price-filter__slider").slider({
      animate: "normal",
      min: min,
      max: max,
      values: [parseInt(curMin), parseInt(curMax)],
      range: true,
      step: step,
      slide: function slide(e, ui) {
        $minInput.val(parseInt(ui.values[0])).trigger("change");
        $maxInput.val(parseInt(ui.values[1])).trigger("change");
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
  $uiSlider.find(".ui-slider-handle:nth-last-child(2)").attr("data-count", partNumber(count));
},
    setMaxHandle = function setMaxHandle($uiSlider, count) {
  $uiSlider.find(".ui-slider-handle:nth-last-child(1)").attr("data-count", partNumber(count));
};

/***/ }),

/***/ "./src/js/jquery.menu-aim.js":
/*!***********************************!*\
  !*** ./src/js/jquery.menu-aim.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * menu-aim is a jQuery plugin for dropdown menus that can differentiate
 * between a user trying hover over a dropdown item vs trying to navigate into
 * a submenu's contents.
 *
 * menu-aim assumes that you have are using a menu with submenus that expand
 * to the menu's right. It will fire events when the user's mouse enters a new
 * dropdown item *and* when that item is being intentionally hovered over.
 *
 * __________________________
 * | Monkeys  >|   Gorilla  |
 * | Gorillas >|   Content  |
 * | Chimps   >|   Here     |
 * |___________|____________|
 *
 * In the above example, "Gorillas" is selected and its submenu content is
 * being shown on the right. Imagine that the user's cursor is hovering over
 * "Gorillas." When they move their mouse into the "Gorilla Content" area, they
 * may briefly hover over "Chimps." This shouldn't close the "Gorilla Content"
 * area.
 *
 * This problem is normally solved using timeouts and delays. menu-aim tries to
 * solve this by detecting the direction of the user's mouse movement. This can
 * make for quicker transitions when navigating up and down the menu. The
 * experience is hopefully similar to amazon.com/'s "Shop by Department"
 * dropdown.
 *
 * Use like so:
 *
 *      $("#menu").menuAim({
 *          activate: $.noop,  // fired on row activation
 *          deactivate: $.noop  // fired on row deactivation
 *      });
 *
 *  ...to receive events when a menu's row has been purposefully (de)activated.
 *
 * The following options can be passed to menuAim. All functions execute with
 * the relevant row's HTML element as the execution context ('this'):
 *
 *      .menuAim({
 *          // Function to call when a row is purposefully activated. Use this
 *          // to show a submenu's content for the activated row.
 *          activate: function() {},
 *
 *          // Function to call when a row is deactivated.
 *          deactivate: function() {},
 *
 *          // Function to call when mouse enters a menu row. Entering a row
 *          // does not mean the row has been activated, as the user may be
 *          // mousing over to a submenu.
 *          enter: function() {},
 *
 *          // Function to call when mouse exits a menu row.
 *          exit: function() {},
 *
 *          // Selector for identifying which elements in the menu are rows
 *          // that can trigger the above events. Defaults to "> li".
 *          rowSelector: "> li",
 *
 *          // You may have some menu rows that aren't submenus and therefore
 *          // shouldn't ever need to "activate." If so, filter submenu rows w/
 *          // this selector. Defaults to "*" (all elements).
 *          submenuSelector: "*",
 *
 *          // Direction the submenu opens relative to the main menu. Can be
 *          // left, right, above, or below. Defaults to "right".
 *          submenuDirection: "right"
 *      });
 *
 * https://github.com/kamens/jQuery-menu-aim
*/
(function ($) {
  $.fn.menuAim = function (opts) {
    // Initialize menu-aim for all elements in jQuery collection
    this.each(function () {
      init.call(this, opts);
    });
    return this;
  };

  function init(opts) {
    var $menu = $(this),
        activeRow = null,
        mouseLocs = [],
        lastDelayLoc = null,
        timeoutId = null,
        options = $.extend({
      rowSelector: "> li",
      submenuSelector: "*",
      submenuDirection: "right",
      tolerance: 75,
      // bigger = more forgivey when entering submenu
      enter: $.noop,
      exit: $.noop,
      activate: $.noop,
      deactivate: $.noop,
      exitMenu: $.noop
    }, opts);
    var MOUSE_LOCS_TRACKED = 3,
        // number of past mouse locations to track
    DELAY = 300; // ms delay when user appears to be entering submenu

    /**
     * Keep track of the last few locations of the mouse.
     */

    var mousemoveDocument = function mousemoveDocument(e) {
      mouseLocs.push({
        x: e.pageX,
        y: e.pageY
      });

      if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
        mouseLocs.shift();
      }
    };
    /**
     * Cancel possible row activations when leaving the menu entirely
     */


    var mouseleaveMenu = function mouseleaveMenu() {
      if (timeoutId) {
        clearTimeout(timeoutId);
      } // If exitMenu is supplied and returns true, deactivate the
      // currently active row on menu exit.


      if (options.exitMenu(this)) {
        if (activeRow) {
          options.deactivate(activeRow);
        }

        activeRow = null;
      }
    };
    /**
     * Trigger a possible row activation whenever entering a new row.
     */


    var mouseenterRow = function mouseenterRow() {
      if (timeoutId) {
        // Cancel any previous activation delays
        clearTimeout(timeoutId);
      }

      options.enter(this);
      possiblyActivate(this);
    },
        mouseleaveRow = function mouseleaveRow() {
      options.exit(this);
    };
    /*
     * Immediately activate a row if the user clicks on it.
     */


    var clickRow = function clickRow() {
      activate(this);
    };
    /**
     * Activate a menu row.
     */


    var activate = function activate(row) {
      // if (row == activeRow) {
      //     return;
      // }
      if (activeRow) {
        options.deactivate(activeRow);
      }

      options.activate(row);
      activeRow = row;
    };
    /**
     * Possibly activate a menu row. If mouse movement indicates that we
     * shouldn't activate yet because user may be trying to enter
     * a submenu's content, then delay and check again later.
     */


    var possiblyActivate = function possiblyActivate(row) {
      var delay = activationDelay();

      if (delay) {
        timeoutId = setTimeout(function () {
          possiblyActivate(row);
        }, delay);
      } else {
        activate(row);
      }
    };
    /**
     * Return the amount of time that should be used as a delay before the
     * currently hovered row is activated.
     *
     * Returns 0 if the activation should happen immediately. Otherwise,
     * returns the number of milliseconds that should be delayed before
     * checking again to see if the row should be activated.
     */


    var activationDelay = function activationDelay() {
      if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
        // If there is no other submenu row already active, then
        // go ahead and activate immediately.
        return 0;
      }

      var offset = $menu.offset(),
          upperLeft = {
        x: offset.left,
        y: offset.top - options.tolerance
      },
          upperRight = {
        x: offset.left + $menu.outerWidth(),
        y: upperLeft.y
      },
          lowerLeft = {
        x: offset.left,
        y: offset.top + $menu.outerHeight() + options.tolerance
      },
          lowerRight = {
        x: offset.left + $menu.outerWidth(),
        y: lowerLeft.y
      },
          loc = mouseLocs[mouseLocs.length - 1],
          prevLoc = mouseLocs[0];

      if (!loc) {
        return 0;
      }

      if (!prevLoc) {
        prevLoc = loc;
      }

      if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x || prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
        // If the previous mouse location was outside of the entire
        // menu's bounds, immediately activate.
        return 0;
      }

      if (lastDelayLoc && loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
        // If the mouse hasn't moved since the last time we checked
        // for activation status, immediately activate.
        return 0;
      } // Detect if the user is moving towards the currently activated
      // submenu.
      //
      // If the mouse is heading relatively clearly towards
      // the submenu's content, we should wait and give the user more
      // time before activating a new row. If the mouse is heading
      // elsewhere, we can immediately activate a new row.
      //
      // We detect this by calculating the slope formed between the
      // current mouse location and the upper/lower right points of
      // the menu. We do the same for the previous mouse location.
      // If the current mouse location's slopes are
      // increasing/decreasing appropriately compared to the
      // previous's, we know the user is moving toward the submenu.
      //
      // Note that since the y-axis increases as the cursor moves
      // down the screen, we are looking for the slope between the
      // cursor and the upper right corner to decrease over time, not
      // increase (somewhat counterintuitively).


      function slope(a, b) {
        return (b.y - a.y) / (b.x - a.x);
      }

      ;
      var decreasingCorner = upperRight,
          increasingCorner = lowerRight; // Our expectations for decreasing or increasing slope values
      // depends on which direction the submenu opens relative to the
      // main menu. By default, if the menu opens on the right, we
      // expect the slope between the cursor and the upper right
      // corner to decrease over time, as explained above. If the
      // submenu opens in a different direction, we change our slope
      // expectations.

      if (options.submenuDirection == "left") {
        decreasingCorner = lowerLeft;
        increasingCorner = upperLeft;
      } else if (options.submenuDirection == "below") {
        decreasingCorner = lowerRight;
        increasingCorner = lowerLeft;
      } else if (options.submenuDirection == "above") {
        decreasingCorner = upperLeft;
        increasingCorner = upperRight;
      }

      var decreasingSlope = slope(loc, decreasingCorner),
          increasingSlope = slope(loc, increasingCorner),
          prevDecreasingSlope = slope(prevLoc, decreasingCorner),
          prevIncreasingSlope = slope(prevLoc, increasingCorner);

      if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
        // Mouse is moving from previous location towards the
        // currently activated submenu. Delay before activating a
        // new menu row, because user may be moving into submenu.
        lastDelayLoc = loc;
        return DELAY;
      }

      lastDelayLoc = null;
      return 0;
    };
    /**
     * Hook up initial menu events
     */


    $menu.mouseleave(mouseleaveMenu).find(options.rowSelector).mouseenter(mouseenterRow).mouseleave(mouseleaveRow).click(clickRow);
    $(document).mousemove(mousemoveDocument);
  }

  ;
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=base.js.map