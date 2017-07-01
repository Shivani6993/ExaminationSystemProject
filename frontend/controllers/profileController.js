angular.module('examinationSystem')

.controller('profileController' , function($scope,$http,$state){


	console.log('loggedin successfully' , $state.params);

	$scope.student = $state.params.xyz;


	$scope.name = $state.params.xyz.name;
	$scope.mail = $state.params.xyz.mail

})