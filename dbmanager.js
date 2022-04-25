const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    port : 5432,
    user: "ajay",
    password: "3581",
    database: "minimato"
})


module.exports={client}