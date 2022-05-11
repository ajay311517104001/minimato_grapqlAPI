const { UserType } = require('../TypeDefs/User')

const graphql = require("graphql");
const { GenerateToken } = require("../../Authentication/Authentication")
const { users } = require("../../models")

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLBoolean
} = graphql;


const createuserRes = new GraphQLObjectType({
  name: "saveuseme",
  fields: ({
    user_id: { type: GraphQLString },
    token: { type: GraphQLString },
    message:{type: GraphQLString},
    userCreated:{type:GraphQLBoolean}
  })
})


const inputobj = new GraphQLInputObjectType({
  name: "userinput",
  fields: ({


    user_id: { type: GraphQLString },
    password: { type: GraphQLString }

  })
})

const CREATE_USER = {
  type: createuserRes,
  args: {
    userInput: { type: inputobj }
  },
  resolve: async (parents, args) => {
    let token

  
      
      const userCheck =await users.findOne({where:{user_id:args.userInput.user_id}})
      if(userCheck!==null){

        return { user_id:'', token: '' , message: "User already exists",userCreated:false }

      }else{

        try {
        let user_id = args.userInput.user_id
        let password = args.userInput.password
       
        await users.create({ user_id, password })
          .then(() => {
  
            token = GenerateToken(args.userInput.user_id)
  
  
          })
      } catch (err) {
        console.log(err)
  
      }
      return { user_id: args.userInput.user_id, token: token , message: "User created successfully",userCreated:true }
      }
    


   


  }
}


module.exports = { CREATE_USER }