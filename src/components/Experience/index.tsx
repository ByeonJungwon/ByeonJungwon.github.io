import * as React from 'react';
import { Col, Row, Timeline } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import Title from '../../core/text/Title';
import Wrapper from '../../core/Wrapper';
import ExperienceItem from '../../types/ExperienceItem';
import Content from './Content';

type ExperienceProps = {
  title: string;
  items: ExperienceItem[];
};

function Experience({ title, items }: ExperienceProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        {items.map((item) => (
          <Row
            itemType="flex"
            align="middle"
            style={{
              textAlign: 'center',
              margin: window.innerWidth > 768 ? '32px 10%' : '16px 10%',
            }}
          >
            <Col span={24}>
              <img src={item.logo} style={{ width: '180px', margin: 32 }} />
              <h2 style={{ marginBottom: 8, fontWeight: 'bold', opacity: 0.85 }}>{item.title}</h2>
              <h3 style={{ marginBottom: 16, fontWeight: 'bold', opacity: 0.85 }}>
                {item.subTitle}
              </h3>
              <p style={{ opacity: 0.75 }}>{item.date}</p>
              <p>{item.descriptions}</p>
            </Col>
          </Row>
        ))}
      </Content>
    </Wrapper>
  );
}

export default Experience;
