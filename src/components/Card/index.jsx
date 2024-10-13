import React from "react"
import { Container, Description, Img, Itens} from "./styles";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { urlApi } from "../../services/Api";

const Card = ({ thumb, title, location, price, slug }) => {
    return (
        <Container>
      <Img>
        <img src={`${urlApi}/uploads/${thumb}`} alt="" />
      </Img>
      <Description>
        <h4>{title}</h4>
        <Itens>
          <span><FaMapMarkerAlt />{location}</span>
          <span>R$ {price} / mês</span>
        </Itens>
        <Link to={`/imovel/${slug}`}>Detalhes <FaArrowRight /></Link>
      </Description>
    </Container>
    
    )
}

export default Card;