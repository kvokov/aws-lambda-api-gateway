import dotenv from 'dotenv';
import http from 'http';
import app from './app';


dotenv.config();


let server = http.createServer(app);


server.listen(process.env.PORT, () => {
    let addr = server.address();
    let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

    console.log(`Application server listening on ${bind} in "${process.env.NODE_ENV}" mode`); // eslint-disable-line no-console
});