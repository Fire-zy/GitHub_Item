var followers=new Vue({
	el:'.following',
	data:{
		items:[]
	},
	created:function(){
		var search=location.search;
		var following;
		if(search){
			following=search.split('=')[1]
		}
		var self=this;
		fetch('https://api.github.com/users/'+following+'/following')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.items=myJson;
		});
	},
	methods:{
		onFollowingClick(login){
			window.location.href='../user/user.html?login=' +login
		}
	}
})