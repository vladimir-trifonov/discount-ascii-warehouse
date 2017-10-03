export default class {
	constructor($scope, $timeout, service, {
		adAfter, sortOptions
	}) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.service = service;
		this.adAfter = adAfter;
		this.sortOptions = sortOptions;

		this._init();
	}

	_init() {
		this.service.subscribe(this.$scope, ($event, err) => {
			if (err) {
				return console.log(err);
			}

			this.$timeout(() => this.products = this.service.getProducts());
		});
	}

	load(sortBy) {
		this.service.loadProducts({sortBy});
	}
}