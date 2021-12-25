import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(1fr, 2fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

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
  max-width: 540px;
  padding-top: 0;
  /* padding-bottom: 60px; */
`;

export const TopLine = styled.p`
  color: #ff6c4f;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeadingMain = styled.h1`
  text-align: center;
  margin-top: 48px;
  margin-bottom: 24px;
  font-size: 40px;
  color: #010606;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 100%;
  margin-bottom: 35px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  display: flex;
  min-width: 120px;
  max-width: 260px;
  height: 100%;
  float: right;
  padding-right: 40px;


  @media screen and (max-width: 768px) {
    max-width: 140px;
  }

  @media screen and (max-width: 580px) {
    min-width: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;

  @media screen and (max-width: 580px) {
    display: none;
  }
`;
