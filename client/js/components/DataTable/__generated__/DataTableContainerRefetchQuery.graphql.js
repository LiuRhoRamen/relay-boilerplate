/**
 * @flow
 * @relayHash c8f516f4f1b29d55f8cceec840d89b25
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DataTableContainer_dataList$ref = any;
export type DataTableContainerRefetchQueryVariables = {|
  limit?: ?number,
  offset?: ?number,
|};
export type DataTableContainerRefetchQueryResponse = {|
  +dataList: ?{|
    +$fragmentRefs: DataTableContainer_dataList$ref,
  |},
|};
*/


/*
query DataTableContainerRefetchQuery(
  $offset: Int
) {
  dataList {
    ...DataTableContainer_dataList_fiS9i
  }
}

fragment DataTableContainer_dataList_fiS9i on DataList {
  totalCount
  datas(first: 10, offset: $offset) {
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "limit",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "offset",
    "type": "Int",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DataTableContainerRefetchQuery",
  "id": null,
  "text": "query DataTableContainerRefetchQuery(\n  $offset: Int\n) {\n  dataList {\n    ...DataTableContainer_dataList_fiS9i\n  }\n}\n\nfragment DataTableContainer_dataList_fiS9i on DataList {\n  totalCount\n  datas(first: 10, offset: $offset) {\n    edges {\n      node {\n        id\n        dataId\n        dataName\n        dataType\n        dataMode\n        dataSize\n        createTime\n        updateTime\n        status\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DataTableContainerRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
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
            "args": [
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "limit",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "offset",
                "variableName": "offset",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DataTableContainerRefetchQuery",
    "argumentDefinitions": v0,
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
            "storageKey": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
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
};
})();
(node/*: any*/).hash = '9d381e118e825764723b2c905feb1d93';
module.exports = node;
