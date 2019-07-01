import "./main-slider"
import "./main-banners"
import "./catalog-slider"
import "./tovar"
import "./forms"
import "./ts-slider"
import "./textPage/text-page"

import {domReady, App, Element} from "./xpage/index"

domReady(() => {
	setSameHeights()
})

domReady(() => {
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