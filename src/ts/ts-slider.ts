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
			breakpoints: {
				1000: {
					slidesPerView: 3
				},
				800: {
					slidesPerView: 2,
					spaceBetween: 45
				},
				660: {
					slidesPerView: 1
				}
			}
		})
	})

	setSameHeights()

	window.addEventListener("reisze", setSameHeights)
})

const setSameHeights = () => {
	App.each(".tns-slider", (el: HTMLElement) => {
		new Element(el.querySelectorAll(".cat-item__title")).height(
			Math.max(...new Element(el.querySelectorAll(".cat-item__title")).map((value: HTMLElement) => {
				return parseInt(getComputedStyle(value).height)})))

		new Element(el.querySelectorAll(".cat-buy")).height(
			Math.max(...new Element(el.querySelectorAll(".cat-buy")).map((value: HTMLElement) => {
				value.removeAttribute("style")
				return parseInt(getComputedStyle(value).height)})))
	})
}