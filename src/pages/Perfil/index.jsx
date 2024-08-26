import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Form, Left, Message, Right } from "./styles";
import api from "../../services/Api";
import { toast } from "react-toastify";
import { GetLocalStorage } from "../../context/utils";

const Perfil = () => {

  const [thumb, setThumb] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState([]);

  const user = GetLocalStorage();
  const { id } = user;

  const data = {
    id,
    thumb,
    title,
    description,
    price,
    location,
    area,
    bedrooms,
    bathrooms,
    name,
    phone,
    email,
  }

  useEffect(() => {
    api.get(`/listmessage/${id}`)
      .then((response) => {
        setMessage(response.data.messagem);
      })
      .catch(() => {
        console.log("Erro: Erro ao listar mensagens")
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      'headers': {
        'content-type': 'multipart/form-data'
      }
    }

    api.post('/createimobi', data, headers)
      .then((response) => {
        if (!response.data.erro === true) {
          toast(response.data.message);
        } else {
          toast(response.data.message);
        }
      })
      .catch(() => {
        console.log("Erro: Erro ao cadastrar imóvel")
      });
  }

  return (
    <Container>
    <Left>
      <h2>Minhas mensagens</h2>
      {/* {message.map((item, index) => (
        <Message key={index}>
          <span>Nome: {item.client_name}</span>
          <span>Email: {item.client_email}</span>
          <p>{item.client_mensagem}</p>
        </Message>
      ))} */}
    </Left>
    <Right>
      <h2>Cadastrar imóveis</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="file"
          name="thumb"
          onChange={(e) => setThumb(e.target.files[0])}
        />
        <Input
          type="text"
          name="title"
          placeholder="Informe o título do anúncio:"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          name="location"
          placeholder="Informe o endereço do imóvel:"
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          type="text"
          name="price"
          placeholder="Informe o valor do imóvel:"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="text"
          name="area"
          placeholder="Metragem do imóvel:"
          onChange={(e) => setArea(e.target.value)}
        />
        <Input
          type="text"
          name="bedrooms"
          placeholder="Informe a quantidade de quartos:"
          onChange={(e) => setBedrooms(e.target.value)}
        />
        <Input
          type="text"
          name="bathrooms"
          placeholder="Informe a quantidade de banheiros:"
          onChange={(e) => setBathrooms(e.target.value)}
        />
        <Input
          type="text"
          name="description"
          placeholder="Descrição do imóvel:"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          name="name"
          placeholder="Informe seu nome:"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Informe o telefone de contato:"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type="text"
          name="email"
          placeholder="Informe o E-mail para contato:"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Cadastrar imóvel</Button>
      </Form>
    </Right>
  </Container>
  )
}

export default Perfil;