import http from "http";
import path from "path";
import express from "express";
import ejs from "ejs";
import mime from "mime-types";


const __dirname = path.resolve();

const app = express();
app.use(express.static('public', {
    setHeaders: (res, path) => {
      if (mime.lookup(path) === 'text/html') {
        // Set the MIME type for HTML files
        res.setHeader('Content-Type', 'text/html');
      } else if (mime.lookup(path) === 'application/javascript') {
        // Set the MIME type for JavaScript files
        res.setHeader('Content-Type', 'application/javascript');
      }
    }
  }));
  
app.set('view engine', 'html');

app.engine('html', ejs.renderFile);
app.set("views", __dirname + "/public/views");

app.use("public", express.static(__dirname + "/public"));

app.get("/",(_, res) => {res.render("index")});

const httpServer = http.createServer(app);

const PORT = 3000;


const handleListen = () => { console.log(`server is listening from http://localhost:${PORT}`)}
httpServer.listen(PORT, handleListen);