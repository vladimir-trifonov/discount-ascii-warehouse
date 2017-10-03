export default class {
	humanize(ms) {
		var diffMinutes = Math.ceil(ms / (1000 * 60));
		var diffHours = Math.ceil(diffMinutes / 60);
		var diffDays = Math.ceil(diffHours / 24);
		let offset = null;
		let timeString = null;

		if (diffHours <= 1) {
			offset = diffMinutes;
			timeString = 'minute';
		} else if (diffHours <= 24) {
			offset = diffHours;
			timeString = 'hour';
		} else {
			offset = diffDays;
			timeString = 'day';
		}

		return `${offset} ${timeString}${offset > 1 ? 's' : ''} ago`;
	}

	msToDays(ms) {
		return Math.ceil(ms / (1000 * 3600 * 24));
	}

	diffFromNow(dateString) {
		let date = new Date(dateString);
		let now = new Date();

		return Math.abs(now.getTime() - date.getTime());
	}

	toDateString(dateString) {
		let date = new Date(dateString);
		return date.toDateString();
	}
}