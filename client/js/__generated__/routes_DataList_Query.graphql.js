/**
 * @flow
 * @relayHash 0a01a88cd152a25bf6be64cb47188059
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DataTableContainer_dataList$ref = any;
export type routes_DataList_QueryVariables = {| |};
export type routes_DataList_QueryResponse = {|
  +dataList: ?{|
    +$fragmentRefs: DataTableContainer_dataList$ref,
  |},
|};
*/


/*
query routes_DataList_Query {
  dataList {
    ...DataTableContainer_dataList
  }
}

fragment DataTableContainer_dataList on DataList {
  totalCount
  datas(first: 10, offset: 0) {
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
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "routes_DataList_Query",
  "id": null,
  "text": "query routes_DataList_Query {\n  dataList {\n    ...DataTableContainer_dataList\n  }\n}\n\nfragment DataTableContainer_dataList on DataList {\n  totalCount\n  datas(first: 10, offset: 0) {\n    edges {\n      node {\n        id\n        dataId\n        dataName\n        dataType\n        dataMode\n        dataSize\n        createTime\n        updateTime\n        status\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routes_DataList_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "dataList",
        "storageKey": null,
        "args": null,
        "concreteType": "DataList",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "DataTableContainer_dataList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_DataList_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "dataList",
        "storageKey": null,
        "args": null,
        "concreteType": "DataList",
        "plural": false,
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
            "alias": null,
            "name": "datas",
            "storageKey": "datas(first:10,offset:0)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "offset",
                "value": 0,
                "type": "Int"
              }
            ],
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
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "datas",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "offset",
                "value": 0,
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
};
(node/*: any*/).hash = 'f9dadfbebe9f71dbfe7d52343450ef43';
module.exports = node;
