"use strict"

/* ---- search box clean ---- */

document.querySelector('#searchin').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
    var searchBox = document.getElementById('searchin');
    searchBox.value = "Only CSS, no search engine";	
    }
 });
 
 document.querySelector('#searchin').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 27) { 
    var searchBox = document.getElementById('searchin');
    setTimeout(function(){ 	
	  searchBox.value = "";
		}, 300);           	
    }
 });
 
function clearForms() {
    var cleanThis = document.getElementById('searchin');
    setTimeout(function(){ 	
		cleanThis.value= "";
		}, 300);
}

var closeSearch = document.getElementById('searchclose');
closeSearch.addEventListener('click', clearForms, false);
window.addEventListener('beforeunload', clearForms, false);

/* ---- autofocus on modal ---- */

$('.modal').on('shown.bs.modal', function() {
  $(this).find('[autofocus]').focus();
});	

/* ---- toggle ---- */

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}