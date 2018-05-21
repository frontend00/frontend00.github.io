var greetings = document.getElementById('hello');
var cookieSet = document.getElementById('cookiebutton');
var cookieDel = document.getElementById('cookiebutton2');

function writeCookie() {
    var name = document.orderForm.nameField.value;
    var expires = "expires=" + "Thu, 01 Jan 2070 00:00:00 UTC";
    document.cookie = "yourName" + "=" + name + ';' + expires;
}

function readCookie() {
    var name = document.orderForm.nameField.value;    
    if (document.cookie != "") {
        var yourName = document.cookie.split("=")[1]; 
        greetings.innerHTML = "Hello"  + ' ' + yourName;
        } else {
        greetings.innerHTML = "Hello";
    }
}

function deleteCookie() {
    var name = document.orderForm.nameField.value;
    var expires = "expires=" + "Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "yourName" + "=" + name + ';' + expires;
}

function clearForms() {
	document.getElementsByName('nameField')[0].value="";
}

cookieSet.addEventListener('click', writeCookie, false);
cookieSet.addEventListener('click', readCookie, false);
cookieDel.addEventListener('click', deleteCookie, false);
window.addEventListener('load', readCookie, false);
window.addEventListener('beforeunload', clearForms, false);