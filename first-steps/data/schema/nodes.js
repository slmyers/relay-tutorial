const GraphQLBoolean = require('graphql').GraphQLBoolean;
const GraphQLInt = require('graphql').GraphQLInt;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLString = require('graphql').GraphQLString;
const {connectionArgs,connectionDefinitions,connectionFromArray} = require('graphql-relay');

const {
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} = require('graphql-relay');

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
      this._Users.set(this.currentId++, user)
      return user
    }

    get Users() {
        return this._Users
    }
}
var database = new Database()
exports.nodeField = nodeField
exports.database = database
exports.GraphQLUser = new GraphQLObjectType({
  name: 'User',
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