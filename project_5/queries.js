// connect to postgres using node-postgres package

const POOL = require('pg').Pool

const pool = new POOL({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: 'password',
    port: 5432,
})

// create all the functions that will be our request handler in the express server

// get all the data from DB

const getLinks = (req, res)=>{
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)

    })
}