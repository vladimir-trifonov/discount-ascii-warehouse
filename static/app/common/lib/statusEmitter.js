export default class {
	constructor(emitter) {
		this.emitter = emitter;
	}

	notify(notification) {
		let eventType = null;

		switch (notification) {
			case 'loadingStart':
				eventType = 'showLoading';
				break;
			case 'loadingEnd':
				eventType = 'hideLoading';
				break;
			case 'endOfData':
				eventType = 'endOfData';
				break;
		}

		if (eventType) {
			this.emitter.$broadcast(eventType);
		}

	}
}