import React, { Fragment, useEffect, useState } from "react";
import { Header, Wrapper, Container, Div, DivCard, DivPesquisa } from "./styles";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import api from "../../services/Api";
import { Filter } from "../../components/Filter";
import { TextField } from "@mui/material";

const Home = () => {

    const [imobi, setImobi] = useState([]);

    useEffect(() => {
        api.get('/listimobi')
            .then((response) => {
                setImobi(Array.isArray(response.data) ? response.data : []);
            })
            .catch(() => {
                console.log('Erro ao buscar os imóveis');
            });
    }, []);

    return (
        <Fragment>
            <Banner />
            <Header>
                <h2>Encontre o seu espaço dos sonhos!</h2>
            </Header>
            <Container>
            <Div>
                <Filter />
            </Div>
            <DivCard>
            <DivPesquisa>
            <TextField id="pesquisa" label="Pesquisa" variant="outlined" size="small" fullWidth color="warning"  />
            </DivPesquisa>
            <Wrapper>
                {imobi.map((items) => (
                    <Card key={items.id} 
                    thumb={items.thumb}
                    title={items.title}
                    location={items.location}
                    price={items.price}
                    slug={items.slug} />
                ))}
            </Wrapper>
            </DivCard>
            </Container>
        </Fragment>
    )
}

export default Home;
