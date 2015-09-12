(function() {

	angular.module('eolo')
		.filter('fromNow', function() {
			return function(date) {
				return moment(date).fromNow();
			};
		})

})();