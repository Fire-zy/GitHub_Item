var libraries=new Vue({
	el:'#libraries',
	data:{
		item:{},

	},
	created:function(){
		var search = location.search
		console.log(search) //?name=Fire-zy/Curriculum-Design
		var name;
    if (search) {
			name = search.split('=')[1] //Fire-zy/Curriculum-Design
    }
		var self=this;
		// fetch('https://api.github.com/repos/Fire-zy/Curriculum-Design')
		fetch('https://api.github.com/repos/'+name)
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.item=myJson;
		});
	}
})
