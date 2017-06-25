angular.module('examinationSystem')

.controller('loginController' , function($scope,$http,$state){

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
		$state.go('profile-state');
	})
}

$scope.fp=function(){
	$state.go('ForgetPwd-state');
}




})