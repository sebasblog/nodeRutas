const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('ok desde user /')
})

router.get('/altura', (req,res)=>{
    res.send('ok desde altura')
})

router.get('/edad', (req,res)=>{
    res.send('ok desde edad')
})


module.exports = router;