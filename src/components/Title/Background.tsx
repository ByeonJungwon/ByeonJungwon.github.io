import styled from 'styled-components';
import Thumbnail from '../../assets/Background_Thumbnail.jpg';

const Background = styled.video`
  background-image: url(${Thumbnail});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  opacity: 0.9;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  min-height: 480px;
`;

export default Background;
