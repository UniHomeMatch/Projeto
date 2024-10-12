import React, { Fragment, useEffect, useState } from "react";
import { Header, Wrapper, Container, Div } from "./styles";
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
            setImobi(response.data)
        })
        .catch(() => {
            console.log('Erro ao buscar os imóveis')
        })
    }, [])

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
            <TextField id="pesquisa" label="Pesquisa" variant="outlined" size='small' fullWidth color="warning" />
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
            </Container>
        </Fragment>
    )
}

export default Home;
