import {domReady, EventListener, Element} from "./xpage/index"

domReady(() => {
	new EventListener(".partners__links-select").add("change", (el: HTMLSelectElement) => {
		const value = parseInt(el.value) + 1,
			target = new Element(`.partners-link:nth-child(${value})`);

		if (target.length)
			target.getHTMLElement(0).click()
	})
})