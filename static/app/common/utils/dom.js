export default class {
	getHeight(elem) {
		elem = elem[0] || elem;
		if (isNaN(elem.offsetHeight)) {
			return elem.document.documentElement.clientHeight;
		} else {
			return elem.offsetHeight;
		}
	}

	getOffsetTop(elem) {
		if (!elem[0].getBoundingClientRect || elem.css('none')) {
			return;
		}
		return elem[0].getBoundingClientRect().top + this.getPageYOffset(elem);
	}

	getPageYOffset(elem) {
		elem = elem[0] || elem;
		if (isNaN(window.pageYOffset)) {
			return elem.document.documentElement.scrollTop;
		} else {
			return elem.ownerDocument.defaultView.pageYOffset;
		}
	}
}