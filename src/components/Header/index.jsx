
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu, ProfileIcon, ModalContainer, ModalContent } from "./styles"; //adição do icone do perfil, o container do modal e seu conteudo
import api from '../../services/Api';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  const [showModal, setShowModal] = useState(false); //adicionado para controlar a vizu do modal na hora de ver e desver(vcs entenderam, bjs) 
  const [editing, setEditing] = useState(false); // adicionado para edição dentro do próprio modal

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
          {!userLogged ? (
            <li><Link to='/login'><span>Cadastro/Login</span></Link></li>
          ) : (
            <>
              <ProfileIcon onClick={() => setShowModal(!showModal)}> 
                <img src={userProfile.profilePic} />
              </ProfileIcon>
              
              {showModal && ( 
                <ModalContainer onClick={() => setShowModal(false)}>
                  <ModalContent onClick={(e) => e.stopPropagation()}className={editing ? 'editing' : ''}>
                  {editing ? ( 
                    //adicionei o mini forms dentro do modal para fazer a edição dentro dele mesmo
                    <form onSubmit={handleSubmit}>
                    <h3>Editar Perfil</h3>
                    {/* Campo para editar a foto com pré-visualização */}
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setProfilePic(reader.result); // Atualiza o estado com a nova imagem
                          };
                          reader.readAsDataURL(file);
                        }
                      }} 
                    />
                    {/* Exibição do avatar com a nova imagem (ou a atual se não houver) */}
                    <Avatar alt={userProfile.name} src={profilePic || userProfile.profilePic} />
                    <input type="email" defaultValue={userProfile.email} placeholder="E-mail" /> {/* Campo para editar o e-mail */}
                    <input type="password" placeholder="Nova Senha" /> {/* Campo para nova senha */}
                    <button type="submit">Salvar</button> {/* Botão para salvar as alterações */}
                    <button type="button" onClick={() => setEditing(false)}>Cancelar</button> {/* Botão para cancelar a edição */}
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
