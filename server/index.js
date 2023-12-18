const { MongoClient } = require('mongodb');
const cors = require('cors');
const express = require('express');
const app = express();

const uri = "mongodb+srv://SuperDoggez:admin1234@projectoverwatch.429itzm.mongodb.net/";
const PORT = 3000;
const client = new MongoClient(uri);

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});