import React from "react";
import { Container, Text } from "./styles";
import { Button } from "@mui/material";

const Banner = ( ) => {
    return (
        <Container>
           <Text>
            <h2>Descubra o Encanto da Sua Próxima Moradia</h2>
            <p>Milhares de opções estão à sua disposição. Não perca a oportunidade de conquistar seu espaço residencial hoje.</p>
            <Button 
                variant="contained" 
                href="/cadastro-imovel"
                sx={{
                    color: 'white',
                    backgroundColor: 'var(--orangelight)',
                    height: '35px',
                    width: '450px',
                    fontSize: '15px',
                    '&:hover': {
                    backgroundColor: 'var(--orangelight)'
                    },
                    textTransform: 'none',
                    font: "Dosis",
                }}
            >
            Cadastre seu anúncio
            </Button>

            </Text>
        </Container>
    )
}

export default Banner;