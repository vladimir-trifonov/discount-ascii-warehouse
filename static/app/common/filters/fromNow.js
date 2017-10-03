export default (dateUtils) => {
	return function(input, days) {
		var timeDiff = dateUtils.diffFromNow(input);
		var diffDays = dateUtils.msToDays(timeDiff);

		if (diffDays <= days) {
			return dateUtils.humanize(timeDiff);
		}

		return dateUtils.toDateString(input);
	};
}