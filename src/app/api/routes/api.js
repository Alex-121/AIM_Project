const express = require('express');
const db = require('../db/mysql');
const router = express.Router();


//get the ideas from the database
router.get('/main-page', async (req,res)=>{

        try {
            let results = await db.getOrderDesc();
            res.json(results);
        }
        catch(e) {
            console.log(e);
            res.sendStatus(500);
        }  

});

router.get('/main-page-sorted', async (req,res)=>{

    try {
        let results = await db.getOrderAsc();
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
//edit idea that's in the database
router.put('/ideas-page/:idea_id', (req,res)=>{
console.log(req)
     try{
         let results = db.put(req, res)
         res.json(results);
        
     }catch(e) {
         console(e)
     }
});

//add idea to database
router.post('/new-idea', async(req,res)=>{
    try {
        let results = await db.post(req,res)
    }catch(e) {
        console.log(e)
    }

    
});

module.exports = router;