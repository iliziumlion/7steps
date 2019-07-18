import {domReady, EventListener, Element} from "./xpage/index"

domReady(() => {
	new EventListener(".recipes__select-select").add("change", (el: HTMLSelectElement) => {
		const value = parseInt(el.value) + 1,
			target = new Element(`.recipes__link:nth-child(${value}) a`);

		if (target.length)
			target.getHTMLElement(0).click()
	})
})