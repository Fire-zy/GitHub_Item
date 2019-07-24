var user=new Vue({
	el:'.user',
	data:{
		item:{}
	},
	created:function(){
//		var search=location.search;
//		var login;
//		if(search){
//			login=search.split('=')[1];
//		}
		var self=this;
		fetch('https://api.github.com/users/Fire-zy')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.item=myJson;
		});
	}
})