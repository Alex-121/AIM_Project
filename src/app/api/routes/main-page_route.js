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
    console.log(err);
    res.sendStatus(500);
}


});
module.exports = router;