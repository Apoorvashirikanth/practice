const express = require('express');

let app = express();

const PORT = 3001;

app.listen(PORT, () => console.log(`Running server on port ${PORT}!`));

app.use(express.json()); //enable middleware for post content to be parsed
app.use((req,res,next) => {                      //middleware function, its mandatory to call next() so that next middleware function gets called
    console.log(`${req.method} : ${req.url}`);
    next();
})

let studyItems = [{
    topic: "js",
    hours: 30,
},
{
    topic: "html",
    hours: 20,
},
{
    topic: "css",
    hours: 5,
},
];

app.get('/study', (req, res) => {
    // res.send("apoorva"); //sending string
    // res.send({name: "ap" , id: 1}); //sending obj
    // res.send([1,2,3]) /sending arr
    // res.send(['g','f']) //sending arr of strings
    //sending arr of obj
    //can only send once
    res.send(studyItems);
});

app.post('/study', (req,res) => {
    console.log(req.body);
    studyItems.push(req.body);
    res.send(201);
})