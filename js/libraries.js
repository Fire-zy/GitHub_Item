var libraries=new Vue({
	el:'#libraries',
	data:{
		items:[]
	},
	created:function(){
		var self=this;
		fetch('https://api.github.com/repos/Fire-zy/Curriculum-Design')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.items=myJson;
		});
	}
})
