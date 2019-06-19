import "./main-slider"

import {domReady, App, Element} from "./xpage/index"

domReady(() => {
	App.each(".catalog-list", (el: HTMLElement) => {
		new Element(el.querySelectorAll(".cat-item__title")).height(
			Math.max(...new Element(el.querySelectorAll(".cat-item__title")).map((value: HTMLElement) => {
				return parseInt(getComputedStyle(value).height)})))
	})
})