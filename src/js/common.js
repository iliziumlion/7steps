import $ from "jquery"
import "./filter.js"

window.$ = $;
window.jQuery = $;
require("./jquery.fancybox.js")
require("../css/jquery.fancybox.css")
require("../js/jquery.menu-aim.js")

;(function() {

  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();

(function() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();


window.animateScroll = function(offset = 20){
	$("html, body").animate({
		scrollTop: offset - parseInt(getComputedStyle(document.querySelector(".head")).height) - 40
	})
}

window.isScrolledIntoView = elem =>{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + window.innerHeight;

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + 10;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

document.addEventListener("DOMContentLoaded", function(){

	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		loop: true,
		buttons: ["fullscreen", "slideShow", "close"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	})

	const menu = new Menu(".h-menu");

	$(".h-menu").menuAim({
		activate: menu.open,
		deactivate: menu.close,
		submenuDirection: "below",
		exitMenu: menu.close,
	})

	$(".partners-text__btn .default-btn").click(function(e){
		const $target = $($(this).attr("href"));

		$("html, body").animate({
			scrollTop: $target.offset().top - $(".head").height() - 30
		}, 300)

		e.preventDefault()
	})
})


class Menu {
	set $menu(selector){
		this._menu = selector;
	}
	get $menu(){
		return $(this._menu);
	}
	constructor($obj){
		this.$menu = $obj;

		// this.$menu.hover(_ => {}, e => {
		// 	this.close();
		// });
	}

	open(el){
		$(el).find(".submenu").addClass("js__opened");
	}

	close(){
		$(".submenu").removeClass("js__opened");
	}
}