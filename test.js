var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

xhr.open("POST", "http://172.20.10.10/get-data", true)
xhr.send("aboba")
xhr.onload = function(e) {
    console.log(xhr.responseText)
}
console.log(xhr.status)
var text = xhr.responseText;
console.log(text)