angular.module('examinationSystem',['ui.router'])

.config(function($stateProvider){

	$stateProvider
		.state('login-state',{
			url:'/login',
			templateUrl:'login.html',
			controller:'loginController'
		})


	$stateProvider
		.state('signUp-state',{
			url:'/signUp',
			templateUrl:'signup.html',
			controller:'signupController'
		})

	$stateProvider
		.state('profile-state',{
			url:'/profile',
			templateUrl:'profile.html'
		})



})
