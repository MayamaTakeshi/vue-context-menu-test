This is just a test to show a problem with vue-context-menu and WebSockets: 
if the menu is dismissed by clicking somewhere out of it, existing WebSocket connections are closed.

To test:
  npm -g install gulp
  npm install
  gulp
  firefox index.html
