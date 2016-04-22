var conn = new WebSocket('ws://ahirea.dev:8080', 'protocolOne');
var button = document.getElementById('send');
conn.onopen = function(event) {
    console.log('Connected');
    var msg = document.getElementById('msg');
    button.addEventListener("click", function(){sendMsg(msg.innerHTML.trim(), conn)}, false);
};

conn.onmessage = function (event) {
  console.log(event.data);
  var text = "";
  var msg = JSON.parse(event.data);
  var time = new Date(msg.date);
  var timeStr = time.toLocaleTimeString();
  var message = document.getElementById('message');
  var user = document.getElementById('name');
  text = msg.text;
  message.innerHTML = timeStr + " : " + text;
  user.innerHTML = msg.id;
}

function sendMsg(message, conn) {
  var user = document.getElementById('user').innerHTML.trim();
  console.log(user + ' sending ' + message);
  // Construct a msg object containing the data the server needs to process the message from the chat client.
  var msg = {
    type: "message",
    text: message,
    id: user,
    date: Date.now()
  };

  // Send the msg object as a JSON-formatted string.
  conn.send(JSON.stringify(msg));

}