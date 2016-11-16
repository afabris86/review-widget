// Utility functions
"use strict";

var utils = (function() {

	/* Entry point for 3rd party functions used in the modules
	 * if you need to replace a 3d party function do it here
	 */
	const round 	= _.round; // _. lodash
	const size 		= _.size;
	const values 	= _.values;
	const meanBy	= _.meanBy;
	const countBy 	= _.countBy;
	const orderBy 	= _.orderBy;
	const forEach	= _.forEach;
	const chunk 	= _.chunk;
	const take		= _.take;
	const toLower 	= _.toLower;

	function countReviews(reviews) {
		return size(reviews);
	}

	function countAverageFromReviews(reviews) {
		return round(meanBy(reviews, function(o) { return parseInt(o.starRating); }));
	}

	function countStarsByReview(reviews) {
		return values((countBy(reviews, function(o) { return parseInt(o.starRating); })));
	}

	function getStarPercentage(starCount, totalCount) {
		return round((starCount / totalCount) * 100);
	}

	function setBarFromProgress(progress) {

		return { width : progress + '%' };
	}

	function getImgFromScore(score) {

		return 	WIDGET_CONF.END_POINTS.IMG
				+ score + WIDGET_CONF.FILE_SEP
				+ (score > 1 ? 'stars' : 'star') + WIDGET_CONF.FILE_SEP
				+ WIDGET_CONF.SCORE_IMG_SIZE
				+ WIDGET_CONF.SCORE_IMG_EXT;

	}

	function getProfileImg(firstName, lastName) {

		return 	WIDGET_CONF.END_POINTS.IMG
				+ toLower(firstName)
				+ WIDGET_CONF.FILE_SEP
				+ toLower(lastName)
				+ WIDGET_CONF.USER_IMG_EXT;

	}

	return {
		lib	: {
			round 	: round,
			size  	: size,
			values 	: values,
			meanBy 	: meanBy,
			countBy : countBy,
			forEach : forEach,
			chunk	: chunk,
			orderBy : orderBy,
			take	: take
		},
		getProfileImg			: getProfileImg,
		getImgFromScore			: getImgFromScore,
		countReviews 			: countReviews,
		countAverageFromReviews : countAverageFromReviews,
		countStarsByReview 		: countStarsByReview,
		getStarPercentage 		: getStarPercentage,
		setBarFromProgress		: setBarFromProgress
	}

})();