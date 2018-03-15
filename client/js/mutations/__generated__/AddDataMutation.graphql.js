/**
 * @flow
 * @relayHash ad7bb66e41b745e44b39cd633302e132
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DataMode = ('CSV_FILE' | 'MONGO_DB' | 'MYSQL_DB' | 'OBJECT_STORAGE' | 'UNDETERMINED' | '%future added value');
export type DataStatus = ('DESTROYED' | 'FAIL_TO_UPLOAD' | 'MODIFYING' | 'PENDING' | 'UPLOADED' | 'UPLOADING' | 'WAIT_TO_UPLOAD' | '%future added value');
export type DataType = ('DT_UNKOWN' | 'NOT_STRUCTURED' | 'STRUCTURED' | '%future added value');
export type AddDataMutationVariables = {|
  input: {
    dataName: string,
    clientMutationId?: ?string,
  },
  limit?: ?number,
  offset?: ?number,
|};
export type AddDataMutationResponse = {|
  +addData: ?{|
    +dataEdge: ?{|
      +__typename: string,
      +cursor: string,
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
    |},
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
mutation AddDataMutation(
  $input: AddDataInput!
  $limit: Int = 10
  $offset: Int = 0
) {
  addData(input: $input) {
    dataEdge {
      __typename
      cursor
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
      }
    }
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
    "type": "AddDataInput!",
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
    "type": "AddDataInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dataId",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dataName",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dataType",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dataMode",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dataSize",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createTime",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "updateTime",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "dataEdge",
  "storageKey": null,
  "args": null,
  "concreteType": "DataEdge",
  "plural": false,
  "selections": [
    v2,
    v3,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "Data",
      "plural": false,
      "selections": [
        v4,
        v5,
        v6,
        v7,
        v8,
        v9,
        v10,
        v11,
        v12
      ]
    }
  ]
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalCount",
  "args": null,
  "storageKey": null
},
v15 = [
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
          v4,
          v5,
          v6,
          v7,
          v8,
          v9,
          v10,
          v11,
          v12,
          v2
        ]
      },
      v3
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
  "name": "AddDataMutation",
  "id": null,
  "text": "mutation AddDataMutation(\n  $input: AddDataInput!\n  $limit: Int = 10\n  $offset: Int = 0\n) {\n  addData(input: $input) {\n    dataEdge {\n      __typename\n      cursor\n      node {\n        id\n        dataId\n        dataName\n        dataType\n        dataMode\n        dataSize\n        createTime\n        updateTime\n        status\n      }\n    }\n    dataList {\n      totalCount\n      datas(first: $limit, offset: $offset) {\n        edges {\n          node {\n            id\n            dataId\n            dataName\n            dataType\n            dataMode\n            dataSize\n            createTime\n            updateTime\n            status\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": "limit",
        "cursor": null,
        "direction": "forward",
        "path": [
          "addData",
          "dataList",
          "datas"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "AddDataMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addData",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddDataPayload",
        "plural": false,
        "selections": [
          v13,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "dataList",
            "storageKey": null,
            "args": null,
            "concreteType": "DataList",
            "plural": false,
            "selections": [
              v14,
              {
                "kind": "LinkedField",
                "alias": "datas",
                "name": "__DataTableContainer_datas_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "DataConnection",
                "plural": false,
                "selections": v15
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddDataMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addData",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddDataPayload",
        "plural": false,
        "selections": [
          v13,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "dataList",
            "storageKey": null,
            "args": null,
            "concreteType": "DataList",
            "plural": false,
            "selections": [
              v14,
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
                "selections": v15
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
(node/*: any*/).hash = 'cbf0044b31991bc07240f47862e46aab';
module.exports = node;
