angular.module('examinationSystem')

.controller('courseController' , function($scope,$http,$state){


$scope.addCourse = function(){
	
	$http({
		method:'POST',
		url:'/AddCourse',
		params:{
			course:$scope.course
		}
	})
	.then(function(response){
		console.log("data inserted");
		alert("data inserted successfully");
			$scope.course=null;


	})
}
})