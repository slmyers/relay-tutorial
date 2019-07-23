// @flow

import {GraphQLString, GraphQLList, GraphQLNonNull} from 'graphql';
import {GraphQLListItem} from '../nodes';
import {ListItem, getListItemOrThrow} from '../../database';

type Input = {
  +id: string,
};


const ListItemsQuery = {
  type: new GraphQLList(GraphQLListItem),
  args: {
    id: {type: new GraphQLNonNull(GraphQLString)},
  },
  resolve: (root: {}, {id}: Input): ListItem[] => {
    let result = []
    for (let i = 0; i < 10; i++) {
      result.push(getListItemOrThrow(String(i)))
    }
    console.log(result)
    return result
  }
};

export {ListItemsQuery};
