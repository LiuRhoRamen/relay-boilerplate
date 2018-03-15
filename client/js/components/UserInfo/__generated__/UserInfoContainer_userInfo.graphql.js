/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type UserInfoContainer_userInfo$ref: FragmentReference;
export type UserInfoContainer_userInfo = {|
  +id: string,
  +name: string,
  +mail: string,
  +$refType: UserInfoContainer_userInfo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "UserInfoContainer_userInfo",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "mail",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '9b3542263442ef2aae619bea8344d147';
module.exports = node;
