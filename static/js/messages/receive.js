window.addEventListener("message", loader, false);
function loader(e) {
    //console.dir(e);
    console.log('перенос: ' + e.data.indexOf('\n'));
    var mess = e.data.replace('\n', '<br>');
    document.getElementById('messages').innerHTML = mess;
}
