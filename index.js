const express = require('express')
var { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
const { buildSchema, GraphQLSchema } = require('graphql');
const schema = require('./Schemas/index') 
var bodyParser = require('body-parser')
const dotenv = require('dotenv');




const app = express()
dotenv.config();




app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





// app.use("/",(req,res)=>{
//   res.send("-------------* minimato api 2022 *----------------")
// })

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

const port = process.env.PORT


app.listen(port,'192.168.1.2', () => {
  console.log(`serevr listening on port ${port}`)
})