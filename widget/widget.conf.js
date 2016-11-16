// Widget configuration
"use strict";

var WIDGET_CONF = (function() {

	// base
	const STATIC_BASE 	= "static";
	const DATA_BASE 	= "data";
	const IMG_BASE 		= "img";

	// files
	const FILE_SEP = "-";
	const REVIEWS_FILE 		= "reviews.json";
	const SCORE_IMG_SIZE 	= "260x48";
	const SCORE_IMG_EXT 	= ".png";
	const USER_IMG_EXT 		= ".png";

	// end points
	const END_POINTS = {
		IMG 	: IMG_BASE + "/",
		REVIEWS : DATA_BASE + "/" + REVIEWS_FILE
	};

	// business
	const SHOWCASE_TOP = true;
	const WALL_COLUMNS = 6;
	const HEADLINE_REVIEWS_N = 3;
	const SIDE_REVIEWS_N = 2;
	const IMG_BRAND_HEADER	= END_POINTS.IMG + "";

	const STR_ODER_DESC = 'desc';
	const STR_ODER_ASC = 'asc';

	const SORT_ORDER = SHOWCASE_TOP ? STR_ODER_DESC : STR_ODER_ASC;


	return {
		IMG_BRAND_HEADER	: IMG_BRAND_HEADER,
		SORT_ORDER			: SORT_ORDER,
		WALL_COLUMNS		: WALL_COLUMNS,
		HEADLINE_REVIEWS_N 	: HEADLINE_REVIEWS_N,
		SIDE_REVIEWS_N 		: SIDE_REVIEWS_N,
		SCORE_IMG_SIZE		: SCORE_IMG_SIZE,
		SCORE_IMG_EXT		: SCORE_IMG_EXT,
		USER_IMG_EXT		: USER_IMG_EXT,
		FILE_SEP			: FILE_SEP,
		END_POINTS			: END_POINTS,
		SHOWCASE_TOP 		: SHOWCASE_TOP
	}

})();

//Review configuration
var REVIEW_CONF = (function() {

	const RATINGS = {
		STAR_1 : "1",
		STAR_2 : "2",
		STAR_3 : "3",
		STAR_4 : "4",
		STAR_5 : "5"
	}

	const PROPERTIES = {
		AUTHOR_NAME 	: "firstName",
		AUTHOR_LASTNAME : "lastName",
		AUTHOR_FULLNAME : "fullName",
		AUTHOR_LOCATION : "location",
		TITLE	: "reviewTitle",
		BODY	: "reviewBody",
		RATING 	: "starRating"
	}

	const ITEMS_TO_DISPLAY = 1;

	return {
		ITEMS_TO_DISPLAY	: ITEMS_TO_DISPLAY,
		RATINGS				: RATINGS,
		PROPERTIES 			: PROPERTIES
	}

})();

// Style configuration

var STYLE_CONF = (function() {

	const PROGRESS_BAR_COLOR = 'progress-bar progress-bar-star-';

	return {
		PROGRESS_BAR_COLOR : PROGRESS_BAR_COLOR
	}


})();
