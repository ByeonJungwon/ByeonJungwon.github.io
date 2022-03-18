import * as React from 'react';
import { Card, Col, Row } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import Content from '../../core/text/Content';
import Title from '../../core/text/Title';
import Wrapper from '../../core/Wrapper';
import ProjectItem from '../../types/ProjectItem';

const { Meta } = Card;

type ProjectProps = {
  title: string;
  items: ProjectItem[];
};

function Project({ title, items }: ProjectProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <Row justify="center" align="top">
          <Col style={{ textAlign: 'left', padding: 32 }}>
            {items.map((item, itemIndex) => {
              return (
                <div key={itemIndex} style={{ marginTop: itemIndex !== 0 ? 64 : 0 }}>
                  <div style={{ lineHeight: 1.0 }}>
                    <p style={{ fontWeight: 'bold', fontSize: '1.6em' }}>{item.title}</p>
                    <p style={{ opacity: 0.9 }}>{item.description}</p>
                    <p style={{ opacity: 0.76 }}>
                      <CalendarOutlined
                        style={{ color: '#B0BEC5', fontSize: '16px', paddingRight: 8 }}
                      />
                      {item.startDate} ~ {item.endDate}
                    </p>
                  </div>
                  {item.details.map((detail, detailIndex) => {
                    return (
                      <ul key={detailIndex}>
                        <li>
                          <b>{detail.title}</b>
                          {detail.contents.map((content, contentIndex) => {
                            return (
                              <ul style={{ wordBreak: 'break-all' }} key={contentIndex}>
                                {content}
                              </ul>
                            );
                          })}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </Col>
        </Row>
      </Content>
    </Wrapper>
  );
}

export default Project;
