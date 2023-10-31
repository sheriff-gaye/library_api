import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from 'cors'
import compression from "compression";
import categoryroutes from '../src/infrasturcture/router/category.router'



const app = express();

app.use(cors());

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/',categoryroutes );


const server = http.createServer(app);

const port=process.env.PORT|| 8080

server.listen(port, () => {
  console.log('Server running on http://localhost:8080/');
});