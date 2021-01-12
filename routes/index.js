const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('ok desde index /')
})

router.get('/fabrica', (req,res)=>{
    res.send('ok desde fabrica')
})

router.get('/empleados', (req,res)=>{
    res.send('ok desde empleados')
})


module.exports = router;