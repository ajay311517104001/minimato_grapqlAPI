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
} = graphql;


const createuserRes = new GraphQLObjectType({
  name: "saveuseme",
  fields: ({
    user_id: { type: GraphQLString },
    token: { type: GraphQLString }
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

    try {
      console.log(args.userInput.user_id, args.userInput.password)
      let user_id = args.userInput.user_id
      let password = args.userInput.password

      await users.create({ user_id, password })
        .then(() => {

          token = GenerateToken(args.userInput.user_id)


        })
    } catch (err) {
      console.log(err)

    }


    return { user_id: args.userInput.user_id, token: token }


  }
}


module.exports = { CREATE_USER }