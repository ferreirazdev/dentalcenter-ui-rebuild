import styled from 'styled-components';


export const InfoSec = styled.div`
  color: #FE950A;
  padding: 160px 0;
  background: #f9f9f9;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Text = styled.div`
  margin-bottom: 54px;
  margin-left: 40px;
  font-size: 45px;
  line-height: 34px;
  font-weight: 700;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 600;
  }
`;


export const StoreLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin-bottom: -30px;
`;

export const GPlay = styled.img``;

export const AppStore = styled.img``;


export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;
  margin-top: -25px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

