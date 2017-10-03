// Export module name
export let name = 'app.constants';

// Module
import angular from 'angular';

var __env = {};

// Import variables if present (from env.js)
if (window) {
	Object.assign(__env, window.__env);
}

angular.module(name, [])
	// API url
	.constant('API', __env.api)
	.constant('PRODUCTS', __env.products);