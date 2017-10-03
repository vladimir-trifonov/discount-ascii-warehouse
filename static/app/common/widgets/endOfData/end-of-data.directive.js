import './end-of-data.css!';

export default ($timeout) => {
	return {
		scope: {},
		template: `<div ng-show="isVisible" ng-hide="!isVisible" class="end-of-data">~ end of catalogue ~</div>`,
		link: (scope, element) => {
			scope.isVisible = false;

			scope.$on('endOfData', () => {
				$timeout(() => {
					scope.isVisible = true;
				});
			});

			scope.$on('showLoading', () => {
				if (!scope.isVisible) {
					return;
				}

				$timeout(() => {
					scope.isVisible = false;
				});
			});
		}
	}
}