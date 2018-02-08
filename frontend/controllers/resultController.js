angular.module('examinationSystem')

.controller('resultCtrl' , function($scope,$http,$state){
   
	console.log('getting result' , $state.params.result)
	$scope.score = $state.params.result;
	//$scope.correct = $state.params.correctans;
	//$scope.incorrect = $state.params.incorrectans;




})