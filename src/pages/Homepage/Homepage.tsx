import React from 'react';
import Hero from '../../components/Hero/Hero';
import { Container } from '../../GlobalStyle';
import Cell from '../../images/cell.png';
import Google from '../../images/googleplay.svg';
import Apple from '../../images/appstore.svg';
import { Link } from 'react-router-dom';

import { 
   InfoSec,
   InfoRow,
   InfoColumn,
   TextWrapper,
   Text,
   GPlay,
   AppStore,
   StoreLinks,
   ImgWrapper,
   Img
 } from './HomeStyle';

const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <InfoSec>
      <Container>
        <InfoRow>

          <InfoColumn>
            <ImgWrapper>
              <Img src={Cell} alt="Img"/>
            </ImgWrapper>
          </InfoColumn>

          <InfoColumn>
            <TextWrapper>
              <Text>ACESSE NOSSO APP </Text>
              <StoreLinks>
                <Link to="/">
                  <GPlay src={Google} alt="Google Play"/>
                </Link>
                <Link to="/">
                  <AppStore src={Apple} alt="Apple Store"/>
                </Link>
              </StoreLinks>
            </TextWrapper>
          </InfoColumn>

        </InfoRow>
      </Container>
    </InfoSec>
    </>
  );
}

export default Homepage;