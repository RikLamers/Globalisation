import $ from 'jquery';
import fullpage from 'fullpage.js';
import { TweenMax, TimelineMax } from 'gsap/all';

class Story {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$lang = 'lim';
		this.$moreInfoTextPerSection = [
			{
				title: 'test',
				quote: 'Es t murge deug is, dan kinne ver de vogel tenminste zeen mit t daaglich, angesj is t geweun hijse!',
				text: [
					{
						tag: 'p',
						content: 'Vestibulum id ligula porta felis euismod semper.'
					},
					{
						tag: 'img',
						content: '/img/paal1.svg'
					},
					{
						tag: 'p',
						content: 'Vestibulum id ligula porta felis euismod semper.'
					}
				]
			}
		];
		this.$navButton = document.getElementsByClassName('m-navigation__toggle')[0];
		this.$navItems = document.getElementsByClassName('m-navigation__item');
		this.$holder = document.getElementsByClassName('m-story')[0];
		this.$body = document.getElementsByTagName('body');
		this.$moreInfo = document.getElementsByClassName('m-story__moreinfo')[0];
		this.$moreInfoContent = document.getElementsByClassName('m-story__moreinfo--content')[0];
		this.$moreInfoBtn = document.getElementsByClassName('m-story__btn');
		this.$moreInfoTitle = document.getElementsByClassName('m-story__moreinfo--title')[0];
		this.$moreInfoQuote = document.getElementsByClassName('m-story__moreinfo--quote')[0];

		this.$fullpageOptions = {
            licenseKey: '49DC2AC1-90EE4B99-807E2E82-35003862',
			navigation: false,
			anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
			menu: '#m-navigation__list',
			sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'tomato', '#ff5f45', '#0798ec', '#fc6c7c', 'tomato', 'pink'],
			lazyLoading: true,
			afterLoad: (origin, destination, direction) => {
				this.clearTL(destination.anchor);
				TweenMax.killAll(false, true, false);
				this.checkAnimation(Number(destination.anchor));
			}
		};

        this.$fullPageInstance = new fullpage('#m-story', this.$fullpageOptions);
		this.$fullpageCell = document.getElementsByClassName('fp-tableCell');
	}

	eventListeners() {
		for (let i = 0; i < this.$moreInfoBtn.length; i++) {
			this.$moreInfoBtn[i].addEventListener('click', (e) => {
				if (this.$moreInfo.classList.contains('active')) {
					this.$moreInfo.classList.remove('active');
					this.$fullPageInstance = new fullpage('#m-story', this.$fullpageOptions);
				} else {
					this.$moreInfo.classList.add('active');
					this.$fullPageInstance.destroy();
				}
			});
		}

		for (let x = 0; x < this.$navItems.length; x++) {
			this.$navItems[x].addEventListener('click', this.handleRoute.bind(this));
		}

		if (this.$navButton) {
			this.$navButton.addEventListener('click', this.disableScroll.bind(this));
		}
	}

	handleRoute(e) {
		this.$fullPageInstance = new fullpage('#m-story', this.$fullpageOptions);
		if ($(e.target).attr('data-menuanchor')) {
			window.location.href = `/#${$(e.target).attr('data-menuanchor')}`;
		}
	}

	clearTL(anchor) {
		const clearTimeLine = new TimelineMax();

			if (document.getElementsByClassName('m-story__text')[anchor-1]) {
				const getChildCount = document.getElementsByClassName('m-story__text')[anchor-1].childElementCount;
		
				for (let i = 0; i < getChildCount; i++) {
					clearTimeLine
						.set(document.getElementsByClassName(`m-story__text${anchor}-${i+1}`), {
							autoAlpha: 0
						});
				}
			}
	}

	disableScroll(e) {
		if (e.target.classList.contains('is--active')) {
			this.$fullPageInstance.destroy();
		} else {
			this.$fullPageInstance = new fullpage('#m-story', this.$fullpageOptions);
		}
	}

	resetPosition() {
		for (let i = 0; i < this.$fullpageCell.length; i++) {
			this.$fullpageCell[i].style.display = 'block';
		}
	}

	checkAnimation(anchor) {
		this.placeRightParagraph(anchor);
		this.clearTL(anchor);
		this.placeRightText(anchor);
	}

	placeRightParagraph(anchor) {
		let lang;

		if (this.$lang === 'nl') {
			lang = 'nl';
		} else if (this.$lang === 'lim') {
			lang = 'lim';
		}

		fetch(`/txt/text-${lang}-${anchor}.svg`)
			.then((response) => {
				return response.text();
			})
			.then((data) => {
				if (Number(document.getElementsByClassName('m-story__text')[anchor-1].getAttribute('data-id')) === anchor) {
					document.getElementsByClassName('m-story__text')[anchor-1].innerHTML = data;
				}
			});
		setTimeout(() => {
			this.runRightAnimation(anchor);
		}, 500);
	}

	runRightAnimation(anchor) {

		const textTimeLine = new TimelineMax();

		if (document.getElementsByClassName('m-story__text')[anchor-1]) {
			const getChildCount = document.getElementsByClassName('m-story__text')[anchor-1].childElementCount;
	
			for (let i = 0; i < getChildCount; i++) {
				textTimeLine
					.fromTo(document.getElementsByClassName(`m-story__text${anchor}-${i+1}`), 1, {
						y: '-=50',
						autoAlpha: 0
					}, {
						y: 0,
						autoAlpha: 1	
					}, '+=0.5');
			}
		}

	}

	placeRightText(anchor) {
		const index = anchor - 1;

		if (this.$moreInfoTextPerSection[index]) {
			this.$moreInfoTitle.innerText = this.$moreInfoTextPerSection[index].title;
			this.$moreInfoQuote.innerText = this.$moreInfoTextPerSection[index].quote;
			for (let i = 0; i < this.$moreInfoTextPerSection[index].text.length; i++) {
				const el = document.createElement(this.$moreInfoTextPerSection[index].text[i].tag);
				if (this.$moreInfoTextPerSection[index].text[i].tag === 'img') {
					el.src = this.$moreInfoTextPerSection[index].text[i].content;
				} else {
					el.innerText = this.$moreInfoTextPerSection[index].text[i].content;
				}
				this.$moreInfoContent.appendChild(el);
			}
		}
	}

	initialize() {
		this.setup();
		this.eventListeners();
		this.resetPosition();
	}
}

new Story();
