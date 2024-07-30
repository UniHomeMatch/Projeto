import React from "react"
import { Container, Description, Img, Itens} from "./styles";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <Container>
            <Img>
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Img>
            <Description>
                <h4>Apartamento</h4>
                <Itens>
                    <span><FaMapMarkerAlt />Gleba Palhano, Londrina</span>
                    <span>R$ 800,00 /mês</span>
                </Itens>
                <Link to="/imovel"> Detalhes <FaArrowRight /></Link>
            </Description>
        </Container>
    )
}

export default Card;