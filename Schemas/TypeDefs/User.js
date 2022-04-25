const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
GraphQLString,
  GraphQLList,
  
} = graphql;



 const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: GraphQLInt },
      user_id: { type: GraphQLString },
      password: {type :GraphQLString}
     
    }),
  });



module.exports= {UserType};

