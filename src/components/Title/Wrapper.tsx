import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: -1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff;
  animation: fadein 1.5s;
  -moz-animation: fadein 1.5s; /* Firefox */
  -webkit-animation: fadein 1.5s; /* Safari and Chrome */
  -o-animation: fadein 1.5s; /* Opera */
`;

export default Wrapper;
