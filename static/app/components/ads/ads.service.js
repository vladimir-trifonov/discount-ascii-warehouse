export default class {
	constructor(API, utils, request) {
		this.API = API;
		this.utils = utils;
		this.request = request;
		this.isOddInRow = 0;
	}

	getAd() {
		let randomAd = this.utils.genRandomNum();

		// Don't allow two even pair or two odd pair numbers in a row
		randomAd = this.utils.rowNumberRandomize(randomAd, this.isOddInRow);
		this.isOddInRow ^= 1;

		return this.request.getImg({url: `${this.API.url}${this.API.routes.ads}?r=${randomAd}`});
	}
}