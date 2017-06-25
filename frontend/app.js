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


	$stateProvider
		.state('contact-state',{
			url:'/contactUs',
			templateUrl:'contactUs.html'
		})

	$stateProvider
		.state('ForgetPwd-state',{
			url:'/forgetPwd',
			templateUrl:'forgetpass.html',
			controller:'forgetController'
		})

	$stateProvider
		.state('setpwd-state',{
			url:'/setpwd',
			templateUrl:'setpass.html'
		})

})
