const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull } = require('graphql');
const { nodeField, database, GraphQLUser } = require('./nodes.js');

const {
  cursorForObjectInConnection,
  mutationWithClientMutationId,
} = require('graphql-relay');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserQuery = {
      type: GraphQLUser,
      args: {
        id: {type: GraphQLString},
      },
      resolve: (root, {id}) => database.Users.get(id),
    },
    node: nodeField,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // TODO: fix the mutation look at the /mutations in the todo project for inspiration.
    //  database.createAndSetUser,
   
    createAndSetUser: mutationWithClientMutationId({
        name: 'createAndSetUser',
        inputFields: {},
        // WHAT ARE THOSE?!?!? mutateAndGetPayload calls this?
        outputFields: {
          user: {
            type: new GraphQLNonNull(GraphQLUser),
            resolve: (...args) => {
              console.log("called!")
              console.log(JSON.stringify(args, null, 4))
              const ilast = database.Users.size - 1
              return database.Users.values()[ilast]
            },
          },
        },
        mutateAndGetPayload: database.createAndSetUser,
    })
  },
});

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

exports.schema = schema
