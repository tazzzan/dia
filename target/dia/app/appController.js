var dia = angular.module('dia');
 
dia.controller('AppCtrl', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {

	$rootScope.isLoggedIn = false;
	
	
	if ($rootScope.isLoggedIn) {
		alert("already logged in");
		
	} 
	else {
		$state.go('login.loginTab');
	}
	
	$scope.goToLogin = function () {
		$state.go('role.seekerAndVoter.start')
	}
	
}]);