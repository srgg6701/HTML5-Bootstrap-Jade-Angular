function send(direction) {
    var message     = $('#messages-area-'+direction).val(),
        location    = window.location,
        transferList;
    console.log('message: '+message);
    if(direction=='inside'){
        transferList=location.protocol + "//" +location.host;
    }else if(direction=='outside'){
        transferList='*';
    }
    // #messages-box-[direction] ─ iframe
    $('#messages-box-'+direction)[0].contentWindow.postMessage(message, transferList);
}

