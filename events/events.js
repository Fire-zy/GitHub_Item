var events=new Vue({
	el:'.events',
	data:{
		items:[]
	},
	created:function(){
		var search=location.search;
		var login;
		if(search){
			login=search.split('=')[1]
		}
		var self=this;
		fetch('https://api.github.com/users/'+login+'/events')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.items=myJson;
		});
	}
})