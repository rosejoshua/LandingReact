import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const ProjectsContainer = styled.div`
min-height: 97vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
padding-top: 20px;
padding-bottom: 60px;

/* @media screen and (max-width: 768px) {
    min-height: 150vh;
}

@media screen and (max-width: 480px) {
    height: 180vh; */
`;

export const ProjectsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 24px;
  padding: 0 50px;

  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  } */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    /* grid-template-columns: 1fr; */
    padding: 0 20px;
    grid-gap: 16px;
  }
`;

export const ProjectsCard = styled.div`
  position: relative;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  min-height: 250px;
  /* padding: 30px; */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 950px) {
    min-height: 330px;
  }

  @media screen and (max-width: 768px) {
    min-height: 300px;
  }

  /* @media screen and (max-width: 500px) {
    min-height: 300px;
  } */

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  `;
  
  export const ProjectsCardRed = styled(ProjectsCard)`
    background: #ff795e;
  `;
  export const ProjectsCardAmber = styled(ProjectsCard)`
    background: #fcc84e;
  `;
  export const ProjectsCardGreen = styled(ProjectsCard)`
    background: #6bff84;
  `;

export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  display: none;
`;

export const ProjectsH1 = styled.h1`
  font-size: 40px;
  color: #fff;
  padding-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-top: 0px;
    padding-bottom: 32px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  background: #f7f8fa;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

export const ProjectsH2 = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const Subheader = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 10px;
  text-align: center;
  padding-bottom: 16px;
`;

export const Holder = styled.span`
font-size: 0.9rem;
display: flex;
`

export const SubheadingH2Red = styled.h2`
color: #ff795e;
`
export const SubheadingH2Amber = styled.h2`
color: #fcc84e;
`
export const SubheadingH2Green = styled.h2`
color: #6bff84;
`
export const SubheadingH2White = styled.h2`
margin-left: auto;
margin-right: auto;
color: #fff;
`

export const ProjectsP = styled.p`
  font-size: 1.1rem;
  text-align: center;

  @media screen and (max-width: 950px) {
    /* font-size: 1.1rem; */
  }

  @media screen and (max-width: 500px) {
    /* grid-template-columns: 1fr; */
    font-size: 1rem;
  }
`;

export const BtnWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialLink = styled.a`
  color: #000;
  font-size: 24px;
  position: absolute;
  top: 3px;
  right: 3px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
