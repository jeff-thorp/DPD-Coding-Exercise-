var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()
var url = require('url');

router.render = function(req, res) {
    var route = url.parse(req.originalUrl.substring(1)).pathname;
    var obj = {};

    obj[route] = res.locals.data
    res.jsonp(obj)
}

server.use(middlewares)
server.use(router)
server.listen(3000, function() {
    console.log('JSON Server is running')
})