const { Router } = require('express');
const r = Router();

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

r.get('/study', (req, res) => {
    // res.send("apoorva"); //sending string
    // res.send({name: "ap" , id: 1}); //sending obj
    // res.send([1,2,3]) /sending arr
    // res.send(['g','f']) //sending arr of strings
    //sending arr of obj
    //can only send once
    res.send(studyItems);
});

r.get('/study/:item', (req,res) => {
    const {item} = req.params;
    const studyItem = studyItems.find((s) => s.topic === item);
    res.send(studyItem);
})

r.post('/study', (req,res) => {
    console.log(req.body);
    studyItems.push(req.body);
    res.send(201);
})

module.exports = r;