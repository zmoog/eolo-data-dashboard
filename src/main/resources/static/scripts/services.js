(function() {

	angular.module('eolo')

		.factory('QuotaService', ['$http', function($http) {
			return {
				get: function() {
					return $http.get('https://care.ngi.it/ws/ws.asp?a=get.quota');
				}
			};
		}]);

})();
