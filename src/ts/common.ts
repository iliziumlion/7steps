import "./main-slider"
import "./main-banners"
import "./catalog-slider"
import "./tovar"
import "./forms"
import "./ts-slider"
import "./shops"
import "./advertiser"
import "./textPage/text-page"

import {domReady, App, Element, MobileMenu, EventListener} from "./xpage/index"


const adaptiveMedia = "(max-width: 1000px)";

declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function; 
    }
}

domReady(() => {
	new MobileMenu({
		burger: ".head__burger",
		menu: ".mobile-menu",
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__menu-opened",
		ignoreWarnings: false,
		fixBody: true,
		media: adaptiveMedia
	})

	const filter = new MobileMenu({
		burger: ".filter-btn",
		menu: ".cat2__filter",
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__filter__opened",
		ignoreWarnings: true,
		fixBody: true,
		media: adaptiveMedia
	})

	new EventListener(".m-menu__item--submenu > .m-menu__link").add("click", (el: HTMLElement, e: Event) => {
		e.preventDefault()
		
		el.classList.add("js__opened")
	})

	new EventListener(".m-submenu__back").add("click", (el: HTMLElement) => {
		new Element(el).closest(".m-menu__item--submenu").find(".m-menu__link").removeClass("js__opened")
	})
})

domReady(() => {
	setSameHeights()

	const updatedDiv = document.querySelector("#update_ajax");

	if (!updatedDiv)
		return

	const observer = new MutationObserver(mutations => {
		setSameHeights()
	})

	observer.observe(updatedDiv, {attributes: false, childList: true, characterData: false})
})

const setSameHeights = () => {
	App.each(".catalog-list, .cat2-list", (el: HTMLElement) => {
		new Element(el.querySelectorAll(".cat-item__title")).height(
			Math.max(...new Element(el.querySelectorAll(".cat-item__title")).map((value: HTMLElement) => {
				return parseInt(getComputedStyle(value).height)})))
	})
}