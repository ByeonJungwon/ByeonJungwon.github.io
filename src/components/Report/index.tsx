import * as React from 'react';
import Content from '../../core/text/Content';
import Title from '../../core/text/Title';
import Wrapper from '../../core/Wrapper';
import ReportItem from '../../types/ReportItem';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

type ReportProps = {
  title: string;
  items: ReportItem[];
};

function Report({ title, items }: ReportProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <Row justify="center" align="top">
          {items.map((item, index) => {
            return (
              <Col
                key={index}
                xs={{ span: 24 }}
                lg={{ span: 24 / items.length }}
                style={{
                  display: 'inherit',
                  justifyContent: 'center',
                }}
              >
                <Card
                  style={{
                    minWidth: 320,
                    margin: window.innerWidth > 768 ? '0px 25% 0px 25%' : '16px 10% 16px 10%',
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
                        <span>{item.date}</span>
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

export default Report;
