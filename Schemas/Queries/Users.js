const {UserType} =require('../../Schemas/TypeDefs/User')
const graphql = require("graphql");
const { users } = require("../../models");
const { user } = require('pg/lib/defaults');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
GraphQLString,
  GraphQLList,
} = graphql;





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
      const arr =[]
      const result= await users.findAll({
        attributes: ['id', 'user_id','password']
      });
     
  
  for(let i=0;i<result.length;i++){
    arr.push(result[i]) 
  }
  console.log( arr)
      return {userlist: arr , error: null}
  
   
    }catch(err){
      console.log(err)
    }

    }}


module.exports={GET_ALL_USERS}