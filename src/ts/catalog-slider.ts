import {Swiper, Lazy, Navigation, Keyboard, Autoplay} from 'swiper/dist/js/swiper.esm.js'
import {domReady, App, Element} from "./xpage/index"

Swiper.use([Lazy, Navigation, Keyboard, Autoplay])

domReady(() => {
	App.each(".catalog-slider", (el: any) => {
		new Swiper(el.querySelector(".catalog-slider__list"), {
			loop: true,
			slidesPerView: 4,
			// watchSlidesProgress: true,
			spaceBetween: 21,
			navigation: {
				prevEl: el.querySelector(".swiper-button-prev"),
				nextEl: el.querySelector(".swiper-button-next")
			},
			lazy: {
				loadPrevNext: true,
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			breakpoints: {
				1000: {
					slidesPerView: 2
				},
				660: {
					slidesPerView: 1
				}
			}
		})
	})

	setSameHeights()

	window.addEventListener("resize", setSameHeights)
})

const setSameHeights = () => {
	App.each(".catalog-slider", (el: HTMLElement) => {
		new Element(el.querySelectorAll(".cat-item__title")).height(
			Math.max(...new Element(el.querySelectorAll(".cat-item__title")).map((value: HTMLElement) => {
				value.removeAttribute("style")
				return parseInt(getComputedStyle(value).height)})))
		
		new Element(el.querySelectorAll(".cat-buy")).height(
			Math.max(...new Element(el.querySelectorAll(".cat-buy")).map((value: HTMLElement) => {
				value.removeAttribute("style")
				return parseInt(getComputedStyle(value).height)})))
	})
}