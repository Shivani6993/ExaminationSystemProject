angular.module('examinationSystem')

.controller('testController' , function($q , $scope,$http,$state){

    var requests = [];
	$scope.result = 0;
	$scope.incorrectans=0;
	

	$http({
		method:'GET',
		url:'/StartTest'
		
	})
	.then(function(response){
		$scope.Ques = response.data;
		$scope.que = response.data[$state.params.index];
            console.log("result obj " , $state.params.resultObj);
			if($state.params.resultObj.hasOwnProperty($scope.que.question)){
				$scope.que.radioValue = $state.params.resultObj[$scope.que.question]
			}
	})




   $scope.next = function(){
   
   	$state.go('StartTest-state' , {index:$state.params.index + 1 , resultObj : $state.params.resultObj})
   	console.log(">>>>>> que"  ,$scope.que , $scope.que.radioValue);
   	$state.params.resultObj[$scope.que.question] = $scope.que.radioValue ;

   }

   $scope.previous = function(){
   	
   	$state.go('StartTest-state' , {index:$state.params.index - 1 , resultObj : $state.params.resultObj});
   	$state.params.resultObj[$scope.que.question] = $scope.que.radioValue ;
   }


	function calculateResult(Answers1){
		console.log("inside function" , Answers1);


		console.log(">>>>>> ques " , $scope.Ques);

		Answers1.forEach(function(ans){

			$scope.Ques.forEach(function(que){


			

		
			   var deferred = $q.defer();
			   requests.push(deferred);





				if(que.question==ans.question && que.radioValue == ans.Answer){
                     $scope.result = $scope.result + 1 ;
                     console.log('inside loop')
				}
				else if(que.question==ans.question && que.radioValue !=ans.Answer){
					$scope.incorrectans= $scope.incorrectans + 1;
					console.log('incorrect answer' , typeof $scope.incorrectans )
				}

				


			})

			

		})


	}


$scope.finishTest=function(){

$scope.showbtn=false;

$http({
		mehtod:'GET',
		url:'/sendResult'
	}).then(function(response){
		console.log("answers are" ,  response.data);
		var Answers=response.data;
		console.log(">>>>",Answers);


		calculateResult(Answers);
		$q.all(requests).then(function(){
					console.log($scope.result,"//");
			    	console.log($scope.incorrectans);
			});

		},function(error){})




   }

   $scope.select =  function(index){
   	console.log(">>>>>>>" , index )
   }

   	

})
