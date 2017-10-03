export default class {
	constructor(emitter, ns) {
		this.emitter = emitter;
		this.ns = ns;
	}

	subscribe(instance, callback) {
		var handler = this.emitter.$on(`${this.ns}:notifying-service-event`, callback);
		instance.$on('$destroy', handler);
	}

	notify(err) {
		this.emitter.$emit(`${this.ns}:notifying-service-event`, err);
	}
}