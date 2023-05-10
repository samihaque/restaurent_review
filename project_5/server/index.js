const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

const db = require('./queries')

const path = require('path')

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

// Routes 

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
    res.send('Hello from the server')
});

// CRUD 
// CREATE - add data to DB
app.post('/links', db.createLinks)

// READ   - get data from the DB
app.get('/links', db.getLinks)

// UPDATE - update data in DB
// DELETE - remove data from a DB
app.delete('/links/:id', db.deleteLink);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});