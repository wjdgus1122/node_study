const express = require('express')
require('dotenv').config({path : 'mysql/.env'});
const mysql = require('./mysql/index.js')


const app = express();

app.listen(3000, () => {
    console.log("Server started. port 3000.")
})

app.get('/api/customers', async (req, res) => {
    const customers = await mysql.query('customerList');

    console.log(customers)
    res.send(customers)
})
