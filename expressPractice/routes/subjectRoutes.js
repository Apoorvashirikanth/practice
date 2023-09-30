const { Router } = require('express');
const router = Router();

let subjectList = [
    {
        subject: "Science",
        grade: 10
    },
    {
        subject: "Math",
        grade: 11
    },
    {
        subject: "social",
        grade: 9
    }
];

router.get('/subjects', (req,res) => {
    res.send(subjectList);
});

router.post('/subjects', (req,res) => {
    console.log(req.body);
    subjectList.push(req.body);
    res.send(201);
})

module.exports = router;