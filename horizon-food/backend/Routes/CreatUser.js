const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post("/creatUser", (req, res) => {
    try{
        User.create(
            {
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,  
                password: req.body.password,
            })
        res.json({success:true});
    }    
    catch(error){
        console.log(error)
        res.json({success:false});
    }
})

module.exports = router;