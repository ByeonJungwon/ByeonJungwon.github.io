import * as React from 'react';
import CircleArrow from '../../core/icons/CircleArrow';
import Background from './Background';
import Description from './Description';
import Name from './Name';
import Wrapper from './Wrapper';
import Profile from '../../assets/Profile.mp4';
import Thumbnail from '../../assets/Background_Thumbnail.jpg';

type TitleProps = {
  name: string;
  descriptions: string[];
};

function Title({ name, descriptions }: TitleProps) {
  return (
    <>
      <Background autoPlay loop muted playsInline={true} poster={Thumbnail}>
        <source src={Profile} type="video/mp4" />
      </Background>
      <Wrapper>
        <Name>{name}</Name>
        <Description>
          {descriptions.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Description>
        <CircleArrow />
      </Wrapper>
    </>
  );
}

export default Title;
