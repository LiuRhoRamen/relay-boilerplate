import { commitMutation, graphql } from "react-relay";
import { ConnectionHandler } from "relay-runtime";
import { debug } from "util";

const mutation = graphql`
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
        datas(first: $limit, offset: $offset)
          @connection(key: "DataTableContainer_datas", filters: []) {
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
`;

function sharedUpdater(store, newEdge) {
  debugger;
  const dataListProxy = store.getRoot().getLinkedRecord("dataList");
  const conn = ConnectionHandler.getConnection(
    dataListProxy,
    "DataTableContainer_datas"
  );
  ConnectionHandler.insertEdgeBefore(conn, newEdge);
}

let tempID = 0;

function commit(environment, variables, cb) {
  const { input: { dataName } } = variables;

  return commitMutation(environment, {
    mutation,
    variables: {
      ...variables,
      ...{ input: { dataName, clientMutationId: tempID++ } }
    },
    // updater: store => {
    //   const payload = store.getRootField("addData");
    //   const newEdge = payload.getLinkedRecord("dataEdge");
    //   sharedUpdater(store, newEdge);
    // },
    // optimisticUpdater: store => {
    //   const id = "client:newData:" + tempID;
    //   const dataNode = store.create(id, "Data");
    //   dataNode.setValue(id, "id");
    //   dataNode.setValue(dataName, "dataName");
    //   dataNode.setValue(id, "dataId");
    //   dataNode.setValue("DESTROYED", "status");
    //   dataNode.setValue("0000000000", "updateTime");
    //   dataNode.setValue("CSV_FILE", "dataMode");
    //   dataNode.setValue("STRUCTURED", "dataType");
    //   dataNode.setValue("0", "dataSize");
    //   dataNode.setValue("0000000000", "createTime");
    //   const newDataEdge = store.create("client:newEdge:" + tempID, "DataEdge");
    //   newDataEdge.setLinkedRecord(dataNode, "node");
    //   sharedUpdater(store, newDataEdge);
    //   const dataListProxy = store.getRoot().getLinkedRecord("dataList");
    //   dataListProxy.setValue(
    //     dataListProxy.getValue("totalCount") + 1,
    //     "totalCount"
    //   );
    // }
    onCompleted: (response, errors) => {
      cb && cb(response, errors);
    }
  });
}

export default { commit };
