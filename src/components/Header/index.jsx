import React from 'react';
import LogoImg  from '../../assets/logo.png';
import { Container, Logo, Menu } from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Logo>
               <Link to='/'><img src={LogoImg} alt="" /></Link>
            </Logo>
            <Menu>
            <Link to='/login'>
                <ul>
                <li><span>Cadastro/Login</span></li>
                </ul>
                </Link>
            </Menu>
        </Container>
    )
}

export default Header;