/*
TODO: Split this code into a folder called backend
      have the schema.graphql generated in a folder called schema
      move the scripts stuff into schema
      delete data folder
*/
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLBoolean } = require('graphql');
const { nodeField, database, GraphQLUser } = require('./nodes.js');
// a required Object for the schema
const Query = new GraphQLObjectType({
  // name that will be consumed by relay and the Schema Definition
  name: 'Query',
  fields: {
    user: {
      type: GraphQLUser,
      args: { id: {type: GraphQLString}, },
      resolve: (
        /* the root object, this is the result of the parent resolver*/_, 
        /* the arguements from the client */ {id} ,
        /* context */ __, 
        /* info about the query */___) => {

          const user = database.Users.get(id)         
          if(!user) throw new Error("Could not get user: " + id)
          return user

      }
    },
    // allows for resolving via id
    node: nodeField,
  },
});
// required for the schema
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
   dummy: {
     name: 'dummy',
     inputFields: {},
     type: GraphQLBoolean,
     resolve: () => true
   }
  },
});

exports.schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
