function route(handle, pathname) {
  console.log("About to route a request " + pathname);
  if (typeof handle[pathname] === 'function') {
    console.log("=======================")
    return handle[pathname]();
    
  } else {
    console.log("No request handler found for " + pathname)
    console.log("=======================")
    return "404 not found"
  }
}
exports.route = route;