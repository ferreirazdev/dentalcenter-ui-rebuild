import React from 'react';
import Logo from '../../images/logo.svg';


import { NavContainer, NavLogo, Img, Nav, NavMenu} from './Styles';

const Navbar: React.FC = () => {
  
  return ( 
    <>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>
            <Img src={Logo} />
          </NavLogo>

          <NavMenu>
            <div className="dropdown">
              <button className="dropbtn">Clientes</button>
              <div className="dropdown-content">
                <a href="/clientes/portal">Portal</a>
                <a href="/clientes/carteirinha">Carteirinha</a>
                <a href="/clientes/2viaboleto">2°Via do Boleto</a>
                <a href="/clientes/situacaoproposta">Situação da Proposta</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Empresa</button>
              <div className="dropdown-content">
                <a href="/clientes/gestoronline">Gestor Online</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Dentista</button>
              <div className="dropdown-content">
                <a href="/clientes/portaldentista">Portal Dentista</a>
                <a href="/clientes/portalclinica">Portal Clinica</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Corretor</button>
              <div className="dropdown-content">
                <a href="/clientes/gestao-vendas">Gestão de Vendas</a>
                <a href="/clientes/gestao-fin-corretora">Gestão Fin. Corretora</a>
                <a href="/clientes/gestao-fin-vendedor">Gestão Fin. Vendedor</a>
              </div>
            </div>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
}

export default Navbar;