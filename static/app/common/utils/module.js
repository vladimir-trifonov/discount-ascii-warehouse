// Export module name
export let name = 'app.utils';

// Module
import angular from 'angular';
import utils from './utils';
import stream from './stream';
import request from './request';
import date from './date';
import dom from './dom';

angular.module(name, [])
	.service('utils', ['$q', utils])
	.service('date', date)
	.service('dom', dom)
	.service('stream', ['utils', '$rootScope', stream])
	.service('request', ['$http', 'utils', request]);