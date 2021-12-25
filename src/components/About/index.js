import React from 'react';
import { Button } from '../ButtonElements';
import {
  AboutContainer,
  Heading,
  InfoWrapper,
} from './aboutElements';

const About = () => {
  return (
    <>
      <AboutContainer id='about'>
        <InfoWrapper>
          <Heading>About Me</Heading>

          I'm an infinitely curious wanderer trying my best to be a good member of my community. 

        </InfoWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
