import * as React from 'react';
import Content from '../../core/text/Content';
import Title from '../../core/text/Title';
import Wrapper from '../../core/Wrapper';
import WebzineItem from '../../types/WebzineItem';
import { Card, Col, Row } from 'antd';
import ViewModal from './ViewModal';

const { Meta } = Card;

type WebzineProps = {
  title: string;
  items: WebzineItem[];
};

function Webzine({ title, items }: WebzineProps) {
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
        <Row justify="center" align="top">
          {items.map((item, index) => {
            return (
              <Col
                key={index}
                style={{
                  display: 'inherit',
                  justifyContent: 'center',
                }}
                xs={{ span: 24 }}
                lg={{ span: 24 / items.length }}
              >
                <Card
                  style={{
                    minWidth: '22.5%',
                    margin: window.innerWidth > 768 ? '16px 25% 16px 25%' : '16px 10% 16px 10%',
                    lineHeight: 1.2,
                  }}
                  cover={
                    <a onClick={() => onClickHandler(index)}>
                      <img
                        style={{ width: '100%', padding: 1 }}
                        alt={item.title}
                        src={item.image}
                      />
                    </a>
                  }
                >
                  <Meta
                    title={<b style={{ fontSize: '1.3em', lineHeight: 2 }}>{item.title}</b>}
                    description={
                      <div style={{ color: '#000000', opacity: 0.79 }}>
                        <span>{item.subTitle}</span>
                      </div>
                    }
                  />
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

export default Webzine;
