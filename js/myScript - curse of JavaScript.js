/* ���� 60 - �������� innerText, textContent, innerHTML
var myDiv = document.getElementById("div_for_img");
myDiv.innerHTML = "<p><strong>������� ��������� InnerHTML</p></strong>";
alert(myDiv.innerHTML);

var mainHeader = document.getElementById("main_h1");
alert(mainHeader.innerText);*/                             // for IE and Opera - innerText, but for Mozilla and Opera use textContent

/* ���� 59
var myDiv = document.getElementById("div_for_img");

// var childDiv = myDiv.childNodes;
// for (var i = 0; i < childDiv.length ; i++) {
// 	 alert(childDiv[i].alt);
// }

// var parentDiv = myDiv.parentNode;
// alert(parentDiv.id);

// var brotherDiv = myDiv.nextSibling;
// alert(brotherDiv);

// var brotherDiv = myDiv.previousSibling;
// alert(brotherDiv); */

/* ���� 58 - ����� getElementById
var motoImg = document.getElementById("img_1");
alert(motoImg.alt); */

/* ���� 57 - ����� getElementsByTagName
var allImgs = document.getElementsByTagName("img");
alert("����� ��������: " + allImgs.length) */