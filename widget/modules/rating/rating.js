"use strict";

// Rating module: manages the panel which shows the scores overview

angular.module('widget.rating', ['widget.review'])
	.controller('RatingController', ['$scope', 'ReviewFactory', RatingController])
	.directive('scorePanel', ScorePanelDirective);

function RatingController($scope, ReviewFactory) {

	var vm = this;

	init();

	function init() {

		vm.count = ReviewFactory.getScores().count;
		vm.average = ReviewFactory.getScores().average;
		vm.stars = ReviewFactory.getScores().stars;
		vm.hasReviews = false;

		// subscribes to review factory to update scores and counts
		$scope.$watch(ReviewFactory.getScores,
    		function(newValue, oldValue) {
				vm.count = newValue.count;
				vm.hasReviews = vm.count > 0;
				vm.average = newValue.average;
				vm.stars = newValue.stars;
    		}, true // true compares values instead of reference
    	);
	}

	vm.brandLogoSrc = WIDGET_CONF.IMG_BRAND_HEADER;

	vm.scoreImgSrc = function(score) {
		return utils.getImgFromScore(score);
	}

	vm.setProgressBar = function(percentage) {
		return utils.setBarFromProgress(percentage);
	}

	vm.setBarColor = function(index){
		return STYLE_CONF.PROGRESS_BAR_COLOR + index;
	}	

}

function ScorePanelDirective() {
  return {
    templateUrl: 'widget/modules/rating/score-panel.html'
  };	
}