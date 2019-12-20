/*                      Примеры скриптов

$('#motoselect').change(function() {
    var myChoise = $('#motoselect :selected').val();
    if (myChoise == 1) {$('#daysSelect').html('<option value="1">1</option><option value="2">2</option>');}
    else if (myChoise == 2) {$('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>');}
    else if (myChoise == 3) {$('#daysSelect').html('<option value="1">1</option>');}
    else {$('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option>');}
});   - не работает



$('#my_form').submit(function(eventObject) {
    if($('#email').val == "") {
        eventObject.preventDefault();
        alert('Вы не заполнили поле E-Mail');
    }
});   - не работает



$('#email').focus(function() {$(this).addClass('onFocus');}).blur(function() {$(this).removeClass('onFocus')}); - подсветка выбраного поля ввода инфы



var checkingButton = $('#my_form').after('<input type="button" value="Проверить" class="form_hide" id="checkButton" />');
$("#checkButton").click(function () {
    alert($('#mytextarea').val());
});  - проверка полей формы



$(':checkbox').fadeOut(3000); - также можно прописать вместо checkbox radio, submit, reset, text, file, button, password, image и input - чтобы скрыть все инпуты;
 :checked(выбор отмеченых инпутов типа checkbox и radio);
 :selected(выбор выделеных инпутов);



$('#superlink').click(function(eventObject) {
    eventObject.preventDefault();
    $('#forresults').append('<p>Вместо перехода по ссылке мы добавили абзац.</p>');
});
                              - эти 2 скрипта эквивалентны друг другу
$('#superlink').click(function(eventObject) {
    $('#forresults').append('<p>Вместо перехода по ссылке мы добавили абзац.</p>');
    return false;
});



$('#div_for_img').click(function(eventObject) {
    alert('Координата щелчка по оси X: ' + eventObject.pageX)
}); После eventObject можно указывать screenX/Y, pageX/Y, alt/ctrl/shiftKey



var formHide = $('#my_form').before('<button class="form_hide" id="hide_form">Свернуть/развернуть форму</button>');
$("button").click(function () {
    formHide.toggle("slow");
});



$('#moto_table tr:not(#table_head)').hover(function(){
    $(this).addClass('svet');
}, function(){
    $(this).removeClass('svet');
});
                              - эти 2 скрипта эквивалентны друг другу
var tableStr = $('#moto_table tr:not(#table_head)');
tableStr.mouseover(function(){$(this).addClass('svet');});
tableStr.mouseout(function(){$(this).removeClass('svet');});



$('#div_for_img img').click(function(){
    var moto = $(this).clone();
    $('#forresults').append(moto);
});
*/

/*                      События, отслеживаемые браузером

mouseover - наведение мыши на обьект
mouseout - увод мыши с обьекта
click - клик мышью по обьекту
dbclick - двойной клик мышью по обьекту
mousemove - перемещение курсора мыши
mousedown - момент нажатия кнопки мыши
mouseup - момент отпускания кнопки мыши
submit - момент отправки формы обработчику
focus - момент получения фокуса обьектом (работает и для ссылок)
blur - момент потери фокуса обьектом (работает и для ссылок)
change - изменение обьекта формы
reset - сброс формы
keypress - нажатие клавиши на клавиатуре
keydown - момент нажатия клавиши, до момента отпускания
keyup - момент отпускания клавиши
load - полная загрузка страницы
resize - изменение размеров окна браузера
scroll - прокрутка страницы
upload - уход со страницы
*/

/*                      Автоматические циклы, выборка разнотипных элементов, выборка элемента при наличии атрибута

$('#div_for_img img').hide(3000); - автоматические циклы
$('img[width=200], a:contains(Yamaha FZ6)').fadeOut(4000); - выборка разнотипных элементов
$('img[alt]').fadeOut(4000); - выборка элемента при наличии атрибута
*/

