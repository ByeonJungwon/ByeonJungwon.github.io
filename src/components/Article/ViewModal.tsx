import { Modal } from 'antd';
import * as React from 'react';
import ArticleItem from '../../types/ArticleItem';

type ViewModalProps = {
  item: ArticleItem;
  isModalVisible: boolean;
  closeModal(): void;
};

function ViewModal({ item, isModalVisible, closeModal }: ViewModalProps) {
  return (
    <Modal
      title={<b>{item.title}</b>}
      visible={isModalVisible}
      width="fit-content"
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
