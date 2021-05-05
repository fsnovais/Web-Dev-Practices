const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars")
const logger = require("./middleware/logger");
const router = require("./routes/api/members");
const members = require('./Members')


const app = express();

//Init Middleware
// app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//HomepageRoute
app.get('/', (req, res) => res.render('index', {
  title: "Member app",
  members
}))
//Set static folder
app.use(express.static(path.join(__dirname, "public")));


//Members API folder
app.use("/api/members", router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!😜`));
