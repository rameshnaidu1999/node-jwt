const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: "welcome",
    });
});

app.post('/api/posts', (req, res) => {
    res.json({
        message: "Post Created......",
    })
});

app.post('/api/login', (req,res)=>{
    //mock user
    const user = {
        id: 1,
        username: 'Ramesh',
        email: 'ramesh98.kasula@gmail.com'
    }
    jwt.sign({user: user}, 'secretkey', (err,toke) =>{
        res.json({
            token
        });
    });
});

app.listen(5000, () => {
    console.log('App listening on port 5000!');
});