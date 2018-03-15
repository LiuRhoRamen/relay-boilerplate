import { createFragmentContainer, graphql } from "react-relay";
import Layout from "./LayoutComponent";

export default createFragmentContainer(Layout, {
  userInfo: graphql`
    fragment LayoutContainer_userInfo on User {
      id
      name
    }
  `
});
