//user
var user=new Vue({
	el:'.update',
	data:{
		item:{}
	},
	created:function(){
		var search = location.search
		var login;
    	if (search) {
			login = search.split('=')[1]
    	}
		var self=this;
		fetch('https://api.github.com/users/'+login)
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.item=myJson;
		});
},
	methods:{
		onFollowersClick(followers){
			window.location.href='../follow/followers.html?followers=' + followers
		},
		onFollowingClick(following){
			window.location.href='../follow/following.html?following=' + following
		},
		onRepoClick(login){
			window.location.href='../repo/repo.html?login=' + login
		}
	}
})
var user=new Vue({
	el:'.header',
	data:{
		item:{}
	},
	created:function(){
		var search = location.search
		var login;
    	if (search) {
			login = search.split('=')[1]
    	}
		var self=this;
		fetch('https://api.github.com/users/'+login)
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.item=myJson;
		});
	}
})
//user结束


//events开始
var events=new Vue({
	el:'.eventsList',
	data:{
		events:[]
	},
	created:function(){
		var search=location.search;
		var login;
		if(search){
			login=search.split('=')[1]
		}
		var self=this;
		fetch('https://api.github.com/users/'+login+'/events')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.events=myJson;
		});
	}
})
//events结束
//starred开始
var starred=new Vue({
	el:'.starred',
	data:{
		starreds:[]
	},
	created:function(){
		var search = location.search
		var login;
    	if (search) {
			login = search.split('=')[1]
    	}
		var self=this;
		fetch('https://api.github.com/users/'+login+'/starred')
		.then(function(response){
			return response.json();
		})
		.then(function(myJson){
			self.starreds=myJson;
		});
	}
})
//starred结束
//tab开始
var imgbox=document.getElementsByClassName("img_box");
//console.log(imgbox);
var tabbox=document.getElementsByClassName("tab_box");
//console.log(tabbox);
tabbox[0].style.display="block";
tabbox[1].style.display="none";
tabbox[2].style.display="none";
document.getElementById("im0").src="../img/people_pic2.png";
for(var i=0;i<imgbox.length;i++){
	imgbox[i].onclick=function(){
		doTabs(this);
	}
}
function doTabs(obj){
	if(imgbox[0]==obj){
		document.getElementById("im0").src="../img/people_pic2.png";
		document.getElementById("im1").src="../img/activity_pic1.png";
		document.getElementById("im2").src="../img/star_pic1.png";
		tabbox[0].style.display="block";
		tabbox[1].style.display="none";
		tabbox[2].style.display="none";
	}else if(imgbox[1]==obj){
		document.getElementById("im0").src="../img/people_pic1.png";
		document.getElementById("im1").src="../img/activity_pic2.png";
		document.getElementById("im2").src="../img/star_pic1.png";
		tabbox[1].style.display="block";
		tabbox[0].style.display="none";
		tabbox[2].style.display="none";
	}else if(imgbox[2]==obj){
		document.getElementById("im0").src="../img/people_pic1.png";
		document.getElementById("im1").src="../img/activity_pic1.png";
		document.getElementById("im2").src="../img/star_pic2.png";
		tabbox[2].style.display="block";
		tabbox[0].style.display="none";
		tabbox[1].style.display="none";
	}
}
//tab结束








