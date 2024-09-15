const express = require('express');
const { Pool } = require('pg');
const axios = require('axios');
const cors = require('cors')

const app = express();
app.use(cors());

const PORT = 3000;

const pool = new Pool({
    user: 'shikhardwivedi',
    host: 'localhost',
    database: 'db1',
    password: 'new_password', 
    port: 5432,
});

async function fetchAndStore(){
    try{
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data = Object.values(response.data).slice(0, 10);

        const client = await pool.connect();
        try{
            await client.query('TRUNCATE TABLE results RESTART IDENTITY');

            for (let i=0; i<data.length; i++) {
                const { name, last, buy, sell, volume, base_unit } = data[i];
                await client.query(
                    `INSERT INTO results (name, last, buy, sell, volume, base_unit) 
                     VALUES ($1, $2, $3, $4, $5, $6)`,
                    [name, last, buy, sell, volume, base_unit]
                );
            } 
        }finally{
                client.release();
        }
    }catch(e){
            console.error('Error fetching or inserting data:', error);
    }
}

fetchAndStore();

app.get('/api/results', async(req, res)=>{
    try{
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM results');
        res.json(result.rows);
        client.release();
    }catch(e){
        console.log(e);
        res.status(500).json({
            message: "Error fetching data from database"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});