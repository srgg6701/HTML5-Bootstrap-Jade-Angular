$(function(){
    var block = 'section',messagesContainer = $('#messages-container');
    $('.glyphicon', messagesContainer).on('click', function(){
        var func, currentSection=$(this).parents(block).eq(0);
        currentSection.slideUp(200, function () {
            //console.dir([currentSection,currentSection.prev(),currentSection.next()]);
            if($(currentSection).next(block).length)
                func='next';
            else if ($(currentSection).prev(block).length)
                func='prev';
            $(currentSection)[func](block)
                .removeClass('hidden')
                .slideDown(200);

        });
    });
});