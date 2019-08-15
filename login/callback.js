var callback=new Vue({
	el:'#callback',
	data:{},
	created:function(){
		//获取code
		var search = location.search
		var code;
		if (search) {
			code = search.split('=')[1]
		}
		console.log(code);
		fetch('https://github.com/login/oauth/access_token?client_id=4af3400d61f2ba9c28f3&client_secret=0fe13b886ca7eec531a8a9ea57fe6e18ddc9b380&code='+code,
		{
			method: 'POST',
			mode:'no-cors',
			body: JSON.stringify(),
			headers: {"Content-type": "application/json"}
		})
		.then(response => response.json())
		.then(json => console.log(json))	
	}
})