//列表
var datalist = new Vue({
  el: '#data-list',
  data: {
    items: []
  },
  created:function(){
  	fetch('https://api.github.com/users/Fire-zy/repos')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			this.items = myJson;
		});	
			
  }
})