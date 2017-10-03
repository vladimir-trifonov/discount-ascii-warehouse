export default class {
	constructor(adsService) {
		this.service = adsService;

		this._init();
	}

	_init() {
		this.service.getAd()
			.then((src) => this.src = src)
			.catch(console.log.bind(console));
	}
}