const app = require('./app.js');
const port = 3000;

const server = app.listen( port, function(){
    console.log('Express listening on port', port);
});

const listen = require('socket.io');
const io = listen(server);

//socket io passport 접근하기 위한 미들웨어 적용
io.use( (socket, next) => {
    app.sessionMiddleWare(socket.request, socket.request.res, next);
});

require('./helpers/socketConnection')(io);