/**
 * @flow
 * @relayHash b5b45277191195a0663e1668d42a16f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { ListItem_item$ref } from "./ListItem_item.graphql";
import type { List_list$ref } from "./List_list.graphql";
import type { TodoApp_user$ref } from "./TodoApp_user.graphql";
export type ListRefetchQueryVariables = {|
  userId?: ?string
|};
export type ListRefetchQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: TodoApp_user$ref
  |},
  +listItems: $ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +one: ?number,
    +two: ?number,
    +$fragmentRefs: ListItem_item$ref,
  |}>,
  +ListItemQuery: ?{|
    +$fragmentRefs: List_list$ref
  |},
|};
export type ListRefetchQuery = {|
  variables: ListRefetchQueryVariables,
  response: ListRefetchQueryResponse,
|};
*/


/*
query ListRefetchQuery(
  $userId: String
) {
  user(id: $userId) {
    ...TodoApp_user
    id
  }
  listItems(id: "TEST") {
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

fragment TodoApp_user on User {
  id
  userId
  totalCount
  ...TodoListFooter_user
  ...TodoList_user
}

fragment ListItem_item on ListItem {
  id
  name
  two
}

fragment List_list on ListItemQuery {
  list: listItems(id: "TEST") {
    id
    name
    one
    two
  }
}

fragment TodoListFooter_user on User {
  id
  userId
  completedCount
  todos(first: 2147483647) {
    edges {
      node {
        id
        complete
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  totalCount
}

fragment TodoList_user on User {
  todos(first: 2147483647) {
    edges {
      node {
        id
        complete
        ...Todo_todo
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
  userId
  totalCount
  completedCount
  ...Todo_user
}

fragment Todo_todo on Todo {
  complete
  id
  text
}

fragment Todo_user on User {
  id
  userId
  totalCount
  completedCount
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "userId"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "TEST"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "one",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "two",
  "args": null,
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
],
v8 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ListRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TodoApp_user",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "listItems",
        "storageKey": "listItems(id:\"TEST\")",
        "args": (v2/*: any*/),
        "concreteType": "ListItem",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ListItem_item",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ListItemQuery",
        "storageKey": null,
        "args": null,
        "concreteType": "ListItemQuery",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "List_list",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ListRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "userId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "completedCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "todos",
            "storageKey": "todos(first:2147483647)",
            "args": (v7/*: any*/),
            "concreteType": "TodoConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "TodoEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Todo",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "complete",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "text",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "todos",
            "args": (v7/*: any*/),
            "handle": "connection",
            "key": "TodoList_todos",
            "filters": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "listItems",
        "storageKey": "listItems(id:\"TEST\")",
        "args": (v2/*: any*/),
        "concreteType": "ListItem",
        "plural": true,
        "selections": (v8/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ListItemQuery",
        "storageKey": null,
        "args": null,
        "concreteType": "ListItemQuery",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "list",
            "name": "listItems",
            "storageKey": "listItems(id:\"TEST\")",
            "args": (v2/*: any*/),
            "concreteType": "ListItem",
            "plural": true,
            "selections": (v8/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ListRefetchQuery",
    "id": null,
    "text": "query ListRefetchQuery(\n  $userId: String\n) {\n  user(id: $userId) {\n    ...TodoApp_user\n    id\n  }\n  listItems(id: \"TEST\") {\n    id\n    name\n    one\n    two\n    ...ListItem_item\n  }\n  ListItemQuery {\n    ...List_list\n  }\n}\n\nfragment TodoApp_user on User {\n  id\n  userId\n  totalCount\n  ...TodoListFooter_user\n  ...TodoList_user\n}\n\nfragment ListItem_item on ListItem {\n  id\n  name\n  two\n}\n\nfragment List_list on ListItemQuery {\n  list: listItems(id: \"TEST\") {\n    id\n    name\n    one\n    two\n  }\n}\n\nfragment TodoListFooter_user on User {\n  id\n  userId\n  completedCount\n  todos(first: 2147483647) {\n    edges {\n      node {\n        id\n        complete\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  totalCount\n}\n\nfragment TodoList_user on User {\n  todos(first: 2147483647) {\n    edges {\n      node {\n        id\n        complete\n        ...Todo_todo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  userId\n  totalCount\n  completedCount\n  ...Todo_user\n}\n\nfragment Todo_todo on Todo {\n  complete\n  id\n  text\n}\n\nfragment Todo_user on User {\n  id\n  userId\n  totalCount\n  completedCount\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f776d8ef20325ff1341aff6b8e0993ef';
module.exports = node;
