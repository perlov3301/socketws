/** npm install --save ws */
/**
open index.html & node ws
 */
var ws = new WebSocket("ws://localhost:3000");
var i1 = 0;
ws.onopen = function() {
  setTitle("Connected to  Chat");
};
ws.onclose = function() {
  setTitle("DISCONNECTED");
}
ws.onmessage = function(payload) {
  if (i1 === 0) {
     printMessage(payload.data);
     i1 = i1 + 1;
    }
  else { printMessage1(payload.data); }

};
document.forms[0].onsubmit = function() {
  var input = document.getElementById('message');
  ws.send(input.value);
  input.value = '';
};
function setTitle(title) {
  document.querySelector('h1').innerHTML = title;
}
function printMessage(message) {
  var p = document.createElement('p');
  p.innerText = message;
  document.querySelector('div.messages').appendChild(p);
}
function printMessage1(message) {
  var li = document.createElement('li');
  li.innerText = message;
  document.querySelector('ul.twitter').appendChild(li);
}
