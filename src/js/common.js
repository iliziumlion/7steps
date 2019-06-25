import $ from "jquery"
import "./filter.js"

window.$ = $;
window.jQuery = $;
require("./jquery.fancybox.js")
require("../css/jquery.fancybox.css")

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
})