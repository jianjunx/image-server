const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const router = require("./router");
var cors = require('koa2-cors');

const app = new Koa();
app.use(cors());

const staticPath = "./static";

app.use(static(path.join(__dirname, staticPath)));
router(app);

app.listen(3005, () => {
  console.log("Server start OK! port:3005");
});