const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var data = {}
async function pool() {
  while (true) {
    xhr.open("POST", "http://172.20.10.10/get-data", true)
    xhr.send("aboba")
    xhr.onload = function (e) {
      data = JSON.parse(xhr.responseText)
    }
    await sleep(5000)
  }
}

pool()

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send(data); //Line 10
}); //Line 11