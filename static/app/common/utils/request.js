export default class {
	constructor($http, utils) {
		this.utils = utils;
		this.$http = $http;
	}

	getImg({url}) {
		return this.$http.get(url, {
				responseType: "blob"
			})
			.then((response) => {
				if (response.status === 200) {
					return this.utils.blobToBase64(response.data);
				}
			});
	}
}