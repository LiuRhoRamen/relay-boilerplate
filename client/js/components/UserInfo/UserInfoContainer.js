import { createFragmentContainer, graphql } from "react-relay";
import UserInfo from "./UserInfoComponent";

export default createFragmentContainer(UserInfo, {
  userInfo: graphql`
    fragment UserInfoContainer_userInfo on User {
      id
      name
      mail
    }
  `
});
