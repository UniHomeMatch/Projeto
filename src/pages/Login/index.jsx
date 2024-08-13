import React, { useState } from'react';
import { Container, ContainerForm, Form, Label, Links } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AppAuth } from '../../context/AppAuth';




const Login = () => {

  const auth = AppAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await auth.authenticate(email, password);
  }

  return (
    <Container>
      <h2>Acesse sua conta</h2>
      <p>Entre com E-mail e senha!</p>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
            <Label>E-mail</Label>
            <Input type="text" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
            <Label>Senha</Label>
            <Input type="password" name="password" placeholder="Digite sua Senha" onChange={(e) => setPassword(e.target.value)}/>
            <Links>
            Ainda não possui conta? <a href="/cadastro">Entre já!</a>
            </Links>
            <Button type="submit">Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default Login;