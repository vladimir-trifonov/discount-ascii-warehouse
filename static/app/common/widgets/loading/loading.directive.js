import loadingTpl from './loading.tpl.html!text';
import './loading.css!';

export default ($timeout) => {
	return {
		scope: {},
		template: loadingTpl,
		link: (scope, element) => {
			scope.isVisible = false;

			scope.$on('showLoading', () => {
				$timeout(() => {
					scope.isVisible = true;
				});
			});

			scope.$on('hideLoading', () => {
				$timeout(() => {
					scope.isVisible = false;
				});
			});
		}
	}
}