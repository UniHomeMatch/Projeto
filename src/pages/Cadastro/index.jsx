import React from'react';
import { Container, ContainerForm, Form, Label, Links, Mask } from './styles';
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
            <Input type="text" name="username" id="username" placeholder="Usuário" autocomplete="off" required />
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" placeholder="Digite seu Email" autocomplete="off" required />
            <Label for="CPF">CPF</Label>
            <Mask mask="999.999.999-99" name="CPF" id="CPF" placeholder="Digite seu CPF" autocomplete="off" required />
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