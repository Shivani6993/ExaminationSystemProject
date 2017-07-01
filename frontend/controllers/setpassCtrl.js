angular.module('examinationSystem')

.controller('setpassCtrl' , function($scope,$http,$state){

	$http({
		method:'POST',
		url:'/setpwd'
	})
	.then(function(response){
    
		$state.go('setPwd-state');
	})
})