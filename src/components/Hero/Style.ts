import styled from 'styled-components';

// export const Container = styled.div`
  
// `;

export const InfoSec = styled.div`
  color: #f9f9f9;
  padding: 160px 0;
  background: linear-gradient(106.42deg, #FE950A 0%, #FF342E 116.6%);
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

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Text = styled.div`
  margin-bottom: 24px;
  font-size: 50px;
  line-height: 34px;
  font-weight: 400;

  span {
    font-weight: 600;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  background-color: #f9f9f9;
  white-space: nowrap;
  padding: 10px 20px;
  color: #FE950A;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease;
    transform: scale(1.1);
  }
`;

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

