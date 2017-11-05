angular.module('examinationSystem')

.controller('testController' , function($scope,$http,$state){

	//clock

	var clockInterval=setInterval(function(){


$scope.$apply(function(){
	updateWatch();
})

	},1000)




var updateWatch  = function(){
	if($scope.sec==0){

	$scope.sec=59;
	if($scope.min==0){
	$scope.min=59
	$scope.h=$scope.h-1

	}
	else
	$scope.min=$scope.min-1;
	}else{
	$scope.sec=$scope.sec-1}
	if($scope.min==0){
		$scope.h=$scope.h-1;
	$scope.min=59;
}
}

	

setTimeout(function(){clearInterval(clockInterval)},1800000);
console.log('start Test' , $state.params);
	
	$scope.Ques = $state.params.test
	$scope.h= 00
	$scope.min= 30
	$scope.sec= 00

//calculating result

    var requests = [];
    $scope.resultObj = {}
	$scope.result = 0;
	$scope.incorrectans=0;
	$scope.correctans=0;
	$scope.finalResult = {};
	var queno = 0;
	$scope.que;


	$scope.check = function(){
		console.log("this is clicked" , $scope.que.radioValue);
		$scope.resultObj[$scope.que.question] = $scope.que.radioValue;
		console.log("resultobj" , $scope.resultObj);
	}
	

	$http({
		method:'GET',
		url:'/StartTest'
		
	})
	.then(function(response){
		$scope.Ques = response.data;
		$scope.que = response.data[queno];
            console.log("result obj " , $state.params.resultObj);
			if($state.params.resultObj.hasOwnProperty($scope.que.question)){
				$scope.que.radioValue = $state.params.resultObj[$scope.que.question]
			}
	})


   $scope.next = function(){
   	queno++;
   	$scope.que = $scope.Ques[queno];

   }

   $scope.previous = function(){
   	 	queno--;
   	$scope.que = $scope.Ques[queno];
   }


	function calculateResult(Answers1){
		console.log("inside function" , Answers1);

		Answers1.forEach(function(ans){


			console.log(">>> this is each answer " , ans)

			if($scope.resultObj.hasOwnProperty(ans.question)){
				if($scope.resultObj[ans.question] == ans.Answer){
					$scope.result++;
				}

			}

			

		})


		console.log('your score is ' , $scope.result);
		$state.go('result-state' , {result : $scope.result});



	}


$scope.finishTest=function(){

console.log(">>> this is the submission" , $scope.resultObj);

$http({
		mehtod:'GET',
		url:'/sendResult'
	}).then(function(response){
		var Answers=response.data;


		calculateResult(Answers);

		 },function(error){})




   }

   $scope.select =  function(index){
   	console.log(">>>>>>>" , index )
   }

   	

})
