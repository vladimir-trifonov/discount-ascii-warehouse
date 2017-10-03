import AdCtrl from './ad.ctrl';

export default {
	controller: ['adsService', AdCtrl],
	template: '<img ng-if="$ctrl.src" class="ad" ng-src="{{$ctrl.src}}"/>'
}