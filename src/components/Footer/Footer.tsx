import React from 'react';
import Logo from '../../images/logo.svg'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormImput,
  Button,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>

      <FooterSubscription>
        <FooterSubHeading>
          FALE CONOSCO
        </FooterSubHeading>
        <FooterSubText>Insira sua mensagem abaixo:</FooterSubText>
        <Form>
          <FormImput className="grid1" name="nome" type="text" placeholder="Seu Nome"/>
          <FormImput className="grid2" name="email" type="email" placeholder="Seu Email"/>
          <FormImput className="grid3" name="message" type="text" placeholder="Sua Mensagem"/>
          <Button className="grid4" type="submit">Enviar</Button>
        </Form>
      </FooterSubscription>

      <FooterLinksContainer>
        <FooterLinksWrapper>

          <FooterLinkItems>
            <FooterLinkTitle>FALE COM A GENTE</FooterLinkTitle>
            <FooterLink to="/">Nosso Telefone</FooterLink>
            <FooterLink to="/">Nosso Endereço</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>SOBRE A DENTAL CENTER</FooterLinkTitle>
            <FooterLink to="/">Quem Somos</FooterLink>
            <FooterLink to="/">Nossas Políticas</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>NOSSOS SERVIÇOS</FooterLinkTitle>
            <FooterLink to="/">Planos Empresariais</FooterLink>
            <FooterLink to="/">Planos Individuais e Familiares</FooterLink>
          </FooterLinkItems>

        </FooterLinksWrapper>
      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrap>

          <SocialLogo to="/">
            <SocialIcon src={Logo}/>
          </SocialLogo>
          
          <WebsiteRights>Dental Center © 2021</WebsiteRights>

          <SocialIcons>
            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Instagram">
              <FaInstagram  />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>

        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;