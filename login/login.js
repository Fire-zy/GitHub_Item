var login=new Vue({
	el:'.login',
	data:{
		
	},
	methods:{
		onLoginClick(){
			window.location.href='https://github.com/login/oauth/authorize?client_id=4af3400d61f2ba9c28f3&redirect_uri=http://localhost:8080/oauth/redirect'
		}		
	}
})

//var search = location.search
//var code;
//if (search) {
//	code = search.split('=')[1]
//}
//console.log(code);
//fetch('https://github.com/login/oauth/access_token?client_id=4af3400d61f2ba9c28f3&client_secret=0fe13b886ca7eec531a8a9ea57fe6e18ddc9b380&code='+code+'&redirect_uri=http://localhost:8080', {
//method: 'POST',
//body: JSON.stringify({
//}),
//headers: {
//"Content-type": "application/json; charset=UTF-8"
//}
//})
//.then(response => response.json())
//.then(json => console.log(json))