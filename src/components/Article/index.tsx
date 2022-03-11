import * as React from 'react';
import { Col, Row } from 'antd';
import Content from '../../core/text/Content';
import Title from '../../core/text/Title';
import Wrapper from '../../core/Wrapper';
import Card from './Card';
import ArticleItem from '../../types/ArticleItem';
import ViewModal from './ViewModal';

type ArticleProps = {
  title: string;
  items: ArticleItem[];
};

function Article({ title, items }: ArticleProps) {
  const [selectIndex, setSelectIndex] = React.useState<number>(0);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  function onClickHandler(index: number) {
    setSelectIndex(index);
    setIsModalVisible(true);
  }

  function showModal() {
    setIsModalVisible(true);
  }

  function closeModal() {
    setIsModalVisible(false);
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <Row
          itemType="flex"
          align="middle"
          style={{
            textAlign: 'center',
            margin: window.innerWidth > 768 ? '0px 10%' : '16px 10% 16px 10%',
          }}
          gutter={[8, 8]}
        >
          {items.map((item, index) => {
            return (
              <Col key={index} xs={24} xl={12}>
                <Card title={item.title} extra={<a onClick={() => onClickHandler(index)}>읽기</a>}>
                  <p>{item.description}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Content>
      <ViewModal
        item={items[selectIndex]}
        isModalVisible={isModalVisible}
        closeModal={closeModal}
      />
    </Wrapper>
  );
}

export default Article;
