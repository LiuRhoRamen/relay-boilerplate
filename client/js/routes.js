import { Route, Redirect, makeRouteConfig } from "found";
import { graphql } from "react-relay";

import Layout from "./components/Layout/LayoutContainer";
import DataTable from "./components/DataTable/DataTableContainer";
import UserInfo from "./components/UserInfo/UserInfoContainer";

const LayoutQuery = graphql`
  query routes_Layout_Query {
    userInfo {
      ...LayoutContainer_userInfo
    }
  }
`;

const DataListQuery = graphql`
  query routes_DataList_Query {
    dataList {
      ...DataTableContainer_dataList
    }
  }
`;

const UserInfoQuery = graphql`
  query routes_UserInfo_Query {
    userInfo {
      ...UserInfoContainer_userInfo
    }
  }
`;

export default makeRouteConfig(
  <Route path="/" Component={Layout} query={LayoutQuery}>
    <Route
      Component={DataTable}
      query={DataListQuery}
      prepareVariables={params => ({})}
    />
    <Route
      path="userInfo"
      Component={UserInfo}
      query={UserInfoQuery}
      prepareVariables={params => ({})}
    />
  </Route>
);
