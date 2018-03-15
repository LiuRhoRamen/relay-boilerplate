import { createRefetchContainer, graphql } from "react-relay";
import DataTable from "./DataTableComponent";

export default createRefetchContainer(
  DataTable,
  {
    dataList: graphql`
      fragment DataTableContainer_dataList on DataList
        @argumentDefinitions(
          limit: { type: "Int", defaultValue: 10 }
          offset: { type: "Int", defaultValue: 0 }
        ) {
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
    `
  },
  graphql`
    query DataTableContainerRefetchQuery($limit: Int, $offset: Int) {
      dataList {
        ...DataTableContainer_dataList
          @arguments(first: $limit, offset: $offset)
      }
    }
  `
);
