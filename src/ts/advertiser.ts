import {domReady, EventListener, App} from "./xpage/index"
import {Swiper, Lazy, Keyboard, Navigation} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy, Keyboard, Navigation])

domReady(() => {
	App.each(".advertiser__slider", (el: HTMLElement) => {
		new Swiper(el.querySelector(".advertiser-slider") as HTMLElement, {
			slidesPerView: 4,
			loop: true,
			spaceBetween: 20,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				prevEl: el.querySelector(".swiper-button-prev") as HTMLElement,
				nextEl: el.querySelector(".swiper-button-next") as HTMLElement
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			breakpoints: {
				1050: {
					slidesPerView: 3,
					spaceBetween: 40
				},
				900: {
					slidesPerView: 2
				},
				660: {
					slidesPerView: 1
				}
			}
		})
	})
})