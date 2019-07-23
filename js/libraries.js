var libraries=new Vue({
	el:'.version_libraries',
	data:{
		item:{}
	},
	created:function(){
		var self=this;
		fetch('https://api.github.com/repos/Fire-zy/Curriculum-Design')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.item=myJson;
		});
	}
})
