const express = require('express');
const studyRoute = require('./routes/studyRoutes');
const toolsRoute = require('./routes/toolsRoutes');
const subjectsRoute = require('./routes/subjectRoutes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');

let app = express();

const PORT = 3001;

mongoose.connect('mongodb://localhost:27017/expressjs_tutorial')
.then(() => console.log("connected to DB"))
.catch((e) => console.log(e));

app.use(express.json()); //enable middleware for post content to be parsed
app.use((req,res,next) => {                      //middleware function, its mandatory to call next() so that next middleware function gets called
    console.log(`${req.method} : ${req.url}`);
    next();
});

app.use(cookieParser());
app.use(session({
    secret: "apoorva",
    resave: false,
    saveUninitialized: false,
}))

app.use(studyRoute);
app.use(toolsRoute);
app.use(subjectsRoute);



app.listen(PORT, () => console.log(`Running server on port ${PORT}!`));


