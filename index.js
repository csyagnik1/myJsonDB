const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3500; //  chose port from here like 3500, 3001

server.use(middlewares);
server.use(router);

server.listen(port);