const {UserType} =require('../TypeDefs/User')
 const {client} = require("../../dbmanager")
const graphql = require("graphql");
const {GenerateToken} = require("../../Authentication/Authentication")


const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
} = graphql;

//  client.connect();


const createuserRes = new GraphQLObjectType({
  name:"saveuseme",
  fields:({
    user_id:{type:GraphQLString},
    token:{type: GraphQLString}
  })
})


const inputobj = new  GraphQLInputObjectType({
  name:"userinput",
  fields:({
    
    
    user_id: {type : GraphQLString},
    password: { type : GraphQLString}
  
  })
})

const CREATE_USER ={
    type:  createuserRes ,
    args:{
      userInput:{type :inputobj}
    },
    resolve: async(parents,args)=>{

       //console.log(args.userInput.username)
     let query = `INSERT INTO users(user_id,password) VALUES($1,$2) `;
     let token

      try{
        await (client.query(query,[args.userInput.user_id,args.userInput.password])
        .then(()=>{
          //client.end
           token =GenerateToken(args.userInput.user_id)
  
         
        }))
      }catch(err){
       console.log(err)

      }
    //  console.log(args.userInput)
      //  lop.push({"id": lop.length +1, "UserName": args.UserName , "Password": args.Password })
      
       return  { user_id: args.userInput.user_id,token: token}
      

    }
  }


  module.exports={CREATE_USER}