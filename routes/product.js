const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('ok desde product /')
})

router.get('/altura', (req,res)=>{
    res.send('ok desde si')
})

router.get('/edad', (req,res)=>{
    res.send('ok desde edad')
})

module.exports = router;