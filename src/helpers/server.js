import HttpServer from '../modules/HttpServer'

const startServer = () => {
  HttpServer.startServer("asd", 1)
};
const stopServer = () => {
  HttpServer.stopServer();
};

export {startServer, stopServer};
