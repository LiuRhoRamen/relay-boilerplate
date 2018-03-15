/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type LayoutContainer_userInfo$ref: FragmentReference;
export type LayoutContainer_userInfo = {|
  +id: string,
  +name: string,
  +$refType: LayoutContainer_userInfo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "LayoutContainer_userInfo",
  "type": "User",
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
    }
  ]
};
(node/*: any*/).hash = 'c27e85f1a6f56dbd4fcee7663c3ecc21';
module.exports = node;
