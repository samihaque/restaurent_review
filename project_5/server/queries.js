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

// Create new link in the DB

const createLinks = (req, res)=>{
    const name= req.body.name
    const url = req.body.url
    if(name && url){
        pool.query(
            'INSERT INTO links (name, url) VALUES ($1, $2)',
            [name, url], 
            (error, result)=>{
                if(error){
                    throw error;
                }
                console.log(res)
                res.status(201).send(`Link added with ID: ${result.insertId}`)
            },
        )
    }
    else{
        res.status(403).send("Server is expecting data object with name & url parameter")
    }
    
}


// Read all the data from DB

const getLinks = (req, res)=>{
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)

    })
}

// Update link in the DB



// Delete link from the DB

const deleteLink = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const client = await pool.connect();
      await client.query('DELETE FROM links WHERE id = $1', [id]);
      client.release();
      res.sendStatus(204);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
    getLinks,
    createLinks,
    deleteLink,
} 