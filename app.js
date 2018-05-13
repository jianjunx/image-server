const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const path = require("path");
const router = require("./router");
var cors = require("koa2-cors");

const app = new Koa();

const staticPath = "./static";

app.use(static(path.join(__dirname, staticPath)));
app.use(bodyParser());
app.use(cors());
router(app);

app.listen(3005, () => {
    console.log("Server start OK! port:3005");
});
