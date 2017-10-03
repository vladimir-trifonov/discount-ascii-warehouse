// Export module name
export let name = 'app.widgets';

// Module
import angular from 'angular';
import sortByWidget from './sortBy/sort-by.cmp';
import scrollLoadWidget from './scrollLoad/scroll-load.directive';
import loadingWidget from './loading/loading.directive';
import endOfDataWidget from './endOfData/end-of-data.directive';
import { name as utilsDepName } from '../utils/module';

angular.module(name, [utilsDepName])
	.component('sortBy', sortByWidget)
	.directive('scrollLoad',['$window', '$timeout', 'dom', scrollLoadWidget])
	.directive('loading', ['$timeout', loadingWidget])
	.directive('endOfData', ['$timeout', endOfDataWidget]);