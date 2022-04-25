const {UserType} =require('../../Schemas/TypeDefs/User')
 const {client} = require("../../dbmanager")
const graphql = require("graphql");


const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
GraphQLString,
  GraphQLList,
} = graphql;



 client.connect();

 const restultobj = new GraphQLObjectType({
   name:"getallusersformat",
   fields:({
    userlist : {type : new GraphQLList(UserType)},
    error :{type:GraphQLString}
   })
  
})

 const GET_ALL_USERS ={
    type: restultobj,
    resolve: async()=> {


    try{
      const result =  await client.query("SELECT * FROM users")
      return {userlist: result.rows , error: null}

   
    }catch(err){
      console.log(err)
    }

    }}


module.exports={GET_ALL_USERS}