import {domReady, EventListener, App} from "./xpage/index"
import {Swiper, Lazy, EffectFade, Navigation} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy, EffectFade, Navigation])

domReady(() => {
	let mainSlider: Swiper, navSlider: Swiper;

	mainSlider = new Swiper(".tb-slider", {
		effect: "fade",
		lazy: {
			loadPrevNext: true,
			loadOnTransitionStart: true,
		},
		roundLengths: true
	})

	App.each(".ts-slider__slide", (el: HTMLElement, i: number) => {
		new EventListener(el).add("click", () => {
			navSlider.slideTo(i)
			mainSlider.slideTo(i)
		})
	})

	navSlider = new Swiper(".ts-slider__list", {
		slidesPerView: 3,
		spaceBetween: 14,
		lazy: {
			loadPrevNext: true
		},
		navigation: {
			prevEl: ".ts-slider__arrows .swiper-button-prev",
			nextEl: ".ts-slider__arrows .swiper-button-next",
		},
		roundLengths: true,
		breakpoints: {
			1000: {
				slidesPerView: 5
			},
			660: {
				slidesPerView: 2
			}
		}
	})


})