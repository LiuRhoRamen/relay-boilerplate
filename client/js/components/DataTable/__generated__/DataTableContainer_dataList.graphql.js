/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type DataMode = ('CSV_FILE' | 'MONGO_DB' | 'MYSQL_DB' | 'OBJECT_STORAGE' | 'UNDETERMINED' | '%future added value');
export type DataStatus = ('DESTROYED' | 'FAIL_TO_UPLOAD' | 'MODIFYING' | 'PENDING' | 'UPLOADED' | 'UPLOADING' | 'WAIT_TO_UPLOAD' | '%future added value');
export type DataType = ('DT_UNKOWN' | 'NOT_STRUCTURED' | 'STRUCTURED' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type DataTableContainer_dataList$ref: FragmentReference;
export type DataTableContainer_dataList = {|
  +totalCount: ?number,
  +datas: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +dataId: string,
        +dataName: string,
        +dataType: DataType,
        +dataMode: ?DataMode,
        +dataSize: ?number,
        +createTime: number,
        +updateTime: number,
        +status: DataStatus,
      |},
      +cursor: string,
    |}>,
    +pageInfo: {|
      +endCursor: ?string,
      +hasNextPage: boolean,
    |},
  |},
  +$refType: DataTableContainer_dataList$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "DataTableContainer_dataList",
  "type": "DataList",
  "metadata": {
    "connection": [
      {
        "count": "limit",
        "cursor": null,
        "direction": "forward",
        "path": [
          "datas"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "limit",
      "type": "Int",
      "defaultValue": 10
    },
    {
      "kind": "LocalArgument",
      "name": "offset",
      "type": "Int",
      "defaultValue": 0
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "datas",
      "name": "__DataTableContainer_datas_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "DataConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "DataEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Data",
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
                  "name": "dataId",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "dataName",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "dataType",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "dataMode",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "dataSize",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "createTime",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "updateTime",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "status",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
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
    }
  ]
};
(node/*: any*/).hash = '69220abc3c5aadb431593e6f63ddde34';
module.exports = node;
