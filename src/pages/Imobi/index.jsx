import React, { Fragment, useEffect, useState } from 'react';
import { Container, Description, Left, MapImg, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from './styles';
import TopBanner from '../../components/TopBanner';
import { IoBedSharp } from 'react-icons/io5';
import { FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { ImEnlarge } from 'react-icons/im';
import ImageRoll from '../../components/Roll';
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
    const [images, setImages] = useState([]); // Inicializar como um array vazio

    useEffect(() => {
        api.get(`/listimobi/${slug}`)
            .then((response) => {
                console.log(response.data);
                setDataImobi(response.data);

                // Supondo que a resposta inclua um array de URLs de imagem
                setImages(response.data.images || []); // Ajuste de acordo com a estrutura da resposta da sua API
            })
            .catch(() => {
                console.log("Erro: Erro ao listar imóvel");
            });
    }, [slug]);

    const {
        title,
        location,
        description,
        thumb,
        price,
        area,
        bedrooms,
        bathrooms,
        name,
        phone,
        email,
        userId
    } = dataImobi;

    const [client_name, setClientName] = useState('');
    const [client_email, setClientEmail] = useState('');
    const [client_mensagem, setClientMensagem] = useState('');
    const [client_telefone, setClientTelefone] = useState('');

    const dataMessage = {
        client_name,
        client_email,
        client_mensagem,
        client_telefone,
        userId
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/createmessage', dataMessage)
            .then((response) => {
                toast(response.data.message);
            })
            .catch(() => {
                console.log('Erro: Erro no sistema');
            });
    }

    if (!dataImobi) {
        return <div>Carregando...</div>;
    }

    return (
        <Fragment>
            <TopBanner thumb={thumb} />
            <Container>
                <Left>
                    <h2>{title}</h2>
                    <Thumb>
                        <img src={`${urlApi}/uploads/${thumb}`} alt="Imóvel" />
                    </Thumb>
                    <ImageRoll images={images} /> {/* Passa as imagens para o ImageRoll */}
                    <Description>
                        <h2>{price}</h2>
                        <span><IoBedSharp />{bedrooms}</span>
                        <span><FaBath /> {bathrooms}</span>
                        <span><ImEnlarge />{area}</span>
                        <h5><FaMapLocationDot />{location}</h5>
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
                            <p>descrição</p>
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
                            <Input type="hidden" name='userId' value={userId} />
                            <Input type="text" placeholder='Nome' name='client_name' onChange={(e) => setClientName(e.target.value)} />
                            <Input type="text" placeholder='Email' name='client_email' onChange={(e) => setClientEmail(e.target.value)} />
                            <Input type="text" placeholder='Telefone' name='client_telefone' onChange={(e) => setClientTelefone(e.target.value)} />
                            <TextArea name='client_mensagem' cols="30" rows="10" placeholder='Mensagem' onChange={(e) => setClientMensagem(e.target.value)} />
                            <Button>Enviar Mensagem</Button>
                        </form>
                    </ProfileFormContact>
                    <MapImg>
                        <h3><FaMapMarkerAlt /> Localização</h3>
                        <img src="https://media.istockphoto.com/id/1306807452/pt/vetorial/map-city-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=e7J0DzlKVhJ6fpy2IqB7KE4yr2Dxg8cLBHe8F9_W3L8=" alt="Mapa" />
                    </MapImg>
                </Right>
            </Container>
        </Fragment>
    )
}

export default Imobi;
