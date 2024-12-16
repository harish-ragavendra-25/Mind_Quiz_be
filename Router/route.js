const express = require('express');
const router = express.Router();

router.post('/login',(req,res) => {
    res.send(req.body);
})

router.get('/login',(req,res) => {
    res.send(req.body);
})

router.get('/userProfile',(req,res) => {
    res.send('user profile');
})

router.get('/quiz',(req,res) => {
    res.send('display all the quiz');
})

router.post('/quiz',(req,res) => {
    res.send('get all the quiz after submit');
})

router.get('/marks',(req,res) => {
    res.send('display marks');
})

module.exports = router;