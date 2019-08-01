var search=location.search;
var login;
var name;
if(search){
	login = search.split('login=')[1].split('&')[0];	
	console.log(login);
	name=search.split('name=')[1].split('&')[0];
	console.log(name);
//	name = search.split('name=')[1].split('&')[0];
}

let page=1;
let isLoading=false;
window.addEventListener("scroll",function(){
	var scrollTop = document.documentElement.scrollTop;
	var scrollHeight = document.body.scrollHeight;
	var clientHeight  = document.documentElement.clientHeight; //浏览器高度	
	
	if (scrollTop + clientHeight > scrollHeight - 30) {
		page+=1;
		getAllData(page);
	}
})
getAllData(1)
function getAllData(page){
	if(isLoading) return;
	isLoading=true;

	fetch('https://api.github.com/repos/'+login+'/'+name+'/issues?page='+page)
	.then(function(response){
		return response.json();
	})
	.then(function(myJson){
		let content='';
		for(let repo of myJson){
			`<img :src=${repo.avatar_url}`;
			content+=`<li>
				<div class="img_box">
					<img src=${repo.user.avatar_url} />
				</div>
				<div class="content_box">
					<div>
						<p class="login">
							${repo.user.login}				
						</p>
					</div>	
					<p class="title">${repo.title}</P>								
					<div>
						<span>
							#${repo.number}
						</span>
						<span class="comments">
						<img src="../img/message.png" />
							${repo.comments}
						</span>
					</div>	
				</div>
			</li>`
		}
		let documentFragment=document.createElement("div");
		documentFragment.innerHTML=content;
		document.querySelector('.repos').appendChild(documentFragment);
		isLoading=false;
	});


}