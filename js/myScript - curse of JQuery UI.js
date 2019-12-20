$(document).ready(function() {
    
/* ������ ��������� */
$( "#date" ).datepicker({
    changeMonth: true,
    changeYear: true
});

$.datepicker.regional['ru'] = {
		closeText: '�������',
		prevText: '&#x3C;����',
		nextText: '����&#x3E;',
		currentText: '�������',
		monthNames: ['������','�������','����','������','���','����',
		'����','������','��������','�������','������','�������'],
		monthNamesShort: ['���','���','���','���','���','���',
		'���','���','���','���','���','���'],
		dayNames: ['�����������','�����������','�������','�����','�������','�������','�������'],
		dayNamesShort: ['���','���','���','���','���','���','���'],
		dayNamesMin: ['��','��','��','��','��','��','��'],
		weekHeader: '���',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
/* ����� ��������� */

/* ������ �������� */
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
/* ����� �������� */

/* ������ ���� ������� */
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
/* ����� ���� ������� */

/* ������ button */
$( "input[type=submit], button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
/* ����� button */

/* ������ tabs */
$( "#tabs" ).tabs();
/* ����� tabs */

/* ������ accordion */
$( "#accordion" ).accordion();
/* ����� accordion */

/* ������ progressbar */
$( "#progressbar" ).progressbar({
      value: 0
    });

$('#opros :radio').change(function() {
    var chRadio = $('#opros :radio:checked').size();
    $( "#progressbar" ).progressbar({
        value: chRadio * 20
    });
    var questCount = $('#opros div :radio').size();
    $('#answerCount').text('���� ������� ' + chRadio + ' �� ' + questCount / 2);
});
/* ����� progressbar */

/* ������ autocomplete */
var availableTags = [
      "����������������",
      "��������",
      "�������",
      "����������",
      "���������",
      "��������",
      "����������",
      "���"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
/* ����� autocomplete */

/* ������ draggable � dropable - �������� �� �������� */
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
/* ����� draggable � dropable */

//����������

$("#sortable").sortable({
			placeholder: 'ui-state-highlight'
		});
		$("#sortable").disableSelection();

//������� �����

$("#selectable").selectable();

//�������� ��������

$('#formHide').click(function() {
    $('#my_form').toggle('explode', 700);
});


});  // ����� ready