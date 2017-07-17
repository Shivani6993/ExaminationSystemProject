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
			templateUrl:'profile.html',
			params:{
				xyz :null
			},
			controller:'profileController'
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
		.state('StartTest-state',{
			url:'/startTest',
			templateUrl:'StartTest.html',
			params:{
				test :null,
				index : 0 ,
				resultObj : {}
			},
			controller:'testController'
		})

})

.run(function(){
	console.log(">>>>>>> checking local storge" , localStorage)
	console.log(">>>>>>>>>>>>>>>>>" , document.cookie)
})
