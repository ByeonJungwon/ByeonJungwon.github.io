import * as React from 'react';
import Content from '../../core/text/Content';
import Title from '../../core/text/Title';
import Wrapper from '../../core/Wrapper';

type AboutProps = {
  title: string;
  contents: string[];
};

function About({ title, contents }: AboutProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content style={{ fontSize: '1.7em', lineHeight: 1.5 }}>
        {contents.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </Content>
    </Wrapper>
  );
}

export default About;
