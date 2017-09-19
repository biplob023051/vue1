// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from './routes.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Auth from './plugins/Auth.js';
import VeeValidate from 'vee-validate';
import VeeValidateMessagesNL from "vee-validate/dist/locale/nl";
import VModal from 'vue-js-modal';

/* Import JS files */
var $ = require('jquery');
window.jQuery = window.$ = $;

require('bootstrap');

/* Initialize Moment.JS */
const moment = require('moment');
require('moment/locale/nl');
Vue.use(require('vue-moment'), {
	moment
});

/* Vue modal integration */
Vue.use(VModal)

// Pass options to make all validators use the arabic language, also merge the english and arabic attributes with the internal dictionary.
VeeValidate.Validator.addLocale(VeeValidateMessagesNL);
Vue.use(VeeValidate, {
	locale: 'nl',
	delay: 200
});

Vue.use(Auth);
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = process.env.API;

// Add a response interceptor
Vue.axios.interceptors.response.use(function (response) {
	return response;
}, function (response) {
	if(response.response.status == 422) {
		var errorsList = response.response.data.error.errors;
		
		for (var key in errorsList) {
			var error = errorsList[key];
			for (var keyfinal in error) {
				alertify.error(error[keyfinal]);
			}
		}
	}
	
	if(response.response.status == 500) {
		var error = response.response.data.error;
		
		/* Temp error message, al iets beter */
		alertify.error("Er is iets fout gegaan, gelieve opnieuw te proberen: "+error['message']);
	}

	/* Experimental logout feature */
	if(response.response.status == 401) {
		console.log(response.response.status);

		Vue.$router.push('/auth/login');
		Vue.auth.destroyToken();
	}
	
	return Promise.reject(response);
});

//Configure route guards
Router.beforeEach(function(to, from, next) {
	window.scrollTo(0, 0);

	document.title = to.meta.title;
	
	//If token is set set Authorization banners -> put here because of bug on redirect
	var token = Vue.auth.getToken();

	Vue.axios.defaults.headers.common.Authorization = token ? 'Bearer '+token : '';

	/* Get profile */
	if(Vue.auth.loggedIn()) {
		Vue.axios.get('/user').then(function (response) {
			Vue.auth.setProfile(response.data.user);
		}).catch(function (error) {});
	}

	if(to.matched.some(function(record) { return record.meta.requiresGuest }) && Vue.auth.loggedIn()) {
		next({
			path: '/buildings'
		});
	} else if (to.matched.some(function(record) { return record.meta.requiresAuth }) && !Vue.auth.loggedIn()) {
		next({
			path: '/auth/login',
			query: { redirect: to.fullPath }
		});
	} else {
		next();
	}

	/* Disable actives */
	$('#site-header .nav-item.active').removeClass('active');
	$('#site-header .tab-pane.active').removeClass('active');

	resetScripts();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  template: '<App/>',
  components: { App }
})

function resetScripts() {
	/* Reset scripts */
	var r = document.getElementsByTagName('script');
	for (var i = (r.length-1); i >= 0; i--) {
	    if(r[i].getAttribute('id') != 'a'){
	        r[i].parentNode.removeChild(r[i]);
	    }
	}

	/* Temp fix unbind all functions */
	$("body").find("*").each(function() {
	    $(this).unbind();
	});

	setTimeout(function() {
		/* Load all different external js files... */
		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', 'static/v2/js/reporting.js');
		document.getElementsByTagName('body')[0].appendChild(el);

		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', '//cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.8.0/js/perfect-scrollbar.jquery.min.js');
		document.getElementsByTagName('body')[0].appendChild(el);

		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', 'static/v2/js/material.min.js');
		document.getElementsByTagName('body')[0].appendChild(el);

		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', 'static/v2/js/theme-plugins.js');
		document.getElementsByTagName('body')[0].appendChild(el);

		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', 'static/v2/js/main.js');
		document.getElementsByTagName('body')[0].appendChild(el);
		
		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', 'static/v2/js/selectize.min.js');
		document.getElementsByTagName('body')[0].appendChild(el);
		
		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', 'static/v2/js/swiper.jquery.min.js');
		document.getElementsByTagName('body')[0].appendChild(el);
		
		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', '//cdn.jsdelivr.net/alertifyjs/1.9.0/alertify.min.js');
		document.getElementsByTagName('body')[0].appendChild(el);
		
		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', 'static/v2/js/moment.min.js');
		document.getElementsByTagName('body')[0].appendChild(el);
		
		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', 'static/v2/js/daterangepicker.min.js');
		document.getElementsByTagName('body')[0].appendChild(el);

		var el = document.createElement('script');
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', 'static/v2/js/custom.js');
		document.getElementsByTagName('body')[0].appendChild(el);
	}, 500);
}
