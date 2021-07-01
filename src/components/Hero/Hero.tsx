import React from 'react';
import Img1 from '../../images/img1.png';
import { Container } from '../../GlobalStyle';

import { 
  
   InfoSec,
   InfoRow,
   InfoColumn,
   TextWrapper,
   Text,
   Button,
   ImgWrapper,
   Img
 } from './Style';

const Hero: React.FC = () => {
  return (
    <InfoSec>
      <Container>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <Text>PLANOS PARA <span>VOCÊ</span></Text>
              <Text>SUA <span>FAMÍLIA</span> E</Text>
              <Text>SUA <span>EMPRESA</span></Text>
              <Button>CONFIRA NOSSOS PLANOS</Button>
            </TextWrapper>
          </InfoColumn>

          <InfoColumn>
            <ImgWrapper>
              <Img src={Img1} alt="Img"/>
            </ImgWrapper>
          </InfoColumn>

        </InfoRow>
      </Container>
    </InfoSec>
  );
}

export default Hero;