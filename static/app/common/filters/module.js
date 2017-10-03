// Export module name
export let name = 'app.filters';

// Module
import angular from 'angular';
import fromNow from './fromNow';
import { name as utilsDepName } from '../utils/module';

angular.module(name, [utilsDepName])
	.filter('fromNow', ['date', fromNow]);