angular.module('examinationSystem')



.controller('loginController' , function($scope,$http,$state,loginService){

console.log("????????????",loginService.getuser());
	

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
    	loginService.setUser(response.data);
		$state.go('profile-state' , {xyz : response.data});
		alert('Logged in successfully');
		$scope.isLoggedIn = true;
		var elem = document.getElementById('adminid');
		elem.style.display = 'none';
	})
}

$scope.fp=function(){
	$state.go('home.ForgetPwd-state');
}

})

