var user=new Vue({
	el:'.user',
	data:{
		item:{}
	},
	created:function(){
		var search = location.search
		var login;
    	if (search) {
			login = search.split('=')[1]
    	}
		var self=this;
		fetch('https://api.github.com/users/'+login)
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.item=myJson;
		});
	}	
})
var starred=new Vue({
	el:'.starred',
	data:{
		starreds:[]
	},
	created:function(){
		var search = location.search
		var login;
    	if (search) {
			login = search.split('=')[1]
    	}
		var self=this;
		fetch('https://api.github.com/users/'+login+'/starred')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.starreds=myJson;
		});
	}	
})