/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListItem_item$ref: FragmentReference;
declare export opaque type ListItem_item$fragmentType: ListItem_item$ref;
export type ListItem_item = {|
  +id: string,
  +name: ?string,
  +two: ?number,
  +$refType: ListItem_item$ref,
|};
export type ListItem_item$data = ListItem_item;
export type ListItem_item$key = {
  +$data?: ListItem_item$data,
  +$fragmentRefs: ListItem_item$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ListItem_item",
  "type": "ListItem",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "two",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '471b77eef4d11e08cc7b13a06a0f131b';
module.exports = node;
