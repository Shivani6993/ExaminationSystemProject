angular.module('examinationSystem')

.controller('subController' , function($scope,$http,$state){

$http({
		method:'GET',
		url:'/selectCourse'
		
	})
	.then(function(response){
        var arr =[];
        response.data.forEach(function(each){
        	arr.push(each.course);
        })
        console.log(">>> courses" , arr)
        $scope.selectedCourse = arr
	})






$scope.addSubject = function(){
	
	$http({
		method:'POST',
		url:'/AddSubject',
		params:{
			course:$scope.selected,
			sub:$scope.subject
		}
	})
	.then(function(response){
		console.log("data inserted");
		alert("data inserted successfully");
			$scope.course=null;
			$scope.subject=null;


	})
}
})