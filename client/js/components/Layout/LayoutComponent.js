import { Layout, Menu } from "antd";
import { Link } from "found";
const { Content } = Layout;
const { Item: MenuItem } = Menu;

class MainLayout extends React.Component {
  state = {};

  render() {
    const { children, location: { pathname } } = this.props;

    return (
      <Layout>
        <Content>
          <div style={{ backgroundColor: "#ffffff", minHeight: 280 }}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[pathname.split("/")[1] || "root"]}
            >
              <MenuItem key="root">
                <Link to="/">首页</Link>
              </MenuItem>
              <MenuItem key="userInfo">
                <Link to="/userInfo">用户信息</Link>
              </MenuItem>
            </Menu>
            {children}
          </div>
        </Content>
      </Layout>
    );
  }
}

export default MainLayout;
