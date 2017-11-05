angular.module('examinationSystem')

.controller('profileController' , function($scope,$http,$state,loginService){


	//loginService.get();
	console.log('loggedin successfully' , loginService.getuser() );

	$scope.student = loginService.getuser();


	$scope.name = loginService.getuser().name;
	$scope.mail = loginService.getuser().mail;

	$scope.startTest = function(){


		$state.go('StartTest-state');
	
}

})