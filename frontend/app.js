angular.module('examinationSystem',['ui.router'])

.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'home.html',
			controller:'homectrl'
		})

	$stateProvider
		.state('home.login-state',{
			url:'/login',
			templateUrl:'login.html',
			controller:'loginController'
		})


	$stateProvider
		.state('home.signUp-state',{
			url:'/signUp',
			templateUrl:'signup.html',
			controller:'signupController'
		})

	$stateProvider
		.state('addQues-state',{
			url:'/addQues',
			templateUrl:'addQuestion.html',
			controller:'QuestionController'
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

		.state('StartTest-state.nested1',{
			url:'/nestedstates',
			templateUrl:'nested1.html',
			controller: function(){
				console.log("this is the nested state which is loaded");
			}
		})

		.state('StartTest-state.nested2',{
			url:'/nestedstates2',
			templateUrl:'nested2.html',
			controller: function(){
				console.log("this is the nested state >>>>>>>>>>>>>> which is loaded");
			}
		})




	$stateProvider
		.state('contact-state',{
			url:'/contactUs',
			templateUrl:'contactUs.html'
		})

	$stateProvider
		.state('home.ForgetPwd-state',{
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
