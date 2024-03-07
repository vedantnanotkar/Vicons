/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-angle-right': '&#xe90a;',
		'icon-angle-left': '&#xe90b;',
		'icon-angle-up': '&#xe90c;',
		'icon-angle-down': '&#xe90d;',
		'icon-home': '&#xe900;',
		'icon-menu-burger': '&#xe901;',
		'icon-search': '&#xe902;',
		'icon-bell': '&#xe903;',
		'icon-settings': '&#xe904;',
		'icon-calendar': '&#xe905;',
		'icon-diary-bookmark-down': '&#xe906;',
		'icon-file-download': '&#xe907;',
		'icon-bookmark': '&#xe908;',
		'icon-tags': '&#xe909;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
