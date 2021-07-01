import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const FooterContainer = styled.div`
  background: linear-gradient(106.42deg, #FE950A 0%, #FF342E 116.6%);
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: 
  'Trebuchet MS', 
  'Lucida Sans Unicode', 
  'Lucida Grande', 'Lucida Sans', 
  Arial, sans-serif;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;

  .grid3 {
    grid-column: 1 / 3;
    padding: 50px 50px;
  }

  .grid4 {
    grid-column: 1 / 3;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%
  }
`;

export const FormImput = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  margin: 5px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #808080;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  margin-top: 5px;
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
    transform: scale(1.05);
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 280px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  text-align: center;

  &:hover {
    color: #FE950A;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  margin: 40px;
  font-size: 20px;
  padding-left: 30px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled.img`
  margin-right: 10px;
  width: 100px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-left: 20px;
`;

