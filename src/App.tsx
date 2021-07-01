import React from 'react';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Homepage from './pages/Homepage/Homepage';
import Clientes from './pages/Clientes/Clientes';
import Empresa from './pages/Empresa/Empresa';
import Dentista from './pages/Dentista/Dentista';
import Corretor from './pages/Corretor/Corretor';
import Portal from './pages/Clientes/Portal/Portal';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/clientes" exact component={Clientes} />
        <Route path="/clientes/portal" exact component={Portal} />
        <Route path="/empresa" exact component={Empresa} />
        <Route path="/dentista" exact component={Dentista} />
        <Route path="/corretor" exact component={Corretor} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
