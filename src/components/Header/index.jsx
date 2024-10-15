
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu, ProfileIcon, ModalContainer, ModalContent } from "./styles"; //adição do icone do perfil, o container do modal e seu conteudo
import api from '../../services/Api';
import Avatar from '@mui/material/Avatar';
const Header = () => {
  const [showModal, setShowModal] = useState(false); //adicionado para controlar a vizu do modal na hora de ver e desver(vcs entenderam, bjs) 

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const userId = localStorage.getItem('userId');
  
    api.get(`/listusers/${userId}`) // Corrigido: utilize a URL diretamente
    .then((response) => {
        console.log('Dados do usuário:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados do usuário:', error);
      });
  };
  
  const userLogged = localStorage.getItem('Yt'); 
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const userProfile = {
    name: user.name,
    email: user.email,
    profilePic: user.profile 
  };
  
  return (
    <Container>
      <Logo>
        <Link to='/'><img src={LogoImg} alt="Logo" /></Link>
      </Logo>
      <Menu>
        <ul>
          {!userLogged ? (
            <li><Link to='/login'><span>Cadastro/Login</span></Link></li>
          ) : (
            <>
              <ProfileIcon onClick={() => setShowModal(!showModal)}> 
                <img src={userProfile.profilePic} alt="Foto do Usuário" />
              </ProfileIcon>
              
              {showModal && ( 
                <ModalContainer onClick={() => setShowModal(false)}>
                  <ModalContent onClick={(e) => e.stopPropagation()}>
                    <Avatar alt={userProfile.name} src={userProfile.profilePic} />
                    <h3>{userProfile.name}</h3>
                    <p>{userProfile.email}</p>

                  {/*adicionei para ter redirecionamento dentro do modal */}
                    <Link to="/mensagens">Mensagens</Link>
                    <Link to="/anuncios">Anúncios</Link>
                    <Link to="/editar-perfil">Editar Perfil</Link>
                    <button onClick={handleLogout}>Logout</button>
                  </ModalContent>
                </ModalContainer>
              )}
            </>
          )}
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
