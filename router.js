function route(handle, pathname, response, request) {
  console.log("About to route a request " + pathname);
  if (typeof handle[pathname] === 'function') {
    console.log("=======================")
    handle[pathname](response, request);
    
  } else {
    console.log("No request handler found for " + pathname);
    console.log("=======================")
    response.writeHead(404, {"Content-Type": "text/html"})
    response.write("404 Not Found")
    response.end()
  }
}
exports.route = route;