import { commitMutation, graphql } from "react-relay";

const mutation = graphql`
  mutation RenameDataMutation(
    $input: RenameDataInput!
    $limit: Int = 10
    $offset: Int = 0
  ) {
    renameData(input: $input) {
      changedDataId
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

// function getOptimisticResponse(dataName, data) {
//   return {
//     renameData: {
//       data: {
//         ...data,
//         dataName: dataName
//       }
//     }
//   };
// }

function commit(environment, variables, cb) {
  return commitMutation(environment, {
    mutation,
    variables,
    // optimisticResponse: getOptimisticResponse(dataName, data)
    onCompleted: (response, errors) => {
      cb && cb(response, errors);
    }
  });
}

export default { commit };
