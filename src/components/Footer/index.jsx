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
                    <p>Projeto de extensão da Universidade Filadélfia de Londrina - UNIFIL, desenvolvido por alunos de Ciência da Computação e Engenharia de Software.</p>
                    <nav>
                        <li><span><FaFacebook size={32} /></span></li>
                        <li><span><FaInstagram size={32} /></span></li>
                        <li><span><FaWhatsapp size={32} /></span></li>
                    </nav>
                </Item>
                <Item>
                    <h4>Nossos Serviços</h4>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
                <Item>
                    <h4>Termos de Uso</h4>
                    <ul>
                    <li><span><a href="/politica-privacidade/uso"> Termos de Uso </a></span></li>
                    <li><span><a href="/politica-privacidade"> Política de Privacidade </a></span></li>
                    <li><span><a href="/politica-privacidade"> Legal </a></span></li>
                    </ul>
                </Item>
                <Item>
                    <h4>Contato</h4>
                    <ul>
                        <li><span>contato@unihomematch.com</span></li>
                        <li><span>Londrina Paraná</span></li>
                    </ul>
                </Item>
            </Container>
            <Copy>
                <p>© Copyright 2024 - UniHomeMatch Todos os Direitos Reservados.</p>
                
            </Copy>
        </Fragment>
    )
}

export default Footer;