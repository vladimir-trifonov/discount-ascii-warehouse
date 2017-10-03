// Export module name
export let name = 'app.products';

// Module
import angular from 'angular';

import './products.css!';
import productsService from './products.service';
import productsComponent from './products.cmp';
import productItemComponent from './product/product.item.cmp';
import productAdComponent from './product/product.ad.cmp';
import { name as filtersDepName } from '../../common/filters/module';
import { name as widgetsDepName } from '../../common/widgets/module';

angular.module(name, [filtersDepName, widgetsDepName])
	.service('productsService', ['API', '$rootScope', 'stream', 'PRODUCTS', productsService])
	.component('productItem', productItemComponent)
	.component('productAd', productAdComponent)
	.component('products', productsComponent);