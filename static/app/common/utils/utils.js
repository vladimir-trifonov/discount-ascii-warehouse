export default class {
	constructor($q) {
		this.$q = $q;
	}

	genRandomNum() {
		return Math.floor(Math.random() * 1000);
	}

	rowNumberRandomize(current, isOddInRow) {
		let number = current;

		if (number % 2 && isOddInRow) {
			number = 2 * Math.round(number / 2);
		} else if (!isOddInRow) {
			number += number % 2 ^ 1;
		}

		return number;
	}

	blobToBase64(data) {
		return this.$q((resolve, reject) => {
			let fr = new FileReader();
			fr.onload = function() {
				resolve(fr.result);
			};
			fr.readAsDataURL(data);
		});
	}

	jsonStreamTextParse(text) {
		let jsonArr = text.trim().split('\n');
		if (jsonArr) {
			return jsonArr.map((item) => {
				try {
					return JSON.parse(item);
				} catch (e) {
					this.notify(e);
				}
			});
		}

		return null;
	}
}