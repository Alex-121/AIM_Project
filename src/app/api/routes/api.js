const express = require('express');
const db = require('../db/mysql');
const router = express.Router();


//get the ideas from the database
router.get('/main-page', async (req,res)=>{
    
try {
    let results = await db.get();
    res.json(results);
}
catch(e) {
    console.log(e);
    res.sendStatus(500);
}


});

//add idea to database
router.post('/new-idea',(req,res)=>{

    console.log(req.body)
    res.send({
        type:'POST',
        name: req.body.name,
        rank: req.body.rank});
    
});

//edit idea that's in the database
router.put('/new-idea/:id',(req,res)=>{
    res.send({type:'PUT'});
    
});
module.exports = router;