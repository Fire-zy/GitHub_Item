var followers=new Vue({
	el:'.followers',
	data:{
		items:[]
	}, 
	created:function(){
		var search = location.search
		var followers;
    	if (search) {
			followers = search.split('=')[1]
    	}
		var self=this;
		fetch('https://api.github.com/users/'+followers+'/followers')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.items=myJson;
		});
	},
	methods:{
		onFollowersClick(login){
			window.location.href='../user/user.html?login=' + login
		}
	}
})

