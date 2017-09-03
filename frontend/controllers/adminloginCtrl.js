angular.module('examinationSystem')

.controller('aloginController' , function($scope,$http,$state){




$scope.login = function(){
	$http({
		method:'GET',
		url:'/sin',
		params:{
			uname : $scope.uname,
			pwd : $scope.pass
		}
	})
	.then(function(response){
		console.log(">>>>>>. response data",response.data)
		response.redirect('AdminDashboard.html');
	})
}


})