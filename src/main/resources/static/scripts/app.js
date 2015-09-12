(function() {

	/**
	 * eolo Module
	 *
	 * Description
	 */
	angular.module('eolo', ['ui.router'])

		.config(['$stateProvider', function($stateProvider) {

			$stateProvider
				.state('dashboard', {
					url: '/',
					templateUrl: 'partials/dashboard.html',
					controller: 'DashboardCtrl as ctrl'
				});

		}])

		.run(['$state', function($state) {
			$state.transitionTo('dashboard');
		}])

})();