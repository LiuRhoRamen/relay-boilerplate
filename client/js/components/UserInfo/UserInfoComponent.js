import { Form } from "antd";
const { Item: FormItem } = Form;

export default class UserInfo extends React.Component {
  state = {};

  render() {
    const { userInfo: { name, mail } } = this.props;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };

    return (
      <div>
        <Form>
          <FormItem {...formItemLayout} label="用户名">
            <span className="ant-form-text">{name}</span>
          </FormItem>
          <FormItem {...formItemLayout} label="邮箱">
            <span className="ant-form-text">{mail}</span>
          </FormItem>
        </Form>
      </div>
    );
  }
}
