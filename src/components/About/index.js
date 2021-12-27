import React from 'react';
import {
  AboutContainer,
  AboutWrapper,
  Heading,
  Img,
  ImgWrap,
  TextWrapper,
  TextWrapper2,
} from './aboutElements';
import {text} from './data';

const About = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutWrapper>
          <Heading>About Me</Heading>
          <ImgWrap>
          <Img src='/images/collage.png' />
          <TextWrapper2>{text.value}</TextWrapper2>
          </ImgWrap>
          <TextWrapper>{text.value}</TextWrapper>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
