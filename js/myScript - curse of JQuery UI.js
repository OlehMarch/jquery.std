$(document).ready(function() {
    
/* начало календаря */
$( "#date" ).datepicker({
    changeMonth: true,
    changeYear: true
});

$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3C;Пред',
		nextText: 'След&#x3E;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
/* конец календаря */

/* начало слайдера */
$( "#slider-range" ).slider({
      range: true,
      min: 10,
      max: 1000,
      values: [ 175, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] + " km" );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " - " + $( "#slider-range" ).slider( "values", 1 ) + " km" );
/* конец слайдера */

/* начало окна диалога */
$( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
$( "#help" ).click(function() {
    $( "#dialog" ).dialog( "open" );
});
/* конец окна диалога */

/* начало button */
$( "input[type=submit], button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
/* конец button */

/* начало tabs */
$( "#tabs" ).tabs();
/* конец tabs */

/* начало accordion */
$( "#accordion" ).accordion();
/* конец accordion */

/* начало progressbar */
$( "#progressbar" ).progressbar({
      value: 0
    });

$('#opros :radio').change(function() {
    var chRadio = $('#opros :radio:checked').size();
    $( "#progressbar" ).progressbar({
        value: chRadio * 20
    });
    var questCount = $('#opros div :radio').size();
    $('#answerCount').text('Дано ответов ' + chRadio + ' из ' + questCount / 2);
});
/* конец progressbar */

/* начало autocomplete */
var availableTags = [
      "Днепропетровская",
      "Донецкая",
      "Киевсая",
      "Харьковсая",
      "Львовская",
      "Одесская",
      "Херсонская",
      "Все"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
/* конец autocomplete */

/* начало draggable и dropable - коректно не работает */
$('#bound #forHelmets img').draggable({
    containment: '#bound',
    revert: 'invalid',
    helper: 'clone',
    cursor: 'move'
});

var helmetsCount = 0;
var summa = 0;

$('#mycart').droppable({
            accept: '#forHelmets div img',
            activeClass: 'highlight',
            drop: function(event, ui) {
                helmetsCount++;
                if (helmetsCount > 0) {$('#myclear').show();}
                $('#helmetsCount strong').text(helmetsCount);
				var helmet = $(ui.draggable);
                summa += parseInt(helmet.attr('title'));
                $('#helmetsSumm strong').text(summa);
                helmet.fadeOut(200, function() {
                    $(this).appendTo('#mycart').fadeIn(1000).find('img').animate({
                        'width' : '90',
                        'height' : '80'
                    },2000);
                });
			}
		});


$('#forHelmets').droppable({
     accept: '#mycart div img',
     activeClass: 'highlight',
     drop: function(event, ui) {
                helmetsCount--;
                if (helmetsCount == 0) {$('#myclear').hide();}
                $('#helmetsCount strong').text(helmetsCount);
				var helmet2 = $(ui.draggable);
                summa -= parseInt(helmet2.attr('title'));
                $('#helmetsSumm strong').text(summa);
                helmet2.fadeOut(200, function() {
                    $(this).appendTo('#forHelmets').fadeIn(1000).find('img').animate({
                        'width' : '180',
                        'height' : '160'
                    },2000);
                });
			}
});
/* конец draggable и dropable */

//Сортировка

$("#sortable").sortable({
			placeholder: 'ui-state-highlight'
		});
		$("#sortable").disableSelection();

//Выборка цвета

$("#selectable").selectable();

//Изучение эффектов

$('#formHide').click(function() {
    $('#my_form').toggle('explode', 700);
});


});  // конец ready