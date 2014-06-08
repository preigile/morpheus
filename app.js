var http = require('./routes');
var port = 8080;

http.listen(port, function () {
    console.log('listening on *:' + port);
});