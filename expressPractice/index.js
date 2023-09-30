const express = require('express');
const studyRoute = require('./routes/studyRoutes');
const toolsRoute = require('./routes/toolsRoutes');
const subjectsRoute = require('./routes/subjectRoutes');

let app = express();

const PORT = 3001;



app.use(express.json()); //enable middleware for post content to be parsed
app.use((req,res,next) => {                      //middleware function, its mandatory to call next() so that next middleware function gets called
    console.log(`${req.method} : ${req.url}`);
    next();
});

app.use(studyRoute);
app.use(toolsRoute);
app.use(subjectsRoute);

app.listen(PORT, () => console.log(`Running server on port ${PORT}!`));


