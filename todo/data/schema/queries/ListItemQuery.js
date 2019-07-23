// @flow

import {GraphQLString, GraphQLList, GraphQLNonNull, GraphQLObjectType} from 'graphql';
import {GraphQLListItem} from '../nodes';
import {ListItem, getListItemOrThrow} from '../../database';

type Input = {
  +id: string,
};

let i = 0
const GraphQListItemQuery = new GraphQLObjectType({
  name: 'ListItemQuery',
  fields: {
    listItems: {
      type: new GraphQLList(GraphQLListItem),
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve: (root: {}, {id}: Input): ListItem[] => {
        console.log(`called ${++i} times`)

        let result = []
        for (let i = 0; i < 10; i++) {
          result.push(getListItemOrThrow(String(i)))
        }
        console.log(result)
        return result
      }
    },
  },
})

// TODO: resolve as any empty object and then in the fields
// have resolvers (ie, list query)

const ListItemQuery = {
  type: GraphQListItemQuery,
  args: {},
  resolve: () => ({}),
};

export {ListItemQuery};
