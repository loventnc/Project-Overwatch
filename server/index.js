const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

const salt = bcrypt.genSaltSync(10);
const secret = 'fniwoenvu92ghddlwbunbvy3479b2'


app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());


const PORT = 3000
mongoose.connect('mongodb+srv://SuperDoggez:admin1234@projectoverwatch.429itzm.mongodb.net/')

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
        username,
        password:bcrypt.hashSync(password, salt),
    })
        res.json(userDoc);
    }catch(e){
        console.log(e)
        res.status(400).json(e);
    }
});

app.post('/login', async (req,res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if (passOk){
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id:userDoc._id,
                username,
            });
        })
        // res.joson()
    }else{
        res.status(400).json('Wrong password');
    }
})

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});