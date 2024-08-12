import React, { useState } from'react';
import { Container, ContainerForm, Form, Label, Links, Mask, Select } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/Api';
import { toast } from 'react-toastify';




const Cadastro = () => {
  const [data, setData] = useState({
    name: '',
    cpf: '',
    birthdate: '',
    generoId: '',
    email: '',
    password: '',
  });

  const InputValue = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/createusers', data)

    // Verifica se o nome é válido
    // Verifica se o E-mail já está cadastrado
    // Verifica se o CPF já está cadastrado
    .then((response) => {
      if (data.name === '' || data.cpf === '' || data.birthdate === '' || data.generoId === '' || data.email === '' || data.password === '') {
        toast('Preencha todos os campos!');
      }else if (!response.data.error === true) {
        toast(response.data.message);
      }else{
        toast(response.data.message);
      }
    })
    .catch((response) => {
      if (response.response.status === 409) {
        toast(response.response.data.message);
      }
    })
    console.log(data);
  };

  return (
    <Container>
      <h2>Crie sua conta</h2>
      <p>Cadastre-se agora!</p>
      <ContainerForm>
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Label for="username">Usuário</Label>
            <Input type="text" name="name" id="name" placeholder="Usuário" onChange={InputValue} autocomplete="off" required />
            <Label for="CPF">CPF</Label>
            <Mask mask="999.999.999-99" name="cpf" id="cpf" placeholder="Digite seu CPF" onChange={InputValue} autocomplete="off" required />
            <Label for="birthdate">Data de Nascimento</Label>
            <Input type="date" name="birthdate" id="birthdate" placeholder="Digite sua Data de Nascimento" onChange={InputValue} required />
            <Label for="genero"> Gênero </Label>
            <Select name="generoId" id="generoId" placeholder="Selecione seu Gênero" onChange={InputValue} required>
              <option className='selecione' value="" disabled selected>Selecione seu gênero</option>
              <option value='1'>Masculino</option>
              <option value='2'>Feminino</option>
              <option value='3'>Outros</option>
            </Select>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" placeholder="Digite seu Email" onChange={InputValue} autocomplete="off" required />
            <Label for="password">Senha</Label>
            <Input type="password" name="password" id="password" placeholder="Digite sua Senha" onChange={InputValue} autocomplete="off" required/>
            <Links>
            Já possuís conta? <a href="/login">Faça Login</a>
            </Links>
            <Button type="submit">Entrar</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default Cadastro;