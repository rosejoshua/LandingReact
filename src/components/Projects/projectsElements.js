import styled from 'styled-components';

export const ProjectsContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px) {
    height: 150vh;
}

@media screen and (max-width: 480px) {
    height: 180vh;
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  } */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    /* grid-template-columns: 1fr; */
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  min-height: 330px;
  max-height: 340px;
  padding: 30px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsCardRed = styled(ProjectsCard)`
  background: #ff9191;
`;
export const ProjectsCardAmber = styled(ProjectsCard)`
  background: #ffd582;
`;
export const ProjectsCardGreen = styled(ProjectsCard)`
  background: #a6f7b3;
`;

export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  display: none;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    /* grid-template-columns: 1fr; */
    font-size: 1rem;
  }
`;

export const SocialLink = styled.a`
  color: #000;
  font-size: 24px;
  position: absolute;
  top: 3px;
  right: 3px;
`;
