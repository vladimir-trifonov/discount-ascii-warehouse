export default class {
	constructor() {
		this.sortBy = null;
	}

	change() {
		this.onChange({
			sortBy: this.sortBy
		});
	}
}