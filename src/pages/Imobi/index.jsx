import React, { Fragment, useEffect, useState } from 'react';
import { Container, Description, Left, MapImg, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from './styles';
import TopBanner from '../../components/TopBanner/inex';
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
    const [dataimobi, setDataImobi] = useState([]);

    useEffect(() => {
        api.get(`/listimobi/${slug}`)
            .then((response) => {
                setDataImobi(response.data)
            })
            .catch(() => {
                console.log("Erro: Erro ao listar imóvel")
            })
    }, [])

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
    } = dataimobi;

    const [client_name, setClinteName] = useState('');
    const [client_email, setClinteEmail] = useState('');
    const [client_mensagem, setClinteMensagem] = useState('');

    const dataMessage = {
        client_name,
        client_email,
        client_mensagem,
        userId
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/createmessage', dataMessage)
            .then((response) => {
                if (!response.data.error === true) {
                    toast(response.data.message);
                } else {
                    toast(response.data.message);
                }
            })
            .catch(() => {
                console.log('Erro: Erro no sistema')
            })
    }
    return (
        <Fragment>
            <TopBanner 
            thumb={thumb}
            />
            <Container>
                <Left>
                    <h2>{title}</h2>
                    <Thumb>
                        <img src={`${urlApi}/uploads/${thumb}`} alt="" />
                    </Thumb>
                    <ImageRoll />
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
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                        </ProfileImg>
                        <ProfileDescription>
                            <h3>{ name }</h3>
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
                        <form>
                            <Input type="text" placeholder='Nome' />
                            <Input type="text" placeholder='Email' />
                            <Input type="text" placeholder='Telefone' />
                            <TextArea name='' id='' cols="30" rows="10" placeholder='Mensagem' />
                            <Button>Enviar Mensagem</Button>
                        </form>
                    </ProfileFormContact>
                    <MapImg>
                        <h3><FaMapMarkerAlt /> Localizção</h3>
                        <img src="https://media.istockphoto.com/id/1306807452/pt/vetorial/map-city-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=e7J0DzlKVhJ6fpy2IqB7KE4yr2Dxg8cLBHe8F9_W3L8=" alt="" />
                    </MapImg>
                </Right>
            </Container>
        </Fragment>
    )
}

export default Imobi;