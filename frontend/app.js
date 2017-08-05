angular.module('examinationSystem',['ui.router'])

.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'home.html',
			controller:'homectrl'
		})

		.state('home.login-state',{
			url:'/login',
			templateUrl:'login.html',
			controller:'loginController'
		})


		.state('home.signUp-state',{
			url:'/signUp',
			templateUrl:'signup.html',
			controller:'signupController'
		})

		.state('addQues-state',{
			url:'/addQues',
			templateUrl:'addQuestion.html',
			controller:'QuestionController'
		})

		.state('ScheduleExam-state',{
			url:'/scheduleExam',
			templateUrl:'ScheduleExam.html',
			controller:'scheduleController'
		})


		.state('profile-state',{
			url:'/profile',
			templateUrl:'profile.html',
			params:{
				xyz :null
			},
			controller:'profileController'
		})


		.state('contact-state',{
			url:'/contactUs',
			templateUrl:'contactUs.html'
		})


		.state('home.ForgetPwd-state',{
			url:'/forgetPwd',
			templateUrl:'forgetpass.html',
			controller:'forgetController'
		})

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
