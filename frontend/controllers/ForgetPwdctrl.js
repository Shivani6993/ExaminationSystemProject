angular.module('examinationSystem')

.controller('forgetController',function($scope,$state,$http){

	$scope.sendMail=function(){
		console.log("clicked");

		$http({
			url:'Forget',
			method:'POST',
			params:{
				mail:$scope.mail
			}
					}).then(function(response){
			console.log(">>>>>response", $scope.mail);
			alert('Your Password has been mailed to your email Address ' + $scope.mail);

			
		})
	}

	
})
