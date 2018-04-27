


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

/* ---- arrows in buttons ---- */

function moveArrow() {
$('.box').transition({ x: '10px' }, 200, 'in');
$('.box').css('color', 'white');
}

function moveArrowback() {
$('.box').transition({ x: '0px' }, 200, 'in');
$('.box').css('color', '#d43f3a');
}

var getButton = document.getElementById('buttonMove');
getButton.addEventListener('mouseenter', moveArrow, false);
getButton.addEventListener('mouseleave', moveArrowback, false);

/* ---- autofocus on modal ---- */

$('.modal').on('shown.bs.modal', function() {
  $(this).find('[autofocus]').focus();
});	


/* ---- scrolltop ---- */

window.addEventListener("scroll", function(event) {
  
   var top = this.scrollY;
   var backButton = document.getElementsByClassName("backtop")[0];
   
   if (top < 500) { backButton.style.opacity = "0";
  } else {
      backButton.style.opacity = "0.7";
  }  
}, false);

$("#back-to-top").click(function() {
    $('html, body').animate({
        scrollTop: $("#navbar").offset().top
    }, 400);
});

/*--- toggle ---- */

var theToggle = document.getElementById('toggle');


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




