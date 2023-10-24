import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from 'cors'
import compression from "compression";
import routes from './routes/routes'


const app = express();

app.use(cors());

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/',routes);


const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});





