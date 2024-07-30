import React from'react';
import { Container, ContainerForm, Form, Label, Links } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';


const Login = () => {
  return (
    <Container>
      <h2>Acesse sua conta</h2>
      <p>Entre com E-mail e senha!</p>
      <ContainerForm>
        <Form>
            <Label>E-mail</Label>
            <Input type="text" placeholder="Digite seu e-mail" />
            <Label>Senha</Label>
            <Input type="password" placeholder="Digite sua Senha"/>
            <Links>
            Ainda não possuís conta? <a href="/cadastro">Entre já!</a>
            </Links>
            <Button>Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default Login;