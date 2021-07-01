import { Link } from "react-router-dom";
import { Container } from '../../GlobalStyle';
import styled from "styled-components";



export const Nav = styled.nav`
  background: linear-gradient(106.42deg, #FE950A 0%, #FF342E 116.6%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  z-index: 999;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: center;
  margin-left: 20px;
  top: 0;
  align-items: center;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 110px;
  height: 80px;
  margin-right: 0.5rem;
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  align-items: center;
  margin-right: 2rem;

  .dropdown {
    position: relative;
    display: inline-block;
    justify-content: center;
    height: 80px;

    &:hover .dropdown-content {
      display: block;
    }

    &:hover .dropbtn {
      color: #FE950A;
      background: #FFF;
      border-radius: 50% 0% 0% 0%;
    }
  }
  
  .dropbtn {
    background-color: transparent;
    color: white;
    padding: 26px 20px;
    font-size: 18px;
    border: none;
    font-weight: 500;
    
  }

  .dropdown-content {
    display: none;
    margin-top: -15px;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 10px;
    text-align: left;
  }

  .dropdown-content a {
    color: #030303;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background: #fff;
      color: #FE950A;
      border-radius: 15px;
    }
  }

`;

