import { Table, Button, Modal, Form, Input } from "antd";
import styles from "./DataTable.less";
import ModalService from "../../service/ModalService";
import AddDataMutation from "../../mutations/AddDataMutation";
import RemoveDataMutation from "../../mutations/RemoveDataMutation";
import RenameDataMutation from "../../mutations/RenameDataMutation";

const { Item: FormItem } = Form;

class EditDataModal extends React.Component {
  handleSubmit = () => {
    const { form: { validateFields }, onOk } = this.props;

    validateFields((err, values) => {
      if (!err) {
        onOk(values);
      }
    });
  };

  render() {
    const { form: { getFieldDecorator }, data } = this.props;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    };

    return (
      <div>
        <Modal
          {...this.props}
          footer={[
            <Button
              key="back"
              size="large"
              type="primary"
              onClick={() => {
                this.props.onCancel();
              }}
            >
              取消
            </Button>,
            <Button key="submit" size="large" onClick={this.handleSubmit}>
              确认
            </Button>
          ]}
        >
          <Form>
            <FormItem label="数据名称" {...formItemLayout}>
              {getFieldDecorator("dataName", {
                rules: [{ required: true, message: "请填写数据名称！" }],
                initialValue: data && data.dataName
              })(<Input placeholder="请填写数据名称" />)}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

const WrappedEditDataModal = Form.create()(EditDataModal);

export default class DataTable extends React.Component {
  state = {
    dataSource: null,
    totalCount: 0,
    currentPage: 1,
    pageSize: 10
  };

  setDataSource = dataList => {
    const { totalCount, datas: { edges, pageInfo } } = dataList;
    const dataSource = edges.map(item => item.node);
    this.setState({
      dataSource,
      totalCount
    });
  };

  handlePaginationChange = (page, pageSize) => {
    this.setState({
      currentPage: page,
      pageSize
    });
    const { relay: { refetch } } = this.props;
    refetch(v => {
      return { limit: 10, offset: (page - 1) * pageSize };
    });
  };

  handleAdd = () => {
    ModalService.open(WrappedEditDataModal, {
      title: "添加新数据",
      handleOk: data => {
        const { dataName } = data;
        const { relay: { environment } } = this.props;
        const { currentPage, pageSize } = this.state;
        const variables = {
          input: { dataName },
          limit: pageSize,
          offset: (currentPage - 1) * pageSize
        };
        AddDataMutation.commit(environment, variables, (response, errors) => {
          const { addData: { dataList } } = response;
          this.setDataSource(dataList);
        });
      }
    });
  };

  handleEdit = text => {
    const { dataName, id } = text;
    const { currentPage, pageSize } = this.state;

    ModalService.open(WrappedEditDataModal, {
      title: "修改数据名称",
      data: { dataName },
      handleOk: data => {
        const { dataName } = data;
        const { relay: { environment } } = this.props;
        const variables = {
          input: { dataName, id },
          limit: pageSize,
          offset: (currentPage - 1) * pageSize
        };
        RenameDataMutation.commit(
          environment,
          variables,
          (response, errors) => {
            const { renameData: { dataList } } = response;
            this.setDataSource(dataList);
          }
        );
      }
    });
  };

  handleDelete = text => {
    const { relay: { environment } } = this.props;
    const { currentPage, pageSize } = this.state;
    const { id } = text;
    const variables = {
      input: { id },
      limit: pageSize,
      offset: (currentPage - 1) * pageSize
    };
    RemoveDataMutation.commit(environment, variables, (response, errors) => {
      const { removeData: { dataList } } = response;
      this.setDataSource(dataList);
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataList) {
      this.setDataSource(nextProps.dataList);
    }
  }

  componentWillMount() {
    this.setDataSource(this.props.dataList);
  }

  render() {
    const { dataSource, totalCount, currentPage, pageSize } = this.state;

    const columns = [
      {
        title: "数据编号",
        dataIndex: "dataId"
      },
      {
        title: "数据名称",
        dataIndex: "dataName"
      },
      {
        title: "操作",
        render: (text, record) => {
          return (
            <span>
              <a
                style={{ marginRight: "8px" }}
                onClick={() => {
                  this.handleEdit(text);
                }}
              >
                编辑
              </a>
              <a
                className="sf-delete-link"
                onClick={() => {
                  this.handleDelete(text);
                }}
              >
                删除
              </a>
            </span>
          );
        }
      }
    ];

    const pagination = {
      current: currentPage,
      pageSize,
      total: totalCount,
      onChange: this.handlePaginationChange
    };

    return (
      <div>
        <div style={{ padding: "15px 10px" }}>
          <Button type="primary" onClick={this.handleAdd}>
            添加
          </Button>
        </div>
        <Table
          rowKey="dataId"
          dataSource={dataSource}
          columns={columns}
          pagination={pagination}
        />
      </div>
    );
  }
}
