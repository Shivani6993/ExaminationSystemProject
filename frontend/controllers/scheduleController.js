angular.module('examinationSystem')

.controller('scheduleController' , function($scope,$http,$state){


$scope.schedule = function(){
	
	$http({
		method:'POST',
		url:'/scheduleExam',
		params:{
			Date:$scope.date,
			Course:$scope.course,
			Subject :$scope.subject
		
		
		}
	})
	.then(function(response){
		console.log("data inserted");
			$scope.date=null;
			$scope.course=null;
			$scope.subject=null;
			

	})
}




})