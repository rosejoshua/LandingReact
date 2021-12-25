import React from 'react';
import { workObjFour, workObjThree, workObjTwo, workObjFive } from './data';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  HeadingMain,
} from './workElements';

const WorkPage = ({ lightBg, id, } ) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <HeadingMain>Technical Work History</HeadingMain>
          <InfoSection {...workObjTwo}/>
          <InfoSection {...workObjThree}/>
          <InfoSection {...workObjFour}/>
          <InfoSection {...workObjFive}/>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

const InfoSection = ({
  imgStart,
  topLine,
  lightText,
  darkText,
  headline,
  description,
  description2,
  img,
  alt,
}) => {
  return (
    <>
      <InfoRow imgStart={imgStart}>
        <Column1>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
          </TextWrapper>
        </Column1>
        <Column2>
          <ImgWrap>
            <Img src={img} alt={alt} />
          </ImgWrap>
        </Column2>
      </InfoRow>
      <InfoRow>
      <Subtitle darkText={darkText}>{description}<br></br><br></br>{description2}</Subtitle>
      </InfoRow>
    </>
  );
};

export default WorkPage;
