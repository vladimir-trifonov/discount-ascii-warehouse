import ProductsCtrl from './products.ctrl';
import productsTpl from './products.tpl.html!text';

export default {
	controller: ['$scope', '$timeout', 'productsService', 'PRODUCTS', ProductsCtrl],
	template: productsTpl
}