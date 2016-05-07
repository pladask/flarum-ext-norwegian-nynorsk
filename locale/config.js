moment.locale('nn', {
	months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
	monthsParseExact : true,
	weekdays : 'søndag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	weekdaysShort : 'sø._må._ty._on._to._fr._la.'.split('_'),
	weekdaysMin : 'sø_må_ty_on_to_fr_la'.split('_'),
	weekdaysParseExact : true,
	longDateFormat : {
		LT : 'HH:mm',
		LTS : 'HH:mm:ss',
		L : 'DD.MM.YYYY',
		LL : 'D. MMMM YYYY',
		LLL : 'D. MMMM YYYY [kl.] HH:mm',
		LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
	},
	calendar : {
		sameDay: '[i dag kl.] LT',
		nextDay: '[i morgon kl.] LT',
		nextWeek: 'dddd [kl.] LT',
		lastDay: '[i går kl.] LT',
		lastWeek: '[førre] dddd [kl.] LT',
		sameElse: 'L'
	},
	relativeTime : {
		future : 'om %s',
		past : '%s sidan',
		s : 'nokre sekund',
		m : 'eitt minutt',
		mm : '%d minutt',
		h : 'ein time',
		hh : '%d timar',
		d : 'ein dag',
		dd : '%d dagar',
		M : 'ein månad',
		MM : '%d månadar',
		y : 'eitt år',
		yy : '%d år'
	},
	ordinalParse: /\d{1,2}\./,
	ordinal : '%d.',
	week : {
		dow : 1, // Monday is the first day of the week.
		doy : 4  // The week that contains Jan 4th is the first week of the year.
	}
});
