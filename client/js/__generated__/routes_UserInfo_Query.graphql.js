/**
 * @flow
 * @relayHash 069bd402c27c9488180a632fb2f87d51
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserInfoContainer_userInfo$ref = any;
export type routes_UserInfo_QueryVariables = {| |};
export type routes_UserInfo_QueryResponse = {|
  +userInfo: ?{|
    +$fragmentRefs: UserInfoContainer_userInfo$ref,
  |},
|};
*/


/*
query routes_UserInfo_Query {
  userInfo {
    ...UserInfoContainer_userInfo
    id
  }
}

fragment UserInfoContainer_userInfo on User {
  id
  name
  mail
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "routes_UserInfo_Query",
  "id": null,
  "text": "query routes_UserInfo_Query {\n  userInfo {\n    ...UserInfoContainer_userInfo\n    id\n  }\n}\n\nfragment UserInfoContainer_userInfo on User {\n  id\n  name\n  mail\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routes_UserInfo_Query",
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
            "name": "UserInfoContainer_userInfo",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_UserInfo_Query",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "mail",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
(node/*: any*/).hash = '6f1c5fae32abb9ec96479a7572024ab5';
module.exports = node;
