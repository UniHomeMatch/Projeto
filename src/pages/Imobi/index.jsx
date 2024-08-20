import React, { Fragment } from 'react';
import { Container, Description, Left, MapImg, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from './styles';
import TopBanner from '../../components/TopBanner/inex';
import { IoBedSharp } from 'react-icons/io5';
import { FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { PiBathtubFill } from 'react-icons/pi';
import { MdGarage } from 'react-icons/md';
import { ImEnlarge, ImManWoman } from 'react-icons/im';
import ImageRoll from '../../components/Roll';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';




const Imobi = () => {
    return (
        <Fragment>
            <TopBanner />
            <Container>
                <Left>
                <h2>YOU180 - GLEBA PALHANHO</h2>
                    <Thumb>
                        <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Thumb>
                    <ImageRoll />
                    <Description>
                        <h2>R$ 800 /mês</h2>
                        <span><IoBedSharp />  Quartos</span>
                        <span><PiBathtubFill />  Lavabo</span>
                        <span><FaBath />  Banheiros</span>
                        <span><MdGarage />  Vagas</span>
                        <span><ImEnlarge />  Área</span>
                        <span><ImManWoman />  Sexo</span>
                        <p>Descrição do imovel Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio autem quia atque! Praesentium dolorem, laboriosam veritatis minus expedita ex accusamus ipsum distinctio, magnam cupiditate aut nam odio quod. Quaerat.</p>
                    </Description>
                </Left>
                <Right>
                <h2>PROPRIETÁRIO</h2>
                    <Profile>
                        <ProfileImg>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                        </ProfileImg>
                        <ProfileDescription>
                            <h3>Feranda Nunes</h3>
                            <p>descrição</p>
                        </ProfileDescription>
                    </Profile>
                    <ProfileContact>
                        <h3>Informações para contato</h3>
                        <p>(43) 11111-1111</p>
                        <p>teste@teste</p>
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