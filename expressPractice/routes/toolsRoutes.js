const {Router} = require('express');
const router = Router();

toolsUsed = [
    {
        tool: "postman"
    },
    {
        tool: "VSCode"
    },
    {
        tool: "GIT"
    }
];

router.get('/tools', (req,res) =>{
    res.send(toolsUsed);
})

router.get('/tools/:item', (req,res) =>{
    let t = req.params.item;
    let toolItem = toolsUsed.find((x) => x.tool === t);
    res.send(toolItem);
})

router.post('/tools', (req,res) => {
    console.log(req.body);
    toolsUsed.push(req.body);
    res.send(201);
})

module.exports = router;