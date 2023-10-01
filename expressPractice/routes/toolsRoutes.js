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
    res.cookie('visited', true, {
        maxAge: 10000,
    });
    // console.log(req.headers.cookie)
    res.send(toolsUsed);
});

router.get('/:item', (req,res) =>{
    console.log(req.cookies);
    const { t } = req.params;
    const toolItem = toolsUsed.find((x) => x.tool === t);
    res.send(toolItem);
});

router.post('/tools', (req,res) => {
    console.log(req.body);
    toolsUsed.push(req.body);
    res.send(201);
})

module.exports = router;