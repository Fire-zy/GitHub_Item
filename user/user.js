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
},
	methods:{
		onFollowersClick(followers){
			window.location.href='../follow/followers.html?followers=' + followers
		},
		onFollowingClick(following){
			window.location.href='../follow/following.html?following=' + following
		},
		onEventsClick(login){
			window.location.href='../events/events.html?login=' + login
		},
		onstarredClick(login){
			window.location.href='../starred/starred.html?login=' + login
		},
		onRepoClick(login){
			window.location.href='../repo/repo.html?login=' + login
		}
	}
})