// const {UserType} =require('./TypeDefs/User')
// const {client} = require("../dbmanager")
const graphql = require("graphql");
const { GET_ALL_USERS} =require("./Queries/Users");
const { CREATE_USER } = require('./Mutations/Users');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
GraphQLString,
  GraphQLList,
} = graphql;

// client.connect();



const RootQuery = new GraphQLObjectType({
name:"RootQueryType",
fields:{
    getallUsers:GET_ALL_USERS
}});

const RootMutation =new GraphQLObjectType({
  name:"RootMutationType",
  
  fields:{
    addNewUser: CREATE_USER,


  }
})



module.exports = new GraphQLSchema({ query: RootQuery , mutation: RootMutation });