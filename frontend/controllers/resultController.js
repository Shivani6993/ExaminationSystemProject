angular.module('examinationSystem')

.controller('resultCtrl' , function($scope,$http,$state){
   
	console.log('getting result' , $state.params.result)
	$scope.score = $state.params.result;




})