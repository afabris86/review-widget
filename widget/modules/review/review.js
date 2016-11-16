'use strict';

// Review module responsible for pushing and paging reviews into the widget 

angular.module('widget.review', [])
	.controller('ReviewController', ['$scope', 'ReviewFactory', ReviewController])
	.factory('ReviewFactory', ['$http', ReviewFactory]);

function ReviewController($scope, ReviewFactory) {

	var vm = this;
	
	// scope properties

	vm.reviews = [];
	vm.topReviews = [];
	vm.chunkReviews = []; 	// [[{review},{review}],[],...,[]] source chunks to feed the pager 
	vm.limitedChunks = []; 	// reviews pushed by the pager, used in ng-repeat
	vm.feedChunk = feedChunk;

	// internal properties and methods

	var init = function() {

		return ReviewFactory.getReviews().then(
			function(result) {
				vm.reviews = result.data.reviews;
				return vm.reviews;
		}, function(error) {
				return vm.reviews;
		});
	}

	var pushAssets = function() {
		utils.lib.forEach(vm.reviews, function(o) {
			o.starImgPath = utils.getImgFromScore(parseInt(o.starRating));
			o.userImgPath = utils.getProfileImg(o.firstName, o.lastName);
		});
	}

	var setChunks = function() {

		return utils.lib.chunk(vm.reviews, WIDGET_CONF.WALL_COLUMNS);
	}

	var setLimitedChunks = function() {

		utils.lib.forEach(vm.chunkReviews, function(chunk) {
			vm.limitedChunks.push([chunk[0]]);
		});

	}

	// review pager
	var feedChunk = function(index) {
		
		var lastIndex = vm.limitedChunks[index].length - 1; // index of chunk (chunk === column index)

		var srcChunk = vm.chunkReviews[index]; 
		
		var review = srcChunk[lastIndex + REVIEW_CONF.ITEMS_TO_DISPLAY]; // get new review to push
		
		if (review){ // still reviews? push
			vm.limitedChunks[index].push(review);			
		}
		
	}

	// Initialization routine

	init().then(function(){
		
		pushAssets();

		vm.chunkReviews = setChunks();

		setLimitedChunks();

		vm.topReviews = ReviewFactory.getHeadlineReviews(vm.reviews);
		
		ReviewFactory.setScores(vm.reviews);

		vm.feedChunk = feedChunk;

	});
	

}

function ReviewFactory($http) {

	var orderedReviews = [];
	var sideReviews = [];
	var countPerStar = [];
	var star = {};

	var scores = {
		count 	: 0,
		average : 0,
		stars 	: []
	};

	var service = {
		getReviews 			: getReviews,
		getHeadlineReviews 	: getHeadlineReviews,
		setScores 			: setScores,
		getScores 			: getScores
	};

	return service;

	function getReviews() {
		return $http.get(WIDGET_CONF.END_POINTS.REVIEWS);
	}

	function getHeadlineReviews(reviews) {

		orderedReviews = utils.lib.orderBy(reviews, [REVIEW_CONF.PROPERTIES.RATING], [WIDGET_CONF.SORT_ORDER]); // []

		return utils.lib.take(orderedReviews, WIDGET_CONF.HEADLINE_REVIEWS_N);
	}

	function setScores(reviews) {

		scores.stars = [];

		scores.count = utils.countReviews(reviews);

		scores.average = utils.countAverageFromReviews(reviews);
		
		countPerStar = utils.countStarsByReview(reviews);

		utils.lib.forEach(countPerStar, function(count) {

			star = {};
			star.count = count;
			star.percent =  utils.getStarPercentage(star.count, scores.count);

			scores.stars.push(star);
			
		});	
		
	}

	function getScores() {
		return scores;
	}
}