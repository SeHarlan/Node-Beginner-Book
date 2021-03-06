const server = require('./server.js');
const router = require('./router.js');
const requestHandlers = require('./requestHandlers.js');

const handle = {
  "/": requestHandlers.start,
  "/start": requestHandlers.start,
  "/upload":  requestHandlers.upload,
  "/show": requestHandlers.show
};


server.start(router.route, handle);