app.service('loginService' , function(){
	return{
	user : {},
    setUser : function(data){
    	this.user = data;


},

	getuser : function(){
		return this.user
	 }
	}
})
