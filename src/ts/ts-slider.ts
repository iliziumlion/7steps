import {domReady, Element, App} from "./xpage/index"
import {Swiper, Lazy, Navigation, Keyboard} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy, Navigation, Keyboard])

domReady(() => {

	App.each(".tenant-slider__slider", (el: HTMLDivElement) => {
		new Swiper(el.querySelector(".tns-slider") as HTMLElement, {
			slidesPerView: 4,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				prevEl: el.querySelector(".swiper-button-prev") as HTMLElement,
				nextEl: el.querySelector(".swiper-button-next") as HTMLElement,
			},
			roundLengths: true,
			spaceBetween: 21,
			loop: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		})
	})

	setSameHeights()
})

const setSameHeights = () => {
	App.each(".tns-slider", (el: HTMLElement) => {
		new Element(el.querySelectorAll(".cat-item__title")).height(
			Math.max(...new Element(el.querySelectorAll(".cat-item__title")).map((value: HTMLElement) => {
				return parseInt(getComputedStyle(value).height)})))
	})
}