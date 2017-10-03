export default ($window, $timeout, dom) => {
	return {
		scope: {},
		restrict: 'A',
		bindToController: {
			treshold: '=',
			onBottomReached: '&'
		},
		controller: () => {},
		controllerAs: '$ctrl',
		link: (scope, element, attrs, ctrl) => {
			let windowEl = angular.element($window);
			var now = null;

			let _checkIsBottomReached = () => {
				if (dom.getHeight(element) + dom.getOffsetTop(element) - (ctrl.treshold || 100) <= dom.getPageYOffset(element) + dom.getHeight(windowEl)) {
					if (!now || new Date().getTime() - now > 250) {
						ctrl.onBottomReached && ctrl.onBottomReached();
						now = new Date().getTime();
					}
				}
			}

			windowEl.bind('scroll', _checkIsBottomReached);

			//Initial check is bottom reached
			$timeout(() => {
				_checkIsBottomReached();
			});
		}
	}
}