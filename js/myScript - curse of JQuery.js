/*                      ������� ��������

$('#motoselect').change(function() {
    var myChoise = $('#motoselect :selected').val();
    if (myChoise == 1) {$('#daysSelect').html('<option value="1">1</option><option value="2">2</option>');}
    else if (myChoise == 2) {$('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>');}
    else if (myChoise == 3) {$('#daysSelect').html('<option value="1">1</option>');}
    else {$('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option>');}
});   - �� ��������



$('#my_form').submit(function(eventObject) {
    if($('#email').val == "") {
        eventObject.preventDefault();
        alert('�� �� ��������� ���� E-Mail');
    }
});   - �� ��������



$('#email').focus(function() {$(this).addClass('onFocus');}).blur(function() {$(this).removeClass('onFocus')}); - ��������� ��������� ���� ����� ����



var checkingButton = $('#my_form').after('<input type="button" value="���������" class="form_hide" id="checkButton" />');
$("#checkButton").click(function () {
    alert($('#mytextarea').val());
});  - �������� ����� �����



$(':checkbox').fadeOut(3000); - ����� ����� ��������� ������ checkbox radio, submit, reset, text, file, button, password, image � input - ����� ������ ��� ������;
 :checked(����� ��������� ������� ���� checkbox � radio);
 :selected(����� ��������� �������);



$('#superlink').click(function(eventObject) {
    eventObject.preventDefault();
    $('#forresults').append('<p>������ �������� �� ������ �� �������� �����.</p>');
});
                              - ��� 2 ������� ������������ ���� �����
$('#superlink').click(function(eventObject) {
    $('#forresults').append('<p>������ �������� �� ������ �� �������� �����.</p>');
    return false;
});



$('#div_for_img').click(function(eventObject) {
    alert('���������� ������ �� ��� X: ' + eventObject.pageX)
}); ����� eventObject ����� ��������� screenX/Y, pageX/Y, alt/ctrl/shiftKey



var formHide = $('#my_form').before('<button class="form_hide" id="hide_form">��������/���������� �����</button>');
$("button").click(function () {
    formHide.toggle("slow");
});



$('#moto_table tr:not(#table_head)').hover(function(){
    $(this).addClass('svet');
}, function(){
    $(this).removeClass('svet');
});
                              - ��� 2 ������� ������������ ���� �����
var tableStr = $('#moto_table tr:not(#table_head)');
tableStr.mouseover(function(){$(this).addClass('svet');});
tableStr.mouseout(function(){$(this).removeClass('svet');});



$('#div_for_img img').click(function(){
    var moto = $(this).clone();
    $('#forresults').append(moto);
});
*/

/*                      �������, ������������� ���������

mouseover - ��������� ���� �� ������
mouseout - ���� ���� � �������
click - ���� ����� �� �������
dbclick - ������� ���� ����� �� �������
mousemove - ����������� ������� ����
mousedown - ������ ������� ������ ����
mouseup - ������ ���������� ������ ����
submit - ������ �������� ����� �����������
focus - ������ ��������� ������ �������� (�������� � ��� ������)
blur - ������ ������ ������ �������� (�������� � ��� ������)
change - ��������� ������� �����
reset - ����� �����
keypress - ������� ������� �� ����������
keydown - ������ ������� �������, �� ������� ����������
keyup - ������ ���������� �������
load - ������ �������� ��������
resize - ��������� �������� ���� ��������
scroll - ��������� ��������
upload - ���� �� ��������
*/

/*                      �������������� �����, ������� ����������� ���������, ������� �������� ��� ������� ��������

$('#div_for_img img').hide(3000); - �������������� �����
$('img[width=200], a:contains(Yamaha FZ6)').fadeOut(4000); - ������� ����������� ���������
$('img[alt]').fadeOut(4000); - ������� �������� ��� ������� ��������
*/

