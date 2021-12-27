import styled from 'styled-components';

export const AboutContainer = styled.div`
  color: #fff;
  background: #010606;
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  
  /* @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
`;

export const AboutWrapper = styled.div`
  /* display: grid; */
  height: 100%
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  /* border: solid;
  border-color: white;
  border-width: 3px; */
`;


export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.4;

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const TextWrapper2 = styled.div`
  max-width: 80%;
  position: absolute;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  background: rgba(0, 0, 0, 0.7);
  /* color: black; */
  line-height: 1.5;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;



export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  padding: 48px;
  font-size: 40px;
  color: #f7f8fa;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
position: relative;
  max-width: 1100px;
  height: 100%;
  text-align: center;
`;

export const Img = styled.img`
  max-height: 80vh;
  border-radius: 5px;
  max-width: 100%
`;
