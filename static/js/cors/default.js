/*window.onload=function(){
	console.log('Hello! Default here.');
};*/

function getContent() {
	var files = {
				pdf_en:"space_odyssey_2010.pdf",
				html_en:"text.html",
				txt_en:"2001OdysseyOne.txt",
				txt_ru:"space_odyssey_3001.txt",
				jpg:"cazbecus.jpg"
			},
			container = document.getElementById('content'),
			progress = document.getElementById('progress'),
			progressRatio =document.getElementById('ratio'),
			xhr = new XMLHttpRequest(),
			url = 'https://raw.githubusercontent.com/srgg6701/HTML5-Bootstrap-Jade-Angular/master/static/contents/' + files.html_en;
	progress.style.visibility="visible";
	progressRatio.style.width='0';
	container.textContent='';
	container.innerHTML='';
	container.innerText="loading...";
	/**/
	xhr.open("GET", url, true);
	xhr.onload=function () {
		container.innerHTML=xhr.responseText;
		progress.style.visibility="hidden";
	};
	xhr.onprogress = function(e) {
		console.dir([xhr,e]); //console.log('leaded: '+e.loaded+', total: '+ e.total);
		var ratio = (e.loaded / 3969837 * 100).toFixed();/*e.total;*/
		progressRatio.style.width=ratio + '%';
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
