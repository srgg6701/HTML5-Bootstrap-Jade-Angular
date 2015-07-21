/*window.onload=function(){
	console.log('Hello! Default here.');
};*/

function getContent() {
	var container = document.getElementById('content'),
			progress = document.getElementById('progress'),
			xhr = new XMLHttpRequest(),
			url = 'https://raw.githubusercontent.com/srgg6701/HTML5-Bootstrap-Jade-Angular/master/static/contents/space_odyssey_3001.txt';
	container.innerText="loading...";
	/**/
	xhr.open("GET", url, true);
	xhr.onload=function () {
		container.textContent=xhr.responseText;
		progress.innerHTML='';
	};
	xhr.onprogress = function(e) {
		//console.dir(e); //console.log('leaded: '+e.loaded+', total: '+ e.total);
		var ratio = (e.loaded / e.total).toFixed();/*661642 * 100;*/
		progress.innerHTML=ratio + "% downloaded";
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
