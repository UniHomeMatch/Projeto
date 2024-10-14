import React from "react";
import { Container, Text } from "./styles";

const Banner = ( ) => {
    return (
        <Container>
           <Text>
            <h2>Descubra o Encanto da Sua Próxima Moradia</h2>
            <p>Milhares de opções estão à sua disposição. Não perca a oportunidade de conquistar seu espaço residencial hoje.</p>
            <span> <a href="/cadastro-imovel">Cadastre seu anúncio </a></span>
            </Text>
        </Container>
    )
}

export default Banner;