import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu, ProfileIcon, ModalContainer, ModalContent } from "./styles";
import api from '../../services/Api';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const userProfile = {
    name: user.name || "Nome do usuário",  
    email: user.email || "Email não informado",
    profilePic: user.profile || ""  
  };

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

    api.put(`/updateUser/${userId}`, { email: e.target.email.value, profilePic })  
      .then((response) => {
        console.log('Dados atualizados:', response.data);
        setEditing(false); 
      })
      .catch((error) => {
        console.error('Erro ao atualizar os dados do usuário:', error);
      });
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

  const handleEditProfile = () => {
    setEditing(true);
  };

  return (
    <Container>
      <Logo>
        <Link to='/'><img src={LogoImg} alt="Logo" /></Link>
      </Logo>
      <Menu>
        <ul>
          {!localStorage.getItem('Yt') ? (
            <li><Link to='/login'><span>Cadastro/Login</span></Link></li>
          ) : (
            <>
              <Avatar
                onClick={() => setShowModal(!showModal)}
                alt="Avatar"
                src={userProfile.profilePic}
                sx={{ width: 50, height: 50 }}
              />

              {showModal && (
                <ModalContainer onClick={() => setShowModal(false)}>
                  <ModalContent onClick={(e) => e.stopPropagation()}>
                    {editing ? (
                      <form onSubmit={handleSubmit}>
                        <h3>Editar Perfil</h3>
                        
                        {/* Avatar clicável para alterar a imagem */}
                        <div onClick={() => document.getElementById('fileInput').click()}>
                          <Avatar alt={userProfile.name} src={profilePic} sx={{ width: 50, height: 50, cursor: 'pointer' }} />
                        </div>

                        <input
                          id="fileInput"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          style={{ display: 'none' }}  
                        />

                        <input type="email" name="email" defaultValue={userProfile.email} placeholder="E-mail" />
                        <input type="password" name="password" placeholder="Nova Senha" />  

                        <button type="submit">Salvar</button>
                        <button type="button" onClick={() => setEditing(false)}>Cancelar</button>
                      </form>
                    ) : (
                      <>
                        <Avatar alt={userProfile.name} src={userProfile.profilePic} sx={{ width: 50, height: 50 }} />
                        <h3>{userProfile.name}</h3>  
                        <p>{userProfile.email}</p>  

                        <Link to="/mensagens">Mensagens</Link>
                        <Link to="/anuncios">Anúncios</Link>

                        <button onClick={handleEditProfile} style={{ marginRight: "10px" }}>Editar Perfil</button>  
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
