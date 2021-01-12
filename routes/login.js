const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.send('ok desde login /')
})

router.get('/si', (req,res)=>{
    res.send('ok desde SI')
})



router.get('/:no', (req,res)=>{

    console.log(req.params)
    
    res.send('ok desde NO')

})
module.exports = router;