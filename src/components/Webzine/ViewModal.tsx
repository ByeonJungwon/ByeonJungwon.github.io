import { Modal } from 'antd';
import * as React from 'react';
import WebzineItem from '../../types/WebzineItem';

type ViewModalProps = {
  item: WebzineItem;
  isModalVisible: boolean;
  closeModal(): void;
};

function ViewModal({ item, isModalVisible, closeModal }: ViewModalProps) {
  return (
    <Modal
      title={<b>{item.title}</b>}
      visible={isModalVisible}
      width="65%"
      style={{ top: '2%' }}
      okText="닫기"
      onOk={closeModal}
      onCancel={closeModal}
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      <img style={{ maxWidth: '100%', marginTop: 12 }} src={item.content} />
    </Modal>
  );
}

export default ViewModal;
