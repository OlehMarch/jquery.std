/* Урок 60 - свойства innerText, textContent, innerHTML
var myDiv = document.getElementById("div_for_img");
myDiv.innerHTML = "<p><strong>Вставка свойством InnerHTML</p></strong>";
alert(myDiv.innerHTML);

var mainHeader = document.getElementById("main_h1");
alert(mainHeader.innerText);*/                             // for IE and Opera - innerText, but for Mozilla and Opera use textContent

/* Урок 59
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

/* Урок 58 - метод getElementById
var motoImg = document.getElementById("img_1");
alert(motoImg.alt); */

/* Урок 57 - метод getElementsByTagName
var allImgs = document.getElementsByTagName("img");
alert("Всего картинок: " + allImgs.length) */