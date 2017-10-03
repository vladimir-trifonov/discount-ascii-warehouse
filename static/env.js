(function(window) {
	window.__env = window.__env || {};

	// API url
	window.__env.api = {
		url: 'http://localhost:8000',
		routes: {
			products: '/api/products',
			ads: '/ad'
		}
	}

	// Products component options
	window.__env.products = {
		pageSize: 26,
		adAfter: 20,
		sortOptions: ['size', 'price', 'id']
	}
}(this));