import {domReady, Element, EventListener} from "./xpage/index"

domReady(() => {
	const tabs = document.querySelectorAll(".sh-tabs__tab");

	new EventListener(tabs).add("click", (el: HTMLElement) => {
		const $this = new Element(el);

		if ($this.hasClass("active"))
			return

		const targetId = $this.attr("data-target");

		new Element(".sh-tabs__tab.active, .sh-content.active").removeClass("active")

		$this.addElement(`.sh-content[data-id='${targetId}']`).addClass("active")
	})
})