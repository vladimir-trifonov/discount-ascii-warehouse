import ServiceEmitter from 'app/common/lib/serviceEmitter';

export default class extends ServiceEmitter {
	constructor(API, emitter, stream, {	pageSize }) {
		super(emitter, 'products');

		this.stream = stream;
		this.options = {
			pageSize,
			API
		};
		this.notifyOnLoaded = false;
		this.productsStream = null;

		this.products = [];
	}

	loadProducts(options = {}) {
		let doReset = this._isNewLoad(options);
		let canLoad = this._checkCanLoad(doReset, options);

		if (canLoad) {
			this.notifyOnLoaded = true;

			if (doReset) {
				// On reset: Empty old products list and load new products
				this.products = [];
				this.options = Object.assign({}, this.options, options);

				// Clear the list
				this.notify();
			}

			if (this.products.length) {
				// Display the prefetched
				this.notify();

				// Run next prefetch: don't notify on loaded
				this.notifyOnLoaded = false;
			}

			this._loadProducts();
		}
	}

	_isNewLoad(options) {
		return options.sortBy && options.sortBy !== this.options.sortBy
	}

	_checkCanLoad(doReset, options) {
		if (doReset) {
			if (this.productsStream) {
				// Abort the current request if options has changed
				this._abort();
			}

			this.endOfData = false;
		} else if (this.endOfData) {
			return false;
		}

		if (this.productsStream) {
			// Show loading if it's in the prefetch phase
			!this.notifyOnLoaded && this.productsStream.setNotify(true);

			// Loading in progress. Notify when done.
			this.notifyOnLoaded = true;
			return false;
		}

		return true;
	}

	_loadProducts() {
		this.productsStream = this.stream.getJSON({
			url: `${this.options.API.url}${this.options.API.routes.products}?limit=${this.options.pageSize}&skip=${this.products.length}${this.options.sortBy ? `&sort=${this.options.sortBy}` : ''}`,
			onData: this._onData.bind(this),
			onDataError: this._onDataError.bind(this),
			onDataEnd: this._onDataEnd.bind(this),
			notify: this.notifyOnLoaded
		});
	}

	_abort() {
		this.productsStream.abort();
		this.productsStream = null;
	}

	_onData(products) {
		if (products) {
			this.products = [...this.products, ...products];
		}

		if (this.notifyOnLoaded) {
			this.notify();
		}
	}

	_onDataError(err) {
		if (this.notifyOnLoaded) {
			this.notify(err || 'Error loading products!');
		}
	}

	_onDataEnd(endOfData) {
		if (endOfData) {
			this.endOfData = true;
		}

		if (this.notifyOnLoaded) {
			// Run next prefetch: don't notify on loaded
			this.notifyOnLoaded = false;

			if(!this.endOfData) {
				this._loadProducts();
			}
		} else {
			this.productsStream = null;
		}
	}

	getProducts() {
		return this.products;
	}
}