import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu, ProfileIcon, ModalContainer, ModalContent } from "./styles";
import api from '../../services/Api';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState(userProfile.profilePic);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const userId = localStorage.getItem('userId');
  
    api.get(`/listusers/${userId}`)
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

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
                <img src={userProfile.profilePic} />
              </ProfileIcon>
              
              {showModal && ( 
                <ModalContainer onClick={() => setShowModal(false)}>
                  <ModalContent onClick={(e) => e.stopPropagation()}>
                  {editing ? ( 
                    <form onSubmit={handleSubmit}>
                      <h3>Editar Perfil</h3>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleFileChange}
                      />
                      
                      <Avatar alt={userProfile.name} src={profilePic} />
                      <input type="email" defaultValue={userProfile.email} placeholder="E-mail" />
                      <input type="password" placeholder="Nova Senha" /> 
                      <button type="submit">Salvar</button> 
                      <button type="button" onClick={() => setEditing(false)}>Cancelar</button> 
                    </form>
                  ) : (
                    <>
                      <Avatar alt={userProfile.name} src={userProfile.profilePic} />
                      <h3>{userProfile.name}</h3>
                      <p>{userProfile.email}</p>
                  
                      <Link to="/mensagens">Mensagens</Link>
                      <Link to="/anuncios">Anúncios</Link>

                      <button onClick={handleEditProfile}>Editar Perfil</button>
                      <button onClick={handleLogout}>Logout</button>
                      </>
                    )}
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

