angular.module('examinationSystem')

.controller('testController' , function($scope,$http,$state){


	console.log('start Test' , $state.params);
	

	$scope.Ques = $state.params.test
	





})