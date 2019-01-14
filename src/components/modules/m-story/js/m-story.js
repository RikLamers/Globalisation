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

class Story {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-story')[0];
        this.$body = document.getElementsByTagName('body');
        this.fullPageInstance = new fullpage('#fullpage', {
            licenseKey: '',
            navigation: false,
            sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
        });
	}

	initialize() {
		this.setup();
		this.eventListeners();
	}
}

new Story();
