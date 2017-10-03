// Export module name
export let name = 'app.ads';

// Module
import angular from 'angular';

import './ads.css!';
import adComponent from './ad.cmp';
import adsService from './ads.service';
import { name as utilsDepName } from '../../common/utils/module';

angular.module(name, [ utilsDepName ])
	.service('adsService', ['API', 'utils', 'request', adsService])
	.component('ad', adComponent);