/*                      ������ text(), hide(), show(), height(), width(), html(), fadeOut(), fadeIn(), fadeTo(), slideUp(), slideDown(), attr(),
                               removeAttr(), addClass(), removeClass(), css(), animate(), before(), after(), prepend(), append(), each(), size(),
                               get(), clone(), remove()

$('#main_h1').text('�����, ���������� � ������� jquery'); - ������ ������ ������� text()
$('#forheader img').hide(3000).show(3000); - ������ hide � show
$('#div_for_img').height(130).width(815); - ������ ���������/��������� �������� ������ � ������
$('#moto_models').html('<li><strong>������ ��������</strong></li><li>��������� ����</li><li><strong>�������� ����</strong></li><li>�������������� ����</li>'); - ��������� � ���������� html ����
$('#forheader img').fadeOut(3000).fadeIn(3000); - ������� ����������� � ��������� �������� fadeOut � fadeIn
$('#forheader img').fadeTo(3000,0.2).fadeTo(3000,1); - ������� ����������� ��� ��������� �� 3000 ���������� �� �������� �� 0 �� 1
$('#forheader img').slideUp(3000).slideDown(3000); - ������� "����" �������� ����� �� ����
$('#moto_table').removeAttr('title').attr('title', '����� ��������'); - ������ �������� ��������� � ����������/���������
$('#div_for_img + p').addClass('new').removeClass('new'); - ������ ���������� � �������� ������

$('#main_h1').css({         - ����� css, ��� ��� � �������� ������� �������� ���������
    'color':'#3f4078',
    'font-size':'25px'
});

$('#main_h1').css({
    'color':'#3f4078'
}).animate({                - ����� animate
    'fontSize':'32px',
    'paddingLeft':'30px'
}, 5000, function() {
    alert("Ready!!!")
});

myDiv = $('#div_for_img').css({'border':'2px solid #cc0000'});
myDiv.before('<p>������ ����� �������� � ������� ������ before()</p>');
myDiv.after('<p>������ ����� �������� � ������� ������ after()</p>');
myDiv.prepend('<p>������ ����� �������� � ������� ������ prepend()</p>');
myDiv.append('<p>������ ����� �������� � ������� ������ append()</p>');

$('img').each(function() {
    if($(this).width() < 400) {
        $(this).fadeOut(3000);     - ����� each(), ������� $(this)
    }
});

var myDiv = $('div').size(); - ����� ��������� ���������� ����� div
var myDiv = $('div').get(0); - ����� ��������� ������������� ���� ����� ��������� 

var myDiv = $('#div_for_img').clone(); - ����� ������������ ���������
$('#my_form').after(myDiv);

var myForm = $('#my_form').remove(); - ����� �������� ���������
$('#moto_table').before(myForm);
*/

/*                      ��������� "$();" ������������ ��������� "jquery();"
$('p');
$('#main_h1');
$('.maindiv');
$('p strong'); - ������� ��������� ����
$('#main_h1 + p'); - ������� ������������ ���� p �� ����� � ��������������� main_h1   
$('#div_for_img > img'); - ������� ���� �������� ����� img �� ���� � ��������������� div_for_img
$('img[width = 200]'); - ������� �� ��������
$('a[href ^= http]'); - ������� �� ���������� ���������� ��������
$('img[src $= .jpg]'); - ������� �� ��������� ���������� ��������
$('img[src *= moto]'); - ������� ���� ����� �� ��������� � ��������
$('#moto_table tr:odd'); - ������ ����������� �������� ������ ��� �������� �������� (odd - ��������, even - ������), ������ ������� ��� ������ �������
$('img:not(#div_for_img img)'); - ������ ����������� �������� ��� ���� ����� �������� � �������
$('div:has(fieldset)'); - ������ ����������� �������� ��� ������� ������ ���� ��� �������� � �������
$('p:contains(��������)'); - ������ ����������� ������ ��� �� ��� ����������� ��������� � �������
$('#div_for_img img:first'); - ������ ����������� �������� ������ ��� ��������� ������� ����� (first - ������, last - ���������)
$('div:hidden'); - ������ ����������� �������� ��� ������ ������� ������� (hidden - ��������, visibility - ������� �������);
*/