// these provide methods for parsing, serializing and descriptive meta fields  
const {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} = require("graphql")
const {
  fromGlobalId, // deserialization
  globalIdField, // graphql type, resolves by serializing value
  nodeDefinitions, 
} = require('graphql-relay');

/* Nodes contain data and connections to data
   We can resolve by type

   query myTypeQuery {
     User {
       id
     }
   }

   or we can resolve by id

   query AppQuery($userId: String) {
    user(id: $userId) {
        id
    }
  }

  This function will return a nodeInterface that can be mixedin with other GraphQL types
  to provide the Type based query. The nodeField will be added to our Query object in
  the schema, so that we can resolve Types by id.
*/
const {nodeInterface, nodeField} = nodeDefinitions(
  globalId => {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      return database.Users.get(id)
    } 
    return null;
  },
  obj => {
    console.log(JSON.stringify(obj, null, 4))
    if (obj instanceof User) {
      return GraphQLUser;
    }
    return null;
  },
);

// a datastructure with mock data to manipulate 
const faker = require('faker');
class Database {
    constructor(){
        this._Users = new Map();
        this.currentId = 0
        for(let i = 0; i < 25; i++) {
            this.createAndSetUser()
        }
    }

    createAndSetUser() {
      const user = {
          userId: this.currentId,
          name: faker.name.findName(),
          email: faker.internet.email(),
          color: faker.commerce.color()
      }
      // the id property must be a string when coming from client
      // so we make the keys strings.
      this._Users.set(String(this.currentId++), user)
      return user
    }

    get Users() {
        return this._Users
    }
}
// declare using var to hoist
var database = new Database()
exports.nodeField = nodeField
exports.database = database
exports.GraphQLUser = new GraphQLObjectType({
  name: 'User',
  // TODO: are these fields used?
  fields: {
    id: globalIdField('User'),
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: ({userId}) => userId,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({name}) => name,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({email}) => email,
    },
    color: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({color}) => color,
    },
  },
  interfaces: [nodeInterface],
});