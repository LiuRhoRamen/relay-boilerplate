import { commitMutation, graphql } from "react-relay";
import { ConnectionHandler } from "relay-runtime";

const mutation = graphql`
  mutation RemoveDataMutation(
    $input: RemoveDataInput!
    $limit: Int = 10
    $offset: Int = 0
  ) {
    removeData(input: $input) {
      deletedDataId
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

function sharedUpdater(store, deletedId) {
  const dataListProxy = store.getRoot().getLinkedRecord("dataList");
  const conn = ConnectionHandler.getConnection(
    dataListProxy,
    "DataTableContainer_datas"
  );
  ConnectionHandler.deleteNode(conn, deletedId);
}

function commit(environment, variables, cb) {
  const { input: { id } } = variables;

  return commitMutation(environment, {
    mutation,
    variables,
    updater: store => {
      const payload = store.getRootField("removeData");
      sharedUpdater(store, payload.getValue("deletedDataId"));
    },
    optimisticUpdater: store => {
      sharedUpdater(store, id);
    },
    onCompleted: (response, errors) => {
      cb && cb(response, errors);
    }
  });
}

export default { commit };
