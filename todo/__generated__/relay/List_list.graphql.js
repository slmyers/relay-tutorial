/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type List_list$ref: FragmentReference;
declare export opaque type List_list$fragmentType: List_list$ref;
export type List_list = {|
  +list: $ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +one: ?number,
    +two: ?number,
  |}>,
  +$refType: List_list$ref,
|};
export type List_list$data = List_list;
export type List_list$key = {
  +$data?: List_list$data,
  +$fragmentRefs: List_list$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "List_list",
  "type": "ListItemQuery",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "list",
      "name": "listItems",
      "storageKey": "listItems(id:\"TEST\")",
      "args": [
        {
          "kind": "Literal",
          "name": "id",
          "value": "TEST"
        }
      ],
      "concreteType": "ListItem",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "one",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "two",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1c78f48d5b5109238ce9860f0a25ab81';
module.exports = node;
