import SortByCtrl from './sort-by.ctrl';
import './sort-by.css!';
import sortByTpl from './sort-by.tpl.html!text';

export default {
	bindings: {
		sortOptions: '=',
		onChange: '&'
	},
	template: sortByTpl,
	controller: SortByCtrl
}