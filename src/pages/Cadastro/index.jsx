import React from'react';
import { Container, ContainerForm, Form, Label, Links, Mask, Select } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';




const Cadastro = () => {
  return (
    <Container>
      <h2>Crie sua conta</h2>
      <p>Cadastre-se agora!</p>
      <ContainerForm>
        <Form>
            <Label for="username">Usuário</Label>
            <Input type="text" name="username" id="name" placeholder="Usuário" autocomplete="off" required />
            <Label for="CPF">CPF</Label>
            <Mask mask="999.999.999-99" name="CPF" id="cpf" placeholder="Digite seu CPF" autocomplete="off" required />
            <Label for="birthdate">Data de Nascimento</Label>
            <Input type="date" name="birthdate" id="birthdate" placeholder="Digite sua Data de Nascimento" required />
            <Label for="genero"> Gênero </Label>
            <Select name="genero" id="genero" placeholder="Selecione seu Gênero" required>
              <option className='selecione' value="" disabled selected>Selecione seu gênero</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
              <option value="3">Outros</option>
            </Select>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" placeholder="Digite seu Email" autocomplete="off" required />
            <Label for="password">Senha</Label>
            <Input type="password" name="password" id="password" placeholder="Digite sua Senha" autocomplete="off" required/>
            <Links>
            Já possuís conta? <a href="/login">Faça Login</a>
            </Links>
            <Button>Entrar</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default Cadastro;