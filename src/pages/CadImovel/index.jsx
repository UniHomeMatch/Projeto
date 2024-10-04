import React, { useState } from "react";
import { Container, Form, Label, Right, Section, Mask } from "./Styles";
import Input from "../../components/Input"; 
import api from "../../services/Api";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function CadImovel() {

    const [thumb, setThumb] = useState('');
    const [images, setImages] = useState('');
    const [predio, setPredio] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [area, setArea] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [generoId, setGenero] = useState('');

    const InputValue = (e) => setGenero({ ...data, generoId: e.target.value });

    const data = {
        thumb,
        images,
        predio,
        description,
        price,
        cep,
        logradouro,
        numero,
        bairro,
        complemento,
        cidade,
        uf,
        area,
        bedrooms,
        bathrooms,
        name,
        phone,
        email,
        generoId,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const headers = {
            'headers': {
                'content-type': 'multipart/form-data'
            }
        }

        api.post('/createimobi', data, headers)
            .then((response) => {
                toast(response.data.message);
            })
            .catch((response) => {
                console.log(response.response.data.message);
            });
    }

    return (
        <Container>
            Cadastre seu ánuncio agora!
            <Right>
                <Form onSubmit={handleSubmit} autoComplete="off">

                    {/* Seção de Imagem */}
                    <Section>
                        <h3>Imagem</h3>
                        <Label>Capa do Anúncio:</Label>
                        <Input
                            type="file"
                            name="thumb"
                            onChange={(e) => setThumb(e.target.files[0])}
                        />
                        <Label>Fotos do Apartamento:</Label>
                        <Input
                            type="file"
                            multiple
                            name="images"
                            onChange={(e) => setImages(e.target.files[0])}
                        />
                    </Section>

                    {/* Seção de Descrições */}
                    <Section>
                        <h3>Descrições</h3>
                        <Label>Nome do Prédio:</Label>
                        <Input
                            type="text"
                            name="predio"
                            placeholder="Informe o Prédio ou Condominio"
                            onChange={(e) => setPredio(e.target.value)}
                        />
                        <Label>Descrição do Imóvel:</Label>
                        <Input
                            type="text"
                            name="description"
                            placeholder="Informe a descrição do imóvel"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Label>Valor:</Label>
                        <Input
                            type="text"
                            name="price"
                            placeholder="Informe o valor do imóvel"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <Label>Área:</Label>
                        <Input
                            type="text"
                            name="area"
                            maxLength="3"
                            placeholder="Informe a área total do imóvel"
                            onChange={(e) => setArea(e.target.value)}
                        />
                        <Label>Quantidade de Quartos:</Label>
                        <Input
                            type="text"
                            name="bedrooms"
                            placeholder="Informe a quantidade de quartos"
                            onChange={(e) => setBedrooms(e.target.value)}
                        />
                        <Label>Quantidade de Banheiros:</Label>
                        <Input
                            type="text"
                            name="bathrooms"
                            placeholder="Informe a quantidade de banheiros"
                            onChange={(e) => setBathrooms(e.target.value)}
                        />
                        <Label>Gênero de Preferência:</Label>
                        <div>
                        <RadioGroup name="generoId" onChange={InputValue} required style={{ marginBottom: 10 }}>
                            <FormControlLabel value="1" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="2" control={<Radio />} label="Feminino" />
                            <FormControlLabel value="3" control={<Radio />} label="Todos" />
                        </RadioGroup>
                        </div>
                    </Section>

                    {/* Seção de Endereço */}
                    <Section>
                        <h3>Endereço</h3>
                        <Label>CEP:</Label>
                        <Mask
                            mask={"99999-999"}
                            type="text"
                            name="cep"
                            placeholder="Informe o CEP"
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <Label>Logradouro:</Label>
                        <Input
                            type="text"
                            name="logradouro"
                            placeholder="Informe o logradouro"
                            onChange={(e) => setLogradouro(e.target.value)}
                        />
                        <Label>Número:</Label>
                        <Input
                            type="text"
                            name="numero"
                            placeholder="Informe o número"
                            onChange={(e) => setNumero(e.target.value)}
                        />
                        <Label>Bairro:</Label>
                        <Input
                            type="text"
                            name="bairro"
                            placeholder="Informe o bairro"
                            onChange={(e) => setBairro(e.target.value)}
                        />
                        <Label>Complemento:</Label>
                        <Input
                            type="text"
                            name="complemento"
                            placeholder="Informe o complemento"
                            onChange={(e) => setComplemento(e.target.value)}
                        />
                        <Label>Cidade:</Label>
                        <Input
                            type="text"
                            name="cidade"
                            placeholder="Informe a cidade"
                            onChange={(e) => setCidade(e.target.value)}
                        />
                        <Label>UF:</Label>
                        <Input
                            type="text"
                            name="uf"
                            placeholder="Informe o UF"
                            onChange={(e) => setUf(e.target.value)}
                        />
                    </Section>

                    {/* Seção de Proprietário */}
                    <Section>
                        <h3>Proprietário</h3>
                        <Label>Nome:</Label>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Informe seu nome"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Label>Telefone:</Label>
                        <Mask
                            mask={"(99) 99999-9999"}
                            type="text"
                            name="phone"
                            placeholder="Informe o telefone de contato"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Label>E-mail:</Label>
                        <Input
                            type="text"
                            name="email"
                            placeholder="Informe o E-mail para contato"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Section>

                    <Button type="submit">Cadastrar imóvel</Button>
                </Form>
            </Right>
        </Container>
    );
}

export default CadImovel;
