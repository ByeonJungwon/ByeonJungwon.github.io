import { Layout } from 'antd';
import styled from 'styled-components';

const { Footer: AntdFooter } = Layout;

const Footer = styled(AntdFooter)`
  margin-top: 64px;
  background: rgb(238, 238, 238);
  opacity: 0.6;
  text-align: center;
`;

export default Footer;
