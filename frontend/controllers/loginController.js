angular.module('examinationSystem')

.controller('loginController' , function($scope,$http,$state){

//$scope.showLoader = false;


$scope.login = function(){
	//$scope.showLoader = true;
	$http({
		method:'GET',
		url:'/SignIn',
		params:{
			mail : $scope.mail,
			password : $scope.pass
		}
	})
	.then(function(response){
		console.log(">>>>>>. response data",response.data)
		document.cookie = "email=" + response.data.mail;
		console.log("cookie" , document.cookie)
    // $scope.showLoader = false;
		$state.go('profile-state' , {xyz : response.data});
	})
}

$scope.fp=function(){
	$state.go('home.ForgetPwd-state');
}




})