/*                      Методы text(), hide(), show(), height(), width(), html(), fadeOut(), fadeIn(), fadeTo(), slideUp(), slideDown(), attr(),
                               removeAttr(), addClass(), removeClass(), css(), animate(), before(), after(), prepend(), append(), each(), size(),
                               get(), clone(), remove()

$('#main_h1').text('Текст, измененный с помощью jquery'); - замена текста методом text()
$('#forheader img').hide(3000).show(3000); - методы hide и show
$('#div_for_img').height(130).width(815); - методы узнавания/изменения значения высоты и ширины
$('#moto_models').html('<li><strong>Харлей Дэвидсон</strong></li><li>Кроссовый мото</li><li><strong>Гоночный мото</strong></li><li>Концептуальный мото</li>'); - получение и измененние html кода
$('#forheader img').fadeOut(3000).fadeIn(3000); - плавное рассеивание и появление методами fadeOut и fadeIn
$('#forheader img').fadeTo(3000,0.2).fadeTo(3000,1); - плавное рассеивание или появление за 3000 милисекунд до значения от 0 до 1
$('#forheader img').slideUp(3000).slideDown(3000); - плавный "уход" элемента вверх ил вниз
$('#moto_table').removeAttr('title').attr('title', 'Новое значение'); - методы удаления атрибутов и добавления/изменения
$('#div_for_img + p').addClass('new').removeClass('new'); - мотоды добавления и удаления класса

$('#main_h1').css({         - метод css, все что в фигурных скобках называют литералом
    'color':'#3f4078',
    'font-size':'25px'
});

$('#main_h1').css({
    'color':'#3f4078'
}).animate({                - метод animate
    'fontSize':'32px',
    'paddingLeft':'30px'
}, 5000, function() {
    alert("Ready!!!")
});

myDiv = $('#div_for_img').css({'border':'2px solid #cc0000'});
myDiv.before('<p>Данный абзац вставлен с помощью метода before()</p>');
myDiv.after('<p>Данный абзац вставлен с помощью метода after()</p>');
myDiv.prepend('<p>Данный абзац вставлен с помощью метода prepend()</p>');
myDiv.append('<p>Данный абзац вставлен с помощью метода append()</p>');

$('img').each(function() {
    if($(this).width() < 400) {
        $(this).fadeOut(3000);     - метод each(), понятие $(this)
    }
});

var myDiv = $('div').size(); - метод узнавания количества тегов div
var myDiv = $('div').get(0); - метод узнавания определенного тега среди остальных 

var myDiv = $('#div_for_img').clone(); - метод клонирования элементов
$('#my_form').after(myDiv);

var myForm = $('#my_form').remove(); - метод удаления элементов
$('#moto_table').before(myForm);
*/

/*                      Выражение "$();" эквивалентно выражению "jquery();"
$('p');
$('#main_h1');
$('.maindiv');
$('p strong'); - выборка вложеного тега
$('#main_h1 + p'); - выборка последующего тега p за тегом с идентификатором main_h1   
$('#div_for_img > img'); - выборка всех дочерних тегов img из тега с идентификатором div_for_img
$('img[width = 200]'); - выборка по атрибуту
$('a[href ^= http]'); - выборка по начальному содержанию атрибута
$('img[src $= .jpg]'); - выборка по конечному содержанию атрибута
$('img[src *= moto]'); - выборка всех тегов со значением в атрибуте
$('#moto_table tr:odd'); - фильтр позволяющий выбирать четные или нечетные элементы (odd - нечетные, even - четные), первый элемент как всегда нулевой
$('img:not(#div_for_img img)'); - фильтр позволяющий отбирать все теги кроме указаных в скобках
$('div:has(fieldset)'); - фильтр позволяющий отбирать тег имеющий внутри себя тег указаный в скобках
$('p:contains(мотоцикл)'); - фильтр позволяющий искать тег по его содержимому указаному в скобках
$('#div_for_img img:first'); - фильтр позволяющий выбирать первый или последний элемент блока (first - первый, last - последний)
$('div:hidden'); - фильтр позволяющий скрывать или делать видимым элемент (hidden - спрятать, visibility - сделать видимым);
*/