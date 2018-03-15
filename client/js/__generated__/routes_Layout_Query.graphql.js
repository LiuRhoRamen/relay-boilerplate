/**
 * @flow
 * @relayHash 6a871f44ea5fc0c24d8ab22ed2922ab8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LayoutContainer_userInfo$ref = any;
export type routes_Layout_QueryVariables = {| |};
export type routes_Layout_QueryResponse = {|
  +userInfo: ?{|
    +$fragmentRefs: LayoutContainer_userInfo$ref,
  |},
|};
*/


/*
query routes_Layout_Query {
  userInfo {
    ...LayoutContainer_userInfo
    id
  }
}

fragment LayoutContainer_userInfo on User {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "routes_Layout_Query",
  "id": null,
  "text": "query routes_Layout_Query {\n  userInfo {\n    ...LayoutContainer_userInfo\n    id\n  }\n}\n\nfragment LayoutContainer_userInfo on User {\n  id\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routes_Layout_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "LayoutContainer_userInfo",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_Layout_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
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
      }
    ]
  }
};
(node/*: any*/).hash = 'b3b8c5bbb17cbf519c5f72238101acf8';
module.exports = node;
