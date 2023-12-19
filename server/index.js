const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' })
const fs = require('fs');
const Post = require('./models/post');



// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

const salt = bcrypt.genSaltSync(10);
const secret = 'fniwoenvu92ghddlwbunbvy3479b2'


app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

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

    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (passOk){
            jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({
                    id: userDoc._id,
                    username,
                });
            });
        } else {
            res.status(400).json('Wrong password');
        }
    } else {
        res.status(400).json('User not found');
    }
});


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

app.post('/community/posts', uploadMiddleware.single('file'), async (req,res) => {
    const {originalname, path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext
    fs.renameSync(path, newPath)

    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
        if (err) throw err;
        const {title, summary, content} = req.body;
        const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
        author:info.id,
        })
    res.json(postDoc);
    });
});

app.put('/community/posts',uploadMiddleware.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file){
        const {originalname, path} = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path+'.'+ext
        fs.renameSync(path, newPath)
    }
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
        if (err) throw err;
        const {id, title, summary, content} = req.body;
        const postDoc = await Post.findById(id)
        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
        if (!isAuthor) {
            res.status(400).json('you are not the author of this post');
        }
        await postDoc.updateOne({title, summary, content, cover: newPath?newPath:postDoc.cover,
        })
        res.json(postDoc);
    });

})


app.get('/community/posts', async (req,res) => {
    res.json(
        await Post.find()
        .populate('author', ['username'])
        .sort ({createdAt: -1})
        .limit(20)
    );
})


app.get('/community/posts/:id', async (req,res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
});


app.delete('/community/posts/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Implement logic to delete the post with the given ID
        const deletedPost = await Post.findByIdAndDelete(id);

        if (deletedPost) {
            // Optionally, you can also delete the associated cover file if needed
            // fs.unlinkSync(deletedPost.cover);

            res.json({ message: 'Post deleted successfully' });
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
  


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});