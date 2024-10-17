import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu, ProfileIcon, ModalContainer, ModalContent } from "./styles";
import api from '../../services/Api';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  const [userProfile, setUserProfile] = useState({
    name: "Nome do usuário",  
    email: "Email não informado",
    profilePic: ""
  });

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState(userProfile.profilePic);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Função para buscar os dados do usuário
  useEffect(() => {
    const ytData = JSON.parse(localStorage.getItem('Yt'));

    if (!ytData || !ytData.id || !ytData.token) {
      console.error("Usuário não encontrado ou token ausente.");
      return;
    }

    const userId = ytData.id;
    const token = ytData.token;

    // Fazendo a requisição GET para obter os dados do usuário pelo ID
    api.get(`/listusers/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`  // Enviando o token no cabeçalho
      }
    })
    .then((response) => {
      // Atualizando o estado com os dados recebidos
      const userData = response.data;
      setUserProfile({
        name: userData.name || "Nome do usuário",  
        email: userData.email || "Email não informado",
        profilePic: userData.profile || ""
      });
      setProfilePic(userData.profile || "");
    })
    .catch((error) => {
      console.error('Erro ao buscar os dados do usuário:', error.response ? error.response.data : error.message);
    });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ytData = JSON.parse(localStorage.getItem('Yt'));
  
    if (!ytData || !ytData.id || !ytData.token) {
      console.error("Usuário não encontrado ou token ausente.");
      return;
    }
  
    const userId = ytData.id;
    const token = ytData.token;
  
    const updatedName = e.target.name.value;  // Pegando o valor do nome
    const updatedEmail = e.target.email.value;
  
    // Verificação de senhas antes de enviar para a API
    if (password && password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
  
    // Fazendo a requisição PUT para atualizar o usuário
    api.put(`/updateusers/${userId}`, 
      {
        name: updatedName,
        email: updatedEmail,
        profilePic,
        password,  // Enviando a nova senha (se estiver presente)
        confirmPassword  // Confirmando a senha
      },
      {
        headers: {
          Authorization: `Bearer ${token}`  
        }
      }
    )
    .then((response) => {
      console.log('Dados atualizados com sucesso:', response.data);
      setEditing(false);
  
      // Atualize o estado com os novos dados do usuário
      setUserProfile({
        name: updatedName,
        email: updatedEmail,
        profilePic
      });
    })
    .catch((error) => {
      console.error('Erro ao atualizar os dados do usuário:', error.response ? error.response.data : error.message);
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

                        <input type="text" name="name" defaultValue={userProfile.name} placeholder="Nome" />
                        <input type="email" name="email" defaultValue={userProfile.email} placeholder="E-mail" />

                        {/* Campo de senha e confirmação */}
                        <input
                          type="password"
                          name="password"
                          placeholder="Nova Senha"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirme a Nova Senha"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button type="submit">Salvar</button>
                        <button type="button" onClick={() => setEditing(false)}>Cancelar</button>
                      </form>
                    ) : (
                      <>
                        <Avatar alt={userProfile.name} src={userProfile.profilePic} sx={{ width: 50, height: 50 }} />
                        <h3>{userProfile.name}</h3>  
                        <p>{userProfile.email}</p>  

                        <Link to="/mensagens">Mensagens</Link>
                        <Link to="/cadastro-imovel">Anúncios</Link>

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
  