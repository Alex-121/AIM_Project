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
router.get('/ideas-page/:idea_id', async (req,res)=>{
    //console.log(req.params.idea_id)
    try {
        let results = await db.getAnIdea(req, res);
        res.json(results);
      
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
   
    
    });

//add idea to database
router.post('/new-idea', async(req,res)=>{
    console.log('to MYSQL!!')
    try {
        let results = await db.post(req,res)
    }catch(e) {
        console.log(e)
    }
    // res.send({
    //     type:'POST',
    //     name: req.body.name,
    //     rank: req.body.rank});
    
});

//edit idea that's in the database
router.put('/new-idea/:id',(req,res)=>{
    res.send({type:'PUT'});
    
});
module.exports = router;