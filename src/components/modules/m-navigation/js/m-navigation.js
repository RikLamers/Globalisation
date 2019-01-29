import $ from 'jquery';

class Navigation {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-navigation')[0];
		this.$body = document.getElementsByTagName('body');
		this.$main = document.getElementsByTagName('main');
		this.$nav = this.$holder;
		this.$navButton = document.getElementsByClassName('m-navigation__toggle')[0];
		this.$navList = document.getElementsByClassName('m-navigation__list')[0];
		this.$navItem = document.getElementsByClassName('m-navigation__item');
		this.$mobileNavIsVisibile = false;

	}

	eventListeners() {
		if (this.$navButton) {
			this.$navButton.addEventListener('click', (e) => {
				e.preventDefault();
				this.toggleNav();
			});
		}

		if (this.$navItem) {
			for (let i = 0; i < this.$navItem.length; i++) {
				this.$navItem[i].addEventListener('click', this.toggleNav.bind(this));
			}
		}
	}

	toggleNav() {
		if (this.$mobileNavIsVisibile) {
			this.$navButton.classList.remove('is--active');
			this.$mobileNavIsVisibile = false;
			this.$navList.classList.remove('is--active');

		} else {
			this.$navButton.classList.add('is--active');
			this.$mobileNavIsVisibile = true;
			this.$navList.classList.add('is--active');
		}
	}

	initialize() {
		this.setup();
		this.eventListeners();
	}
}

new Navigation();
