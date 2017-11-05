var app = angular.module('examinationSystem',['ui.router'])

.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'home.html',
			controller:'homectrl'
		})

		.state('admin',{
			url:'/admindashboard',
			templateUrl:'AdminDashboard.html'
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

		.state('admin.addQues-state',{
			url:'/addQues',
			templateUrl:'addQuestion.html',
			controller:'QuestionController'
		})

		.state('admin.ScheduleExam-state',{
			url:'/scheduleExam',
			templateUrl:'ScheduleExam.html',
			controller:'scheduleController'
		})

		.state('admin.course-state',{
			url:'/AddCourse',
			templateUrl:'AddCourse.html',
			controller:'courseController'
		})

		.state('admin.subject-state',{
			url:'/AddSubject',
			templateUrl:'AddSubject.html',
			controller:'subController'
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

		.state('about-state',{
			url:'/AboutUs',
			templateUrl:'AboutUs.html'
		})

		.state('result-state',{
			url:'/getresult',
			templateUrl:'GetResult.html',
			params:{
				result:null
			},
			controller:'resultCtrl'
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



