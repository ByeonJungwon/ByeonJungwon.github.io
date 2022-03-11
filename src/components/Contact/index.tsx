import * as React from 'react';
import { LinkedinFilled, MailTwoTone } from '@ant-design/icons';
import Content from '../../core/text/Content';
import Title from '../../core/text/Title';
import Wrapper from '../../core/Wrapper';

type ContactProps = {
  title: string;
  email: string;
  linkedin: string;
};

function Contact({ title, email, linkedin }: ContactProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <a style={{ fontSize: '64px', marginRight: 32 }} href={`mailto:${email}`}>
          <MailTwoTone twoToneColor="#90A4AE" />
        </a>
        <a
          style={{ color: '#90A4AE', fontSize: '64px' }}
          href={`https://linkedin.com/in/${linkedin}`}
        >
          <LinkedinFilled />
        </a>
      </Content>
    </Wrapper>
  );
}

export default Contact;
