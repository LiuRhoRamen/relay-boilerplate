import { Modal, Alert, Button } from "antd";

const open = (
  MyModal = null,
  { title = "", handleOk = () => {}, handleCancel = () => {}, ...other }
) => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  const closeHandler = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult) {
      div.parentNode.removeChild(div);
    }
  };

  const onOk = data => {
    closeHandler();
    handleOk(data);
  };

  const onCancel = () => {
    closeHandler();
    handleCancel();
  };

  ReactDOM.render(
    <MyModal
      visible={true}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button key="back" size="large" type="primary" onClick={onCancel}>
          取消
        </Button>,
        <Button key="submit" size="large" onClick={onOk}>
          确认
        </Button>
      ]}
      {...other}
    />,
    div
  );

  return {
    destroy: closeHandler
  };
};

const alert = ({
  title = "",
  message = "",
  description = null,
  type = "warning",
  handleOk = () => {},
  handleCancel = () => {}
}) => {
  function MyModal(props) {
    return (
      <Modal {...props}>
        <Alert
          message={message}
          description={description}
          type={type}
          showIcon
        />
      </Modal>
    );
  }

  return open(MyModal, {
    title,
    handleOk,
    handleCancel
  });
};

export default {
  open,
  alert
};
