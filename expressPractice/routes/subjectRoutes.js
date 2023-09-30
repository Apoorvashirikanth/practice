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
})

module.exports = router;