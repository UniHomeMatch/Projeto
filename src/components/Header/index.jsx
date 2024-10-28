import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu, ModalContainer, ModalContent } from "./styles";
import api from '../../services/Api';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  const [userProfile, setUserProfile] = useState({
    name: "Nome do usuário",
    email: "Email não informado",
    profileImg: ""
  });

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const fetchUserProfile = () => {
    const ytData = JSON.parse(localStorage.getItem('Yt'));

    if (!ytData || !ytData.id || !ytData.token) {
      console.error("Usuário não encontrado ou token ausente.");
      return;
    }

    const parsedData = JSON.parse(ytData);

    if (!parsedData.id || !parsedData.token) {
      console.error("Usuário não encontrado ou token ausente.");
    }

    const userId = parsedData.id;
    const token = parsedData.token;

    // Fazendo a requisição GET para obter os dados do usuário pelo ID
    api.get(`/listusers/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`  // Enviando o token no cabeçalho
      }
    })
    .then((response) => {
      const userData = response.data;
      setUserProfile({
        name: userData.name || "Nome do usuário",  
        email: userData.email || "Email não informado",
        profileImg: userData.profileImg || ""
      });
      setProfileImg(userData.profileImg || "");
    })
    .catch((error) => {
      console.error('Erro ao buscar os dados do usuário:', error.response ? error.response.data : error.message);
    });
  };

  useEffect(() => {
    fetchUserProfile();
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

    const updatedName = e.target.name.value;
    const updatedEmail = e.target.email.value;
    const updateProfile = e.target.profile.files[0];

    if (password && password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const formData = new FormData();
    formData.append('name', updatedName);
    formData.append('email', updatedEmail);
    if (password) {
      formData.append('password', password);
      formData.append('confirmPassword', confirmPassword);
    }
  
    if (profileImg) {
      formData.append('profileImg', profileImg);
    }

    api.put(`/updateusers/${userId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
  })
    .then(() => {
      console.log('Dados atualizados com sucesso');
      setEditing(false);
      setShowModal(false);

      // Atualiza o perfil do usuário para refletir a mudança imediatamente
      fetchUserProfile();
    })
    .catch((error) => {
      console.error('Erro ao atualizar os dados do usuário:', error.response ? error.response.data : error.message);
      if (error.response?.data?.includes('Invalid file format')) {
        alert('Por favor, selecione um arquivo de imagem válido.');
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(file);
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
                src={userProfile.profileImg}
                sx={{ width: 50, height: 50 }}
              />

              {showModal && (
                <ModalContainer onClick={() => setShowModal(false)}>
                  <ModalContent onClick={(e) => e.stopPropagation()}>
                    {editing ? (
                      <form onSubmit={handleSubmit}>
                        <h3>Editar Perfil</h3>

                        <div onClick={() => document.getElementById('fileInput').click()}>
                          <Avatar 
                            alt={userProfile.name}
                            src={profileImg instanceof File ? URL.createObjectURL(profileImg) : userProfile.profileImg}
                            sx={{ width: 50, height: 50, cursor: 'pointer' }}
                          />
                        </div>

                        <input
                          id="fileInput"
                          name="profileImg"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setProfile(e.target.files[0])}
                          style={{ display: 'none' }}
                        />

                        <input type="text" name="name" defaultValue={userProfile.name} placeholder="Nome" />
                        <input type="email" name="email" defaultValue={userProfile.email} placeholder="E-mail" />

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
                        <Avatar alt={userProfile.name} src={userProfile.profileImg} sx={{ width: 50, height: 50 }} />
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
