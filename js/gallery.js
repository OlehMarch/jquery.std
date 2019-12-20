$(document).ready(function() {

$('#small a').click(function(eventObject) {
    $('#big img').hide().attr('src', $(this).attr('href'));
    $('#big img').load(function() {
        $(this).fadeIn(2000);
    });
    return false;
});

var galHide = $('#gallery');
    $("button.form_hide").click(function () {
    galHide.toggle(1500);
});

$('#small a img').click(function() {
    $('#small a img').fadeTo(500, 1);
    $(this).fadeTo(500, 0.6);
});

});  // конец ready