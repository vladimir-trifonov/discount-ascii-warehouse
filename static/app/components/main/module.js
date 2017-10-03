// Export module name
export let name = 'app';

// Module
import angular from 'angular';
import 'angular-ui-router';

import './main.css!';
import mainTpl from './main.tpl.html!text';

import { name as constDepName } from '../../common/constants/module';
import { name as adsDepName } from '../ads/module';
import { name as productsDepName } from '../products/module';

angular.module(name, ['ui.router', constDepName, adsDepName, productsDepName])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise("/");

		// Add main / route
		$stateProvider
			.state('main', {
				url: '/',
				template: mainTpl
			});
	}]);