import angular from 'angular';
import { name as mainDepName } from 'app/components/main/module';

angular.element(document).ready(function() {
	angular.bootstrap(document, [ mainDepName ], {
		strictDi: true
	});
});