
// @flow
import React, {useState} from 'react';
import {createFragmentContainer, graphql, type RelayRefetchProp, createRefetchContainer} from 'react-relay';
import classnames from 'classnames';
import type {List_list} from 'relay/List_list.graphql';

type Props = {|
  +relay: RelayRefetchProp,
  +list: List_list,
|};

const List = ({relay, list}: Props) => {
  if(!list) return "hi"

  console.log(relay)

  //setTimeout(relay.refetch, 10000)

  return <pre>{JSON.stringify(list, null, 4)}</pre>
};

const listRefetchQuery = graphql`
  query ListRefetchQuery($userId: String) {
    user(id: $userId) {
      ...TodoApp_user
    }

    listItems(id: "TEST") @relay(plural: true) {
      id
      name
      one 
      two

      ...ListItem_item
    }

    ListItemQuery {
      ...List_list
    }
    
  }
` 

export default createRefetchContainer(
  List, 
  {
    list: graphql`
      fragment List_list on ListItemQuery {
        list: listItems(id: "TEST") {
          id
          name
          one 
          two
        }
      }
    `
  },
  listRefetchQuery
)

// export default createFragmentContainer(List, {
//   list: graphql`
//     fragment List_list on ListItemQuery {
//       list: listItems(id: "TEST") {
//         id
//         name
//         one 
//         two
//       }
//     }
//   `,
// });