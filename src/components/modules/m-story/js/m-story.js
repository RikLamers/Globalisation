// Optional. When using fullPage extensions
//import scrollHorizontally from './fullpage.scrollHorizontally.min';

// Optional. When using scrollOverflow:true
//import IScroll from 'fullpage.js/vendors/scrolloverflow';

// Importing fullpage.js
// import fullpage from 'fullpage.js';

// When using fullPage extensions replace the previous import
// of fullpage.js for this file
//import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// Initializing it
// var fullPageInstance = new fullpage('#fullpage', {
// 	licenseKey: '',
//     navigation: false,
// 	sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
// });

// Calling methods
// fullpage_api.moveSectionDown();
// Or
// fullPageInstance.moveSectionDown();

import $ from 'jquery';
import fullpage from 'fullpage.js';
import { TweenMax } from 'gsap/all';

class Story {
	constructor() {
		this.initialize();
	}

	setup() {
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
		this.$holder = document.getElementsByClassName('m-story')[0];
		this.$body = document.getElementsByTagName('body');
		this.$moreInfo = document.getElementsByClassName('m-story__moreinfo')[0];
		this.$moreInfoContent = document.getElementsByClassName('m-story__moreinfo--content')[0];
		this.$moreInfoBtn = document.getElementsByClassName('m-story__btn');
		this.$moreInfoTitle = document.getElementsByClassName('m-story__moreinfo--title')[0];
		this.$moreInfoQuote = document.getElementsByClassName('m-story__moreinfo--quote')[0];
        this.$fullPageInstance = new fullpage('#m-story', {
            licenseKey: '49DC2AC1-90EE4B99-807E2E82-35003862',
			navigation: false,
			anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
			menu: '#m-navigation__list',
			sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'tomato', '#ff5f45', '#0798ec', '#fc6c7c', 'tomato', 'pink'],
			lazyLoading: true,
			afterLoad: (origin, destination, direction) => {
				this.checkAnimation(Number(destination.anchor));
			}
		});
		this.$fullpageCell = document.getElementsByClassName('fp-tableCell');
	}

	eventListeners() {
		for (let i = 0; i < this.$moreInfoBtn.length; i++) {
			this.$moreInfoBtn[i].addEventListener('click', (e) => {
				if (this.$moreInfo.classList.contains('active')) {
					this.$moreInfo.classList.remove('active');
					this.$fullPageInstance.setAllowScrolling(true);
				} else {
					this.$moreInfo.classList.add('active');
					this.$fullPageInstance.setAllowScrolling(false);
				}
			});
		}
		if (this.$navButton) {
			this.$navButton.addEventListener('click', this.disableScroll.bind(this));
		}
	}

	disableScroll(e) {
		if (e.target.classList.contains('is--active')) {
			this.$fullPageInstance.setAllowScrolling(false);
		} else {
			this.$fullPageInstance.setAllowScrolling(true);
		}
	}

	resetPosition() {
		for (let i = 0; i < this.$fullpageCell.length; i++) {
			this.$fullpageCell[i].style.display = 'block';
		}
	}

	checkAnimation(anchor) {
		this.placeRightText(anchor);
	}

	placeRightText(anchor) {
		let index = anchor - 1;

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
