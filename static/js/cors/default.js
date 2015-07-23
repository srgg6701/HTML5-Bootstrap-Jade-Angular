/*window.onload=function(){
	console.log('Hello! Default here.');
};*/

function getContent() {
	var container = document.getElementById('content'),
			progress = document.getElementById('progress'),
			xhr = new XMLHttpRequest(),
			url = 'https://raw.githubusercontent.com/srgg6701/HTML5-Bootstrap-Jade-Angular/master/static/contents/cazbecus.jpg';////space_odyssey_3001.txt
	progress.style.visibility="visible";
	container.textContent='';
	container.innerText="loading...";
	/**/
	xhr.open("GET", url, true);
	xhr.onload=function () {
		container.textContent=xhr.responseText;
		progress.style.visibility="hidden";
	};
	xhr.onprogress = function(e) {
		console.dir([xhr,e]); //console.log('leaded: '+e.loaded+', total: '+ e.total);
		var ratio = (e.loaded / 3969837 * 100).toFixed();/*e.total;*/
		document.getElementById('ratio').style.width=ratio + '%';
			//.innerHTML=ratio + "% downloaded";
	};
	xhr.send(null);
}

/*
 Level 1
 xhr.onreadystatechange = function() {
 if(xhr.readyState==4){
 if(xhr.status==200){
 console.log("Content is loaded!");
 container.textContent=xhr.responseText;
 }
 }
 };*/
