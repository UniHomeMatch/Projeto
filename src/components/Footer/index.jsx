import React, { Fragment } from "react";
import { Container, Copy, Item } from "./styles";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from '../../assets/logo.png';

const Footer = () => {
    return (
        <Fragment>
            <Container>
                <Item>
                    <img src={LogoImg} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam minima, laborum incidunt quia deserunt voluptates quod? Nihil itaque nobis asperiores accusamus voluptates a laborum, fuga sequi minus facere earum!</p>
                    <nav>
                        <li><span><FaFacebook size={32} /></span></li>
                        <li><span><FaInstagram size={32} /></span></li>
                        <li><span><FaWhatsapp size={32} /></span></li>
                    </nav>
                </Item>
                <Item>
                    <h3>Nossos Serviços</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
                <Item>
                    <h3>Nossos Serviços</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
                <Item>
                    <h3>Nossos Serviços</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
            </Container>
            <Copy>
                <p>© Copyright 2024 - UniHomeMatch Todos os Direitos Reservados.</p>
                <ul>
                    <li><span>Termos de Uso</span></li>
                    <li><span>Política de Privacidade</span></li>
                    <li><span>Política de Cookies</span></li>
                </ul>
            </Copy>
        </Fragment>
    )
}

export default Footer;