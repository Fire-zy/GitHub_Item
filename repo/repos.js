var libraries=new Vue({
	el:'.version_libraries',
	data:{
		item:{}
	},
	created:function(){
		var search = location.search
		var name;
    	if (search) {
			name = search.split('=')[1]
    	}
		var self=this;
		fetch('https://api.github.com/repos/'+name)
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.item=myJson;
		});
	},
	methods:{
		onIssuesClick(login,name){
			window.location.href='../issues/issues.html?login=' + login +'&name=' +name
		}
	}
})
