angular.module('examinationSystem')

.controller('QuestionController' , function($scope,$http,$state){


$scope.addQuestions = function(){
	
	$http({
		method:'POST',
		url:'/AddQuestion',
		params:{
			subject :$scope.subject,
			question :$scope.question,
			Option1 :$scope.option1,
			Option2 :$scope.option2,
			Option3 :$scope.option3,
			Option4 :$scope.option4,
			Answer:$scope.answer
		}
	})
	.then(function(response){
		console.log("data inserted");
			$scope.subject=null;
			$scope.question=null;
			$scope.option1=null;
			$scope.option2=null;
			$scope.option3=null;
			$scope.option4=null;
			$scope.answer=null;

	})
}




})