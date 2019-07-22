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
			window.location.href = "http://127.0.0.1:8020/GitHub_Item/Version_Libraries.html?__hbt=1563779701771";
		}
	}
})
