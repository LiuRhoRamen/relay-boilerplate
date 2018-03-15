/**
 * @flow
 * @relayHash acb7c088fa5db994af5adf10a2361c6e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DataMode = ('CSV_FILE' | 'MONGO_DB' | 'MYSQL_DB' | 'OBJECT_STORAGE' | 'UNDETERMINED' | '%future added value');
export type DataStatus = ('DESTROYED' | 'FAIL_TO_UPLOAD' | 'MODIFYING' | 'PENDING' | 'UPLOADED' | 'UPLOADING' | 'WAIT_TO_UPLOAD' | '%future added value');
export type DataType = ('DT_UNKOWN' | 'NOT_STRUCTURED' | 'STRUCTURED' | '%future added value');
export type RenameDataMutationVariables = {|
  input: {
    id: string,
    dataName: string,
    clientMutationId?: ?string,
  },
  limit?: ?number,
  offset?: ?number,
|};
export type RenameDataMutationResponse = {|
  +renameData: ?{|
    +changedDataId: ?string,
    +dataList: ?{|
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
    |},
  |},
|};
*/


/*
mutation RenameDataMutation(
  $input: RenameDataInput!
  $limit: Int = 10
  $offset: Int = 0
) {
  renameData(input: $input) {
    changedDataId
    dataList {
      totalCount
      datas(first: $limit, offset: $offset) {
        edges {
          node {
            id
            dataId
            dataName
            dataType
            dataMode
            dataSize
            createTime
            updateTime
            status
            __typename
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RenameDataInput!",
    "defaultValue": null
  },
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
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RenameDataInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "changedDataId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalCount",
  "args": null,
  "storageKey": null
},
v4 = [
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RenameDataMutation",
  "id": null,
  "text": "mutation RenameDataMutation(\n  $input: RenameDataInput!\n  $limit: Int = 10\n  $offset: Int = 0\n) {\n  renameData(input: $input) {\n    changedDataId\n    dataList {\n      totalCount\n      datas(first: $limit, offset: $offset) {\n        edges {\n          node {\n            id\n            dataId\n            dataName\n            dataType\n            dataMode\n            dataSize\n            createTime\n            updateTime\n            status\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": "limit",
        "cursor": null,
        "direction": "forward",
        "path": [
          "renameData",
          "dataList",
          "datas"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "RenameDataMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "renameData",
        "storageKey": null,
        "args": v1,
        "concreteType": "RenameDataPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "dataList",
            "storageKey": null,
            "args": null,
            "concreteType": "DataList",
            "plural": false,
            "selections": [
              v3,
              {
                "kind": "LinkedField",
                "alias": "datas",
                "name": "__DataTableContainer_datas_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "DataConnection",
                "plural": false,
                "selections": v4
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RenameDataMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "renameData",
        "storageKey": null,
        "args": v1,
        "concreteType": "RenameDataPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "dataList",
            "storageKey": null,
            "args": null,
            "concreteType": "DataList",
            "plural": false,
            "selections": [
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "datas",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "limit",
                    "type": "Int"
                  },
                  {
                    "kind": "Variable",
                    "name": "offset",
                    "variableName": "offset",
                    "type": "Int"
                  }
                ],
                "concreteType": "DataConnection",
                "plural": false,
                "selections": v4
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "datas",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "limit",
                    "type": "Int"
                  },
                  {
                    "kind": "Variable",
                    "name": "offset",
                    "variableName": "offset",
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "key": "DataTableContainer_datas",
                "filters": []
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '738984e1a106779f1e62beb6dfc11135';
module.exports = node;
