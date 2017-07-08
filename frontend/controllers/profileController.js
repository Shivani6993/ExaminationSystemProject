angular.module('examinationSystem')

.controller('profileController' , function($scope,$http,$state){


	console.log('loggedin successfully' , $state.params);

	$scope.student = $state.params.xyz;


	$scope.name = $state.params.xyz.name;
	$scope.mail = $state.params.xyz.mail



	$scope.startTest = function(){
	$http({
		method:'GET',
		url:'/StartTest'
		
	})
	.then(function(response){
		console.log(">>>>>> response data",response.data)
		$state.go('StartTest-state' , {test : response.data});
	})
}

})