const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

const path = require('path')

// middleware


// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});