"use strict";

// Query module: shows the reviews according to filter criteria

angular.module('widget.query', [])
	.directive('widgetQuery', QueryDirective);

function QueryDirective() {

  	return {
    	templateUrl: 'widget/modules/query/query.html'
  	};

}