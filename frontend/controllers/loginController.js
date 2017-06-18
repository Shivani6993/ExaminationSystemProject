angular.module('examinationSystem')

.controller('loginController' , function($scope,$http){

$scope.showLoader = false;


$scope.login = function(){
	$scope.showLoader = true;
	$http({
		method:'POST',
		url:'/SignIn',
		params:{
			name : $scope.name,
			password : $scope.pass
		}
	})
	.then(function(response){
     $scope.showLoader = false;
	})
}




})