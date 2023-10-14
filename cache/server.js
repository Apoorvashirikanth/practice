const express = require('express')
const axios = require('axios')
const redis = require('redis')

const app = express()

const port = process.env.PORT || 5000;

let redisClient;

// connecting to redis via an anonymous self invoked async function
(async () => {
    redisClient = redis.createClient();
    redisClient.on('error' , (error) => console.error(error));
    await redisClient.connect();
})();

async function fetchApiData(name){
    const apiResponse = await axios.get(`https://api.genderize.io/?name=${name}`);
    console.log(`API request sent`);
    return apiResponse.data;
}

async function getGender(req, res) {
    const data = req.params.data;
    let result;
    let isCached = false;
    try{
        const cachedResult = await redisClient.get(data);
        if(cachedResult){
            isCached = true;
            result = JSON.parse(cachedResult);
        }else{
        result = await fetchApiData(data);
        if(result.length === 0){
        throw "API returned empty value";
        }
        await redisClient.set(data, JSON.stringify(result));
    }
        res.send({
            fromCache: isCached,
            data: result,
        });
    }catch(err){
        console.error(err);
        res.status(400).send('Data unavailable')
    }
}
app.get(`/name/:data`, getGender)

app.listen(port, () => console.log(`App listening on port ${port}`));