angular.module('examinationSystem')

.controller('aloginController' , function($scope,$http,$state){




$scope.login = function(){
	$http({
		method:'GET',
		url:'/sin',
		params:{
			uname : $scope.uname,
			password : $scope.password
		}
	})
	.then(function(response){
		console.log(">>>>>>response data",response.data)
		alert("logged  In succesfully");
		$state.go('admin');
	})
}


})