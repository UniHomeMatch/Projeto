import React, { Fragment, useEffect, useState } from 'react';
import { Container, Description, Left, MapImg, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from './styles';
import TopBanner from '../../components/TopBanner';
import { IoBedSharp } from 'react-icons/io5';
import { FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { ImEnlarge } from 'react-icons/im';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import { toast } from "react-toastify";
import api, { urlApi } from '../../services/Api';
import { useParams } from 'react-router-dom';
import { FaMapLocationDot } from 'react-icons/fa6';

const Imobi = () => {
    const { slug } = useParams();
    const [dataImobi, setDataImobi] = useState({});
    const [client_name, setClientName] = useState('');
    const [client_email, setClientEmail] = useState('');
    const [client_mensagem, setClientMensagem] = useState('');
    const [client_telefone, setClientTelefone] = useState('');

    // Função assíncrona para buscar os dados do imóvel
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/listimobi/${slug}`);
                setDataImobi(response.data);
            } catch (error) {
                console.log("Erro: Erro ao listar imóvel");
            }
        };
        fetchData();
    }, [slug]);

    // Validação e envio da mensagem
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!client_name || !client_email || !client_mensagem || !client_telefone) {
            toast.error('Preencha todos os campos!');
            return;
        }

        const dataMessage = {
            client_name,
            client_email,
            client_mensagem,
            client_telefone,
            userId: dataImobi.userId
        };

        api.post('/createmessage', dataMessage)
            .then((response) => {
                toast.success(response.data.message);
            })
            .catch(() => {
                toast.error('Erro no sistema');
            });
    };

    // Verificação para exibir "Carregando..." enquanto os dados não foram carregados
    if (Object.keys(dataImobi).length === 0) {
        return <div>Carregando...</div>;
    }

    const { predio, description, thumb, price, logradouro, numero, area, bedrooms, bathrooms, name, phone, email, userId } = dataImobi;

    return (
        <Fragment>
            <TopBanner thumb={thumb} />
            <Container>
                <Left>
                    <h2>{predio}</h2>
                    <Thumb>
                        <img src={`${urlApi}/uploads/${thumb}`} alt="Imóvel" />
                    </Thumb>
                    <Description>
                        <h2>R$ {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</h2>
                        <span><IoBedSharp /> {bedrooms}</span>
                        <span><FaBath /> {bathrooms}</span>
                        <span><ImEnlarge /> {area} m²</span>
                        <h5><FaMapLocationDot /> {logradouro}, {numero}</h5>
                        <p>{description}</p>
                    </Description>
                </Left>
                <Right>
                    <h2>PROPRIETÁRIO</h2>
                    <Profile>
                        <ProfileImg>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Perfil" />
                        </ProfileImg>
                        <ProfileDescription>
                            <h3>{name}</h3>
                        </ProfileDescription>
                    </Profile>
                    <ProfileContact>
                        <h3>Informações para contato</h3>
                        <p>{phone}</p>
                        <p>{email}</p>
                    </ProfileContact>
                    <ProfileFormContact>
                        <h3>Envie uma mensagem</h3>
                        <form onSubmit={handleSubmit} autoComplete='off'>
                            <Input type="hidden" name='userId' value={userId || ''} />
                            <Input type="text" placeholder='Nome' name='client_name' onChange={(e) => setClientName(e.target.value)} />
                            <Input type="email" placeholder='Email' name='client_email' onChange={(e) => setClientEmail(e.target.value)} />
                            <Input type="tel" placeholder='Telefone' name='client_telefone' onChange={(e) => setClientTelefone(e.target.value)} />
                            <TextArea name='client_mensagem' cols="30" rows="10" placeholder='Mensagem' onChange={(e) => setClientMensagem(e.target.value)} />
                            <Button>Enviar Mensagem</Button>
                        </form>
                    </ProfileFormContact>
                </Right>
            </Container>
        </Fragment>
    );
};

export default Imobi;
