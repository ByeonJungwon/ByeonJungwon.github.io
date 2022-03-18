import * as React from 'react';
import Content from '../../core/text/Content';
import Title from '../../core/text/Title';
import Wrapper from '../../core/Wrapper';
import WebzineItem from '../../types/WebzineItem';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

type BrandedContentProps = {
  title: string;
  items: WebzineItem[];
};

function BrandedContent({ title, items }: BrandedContentProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <Row justify="center" align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {items.map((item, index) => {
            return (
              <Col
                key={index}
                style={{
                  display: 'inherit',
                  justifyContent: 'center',
                }}
              >
                <Card
                  style={{
                    minWidth: '30%',
                    margin: window.innerWidth > 768 ? '16px 25% 16px 25%' : '16px 10% 16px 10%',
                    lineHeight: 1.2,
                  }}
                  cover={
                    <a href={item.url} target="_blank">
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
    </Wrapper>
  );
}

export default BrandedContent;
