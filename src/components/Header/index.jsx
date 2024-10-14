import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu, ProfileIcon, ModalContainer, ModalContent } from "./styles"; //adição do icone do perfil, o container do modal e seu conteudo

const Header = () => {
  const [showModal, setShowModal] = useState(false); //adicionado para controlar a vizu do modal na hora de ver e desver(vcs entenderam, bjs) 

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const userLogged = localStorage.getItem('Yt'); //adicionado para que seja exibido somente quando logado(verificação)
  const userProfile = { //precisa do back mas seria mais ou menos isso para o perfil
    name: "user.name",
    email: "user.email",
    profilePic: "user.profile" //adicionado para foto de perfil do usuário
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
            //adicionado para exibir o perfil
            <>
              <ProfileIcon onClick={() => setShowModal(!showModal)}> 
                <img src={userProfile.profilePic} alt="Foto do Usuário" />
              </ProfileIcon>
              
              {showModal && ( 
                <ModalContainer onClick={() => setShowModal(false)}>
              
            {/*adicionei para que quando for clicar em algum espaço dentro do perfil ele não feche */}
                  <ModalContent onClick={(e) => e.stopPropagation()}>
                    {/*adicionei para exibir o conteudo do modal - nome, email e foto */}
                    <img src={userProfile.profilePic} alt="Foto do Usuário" />
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
