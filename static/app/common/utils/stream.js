import StatusEmitter from '../lib/statusEmitter';

export default class extends StatusEmitter {
	constructor(utils, emitter) {
		super(emitter);

		this.utils = utils;
	}

	getJSON({url, onData, onDataError, onDataEnd, notify}) {
		let oReq = new XMLHttpRequest();
		let loaded = 0;

		// Send stream json data
		let _onData = () => {
			if ((oReq.readyState === 3 || oReq.readyState === 4) && oReq.status === 200) {
				let data = oReq.response;

				if (oReq.getResponseHeader('content-type') === 'application/x-json-stream') {
					if (oReq.response.length !== loaded) {
						// Parse x-json-stream text to JSON array
						data = this.utils.jsonStreamTextParse(oReq.response.substr(loaded));

						onData && onData(data);
						loaded = oReq.response.length;
					}
				}
			}
		}

		// Send stream data on event
		oReq.addEventListener('progress', _onData);
		oReq.addEventListener('load', _onData);

		// Notify on end
		oReq.addEventListener('loadend', () => {
			notify && this.notify('loadingEnd');

			if (oReq.status === 200) {
				let endOfData = (oReq.response && oReq.response.length === 0) || !oReq.response;
				if (endOfData) {
					this.notify('endOfData');
				}

				onDataEnd && onDataEnd(endOfData);
			}
		});

		// Notify on error
		oReq.addEventListener('error', (err) => {
			notify && this.notify('loadingEnd');

			onDataError && onDataError(err);
		});

		// Set request settings
		oReq.open('GET', url, true);

		notify && this.notify('loadingStart');
		// Send the request
		oReq.send(null);

		return {
			// Return way to abort the request
			abort: () => {
				notify && this.notify('loadingEnd');

				oReq.abort();
			},
			setNotify: (notifyUpdated) => {
				if(notify === notifyUpdated) {
					return;
				}

				notify = notifyUpdated;

				notify && this.notify('loadingStart');
				notify || this.notify('loadingEnd');
			}
		}
	}
}