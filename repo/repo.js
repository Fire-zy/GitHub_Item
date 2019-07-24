//列表
var datalist = new Vue({
  el: '#data-list',
  data: {
    items: []
  }, 
  created:function(){
  	var self=this;
  	fetch('https://api.github.com/users/Fire-zy/repos')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.items = myJson;
		});		
	},
	methods:{
		onRepoClick(name){
			window.location.href = './repos.html?name=' + name
		},
		onUserClick(login){
			window.location.href = '../user/user.html?longin=' + login
		}
	}
})
