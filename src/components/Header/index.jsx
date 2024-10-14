import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu } from "./styles";

const Header = () => {
  const handleLogooff = () => {
    localStorage.clear();
    window.location.href = "/login";
  }

  const userLogged = localStorage.getItem('Yt');

  return (
    <Container>
      <Logo>
        <Link to='/'><img src={LogoImg} alt="" /></Link>
      </Logo>
      <Menu>
        <ul>
          {!userLogged ?
            <li><Link to='/login'
            style={{
              color:'black',
            }}
            >
            <span>Cadastro/Login</span></Link></li>
            :
            <li><Link 
            onClick={handleLogooff}
            style={{
              color:'black',
            }}
            ><span>Sair</span></Link></li>
          }
        </ul>
      </Menu>
    </Container>
  )
}

export default Header;