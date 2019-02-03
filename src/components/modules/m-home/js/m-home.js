import $ from 'jquery';
import fullpage from 'fullpage.js';

class Home {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-home')[0];
        this.$body = document.getElementsByTagName('body');
        		// FullPage instance
		this.$fullpageOptions = {
            licenseKey: '49DC2AC1-90EE4B99-807E2E82-35003862',
			navigation: false,
			anchors: ['home-1', 'home-2'],
			sectionsColor:['#fff', '#fff'],
			lazyLoading: true,
			afterLoad: (origin, destination, direction) => {

			}
		};
        this.$fullPageInstance = new fullpage('#m-home', this.$fullpageOptions);
    }
    
    eventListeners() {
        
    }

	initialize() {
		this.setup();
		this.eventListeners();
	}
}

new Home();
