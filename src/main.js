var Vue = require('vue');
require('vue-context-menu');
var ToDos = require('./todos.vue');

new Vue({
  el: '#app',
  components: {
    'todos': ToDos,
  },
});

var socket = new WebSocket('ws://echo.websocket.org/');

var responses = 0;
socket.onopen = function() {
    console.log('WebSocket open');
    socket.send('Sending hello to WebSocket echo');
}

socket.onmessage = function(evt) {
    console.log("Got WebSocket data: " + evt.data);
}
    
socket.onclose = function() {
    console.log('WebSocket closed');
}

