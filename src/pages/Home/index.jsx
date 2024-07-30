import React, {Fragment} from "react";
import { Header, Wrapper } from "./styles";
import Card from "../../components/Card";
import Banner from "../../components/Banner";

const Home  = () => {
    let Cards = [];
    for(let i = 0; i<4; i++) {
        Cards.push(<Card key={i} />)
    }
    return (
        <Fragment>
            <Banner />
            <Header>
                <h2>Encontre o seu espaço dos sonhos!</h2>
            </Header>
            <Wrapper>
                {Cards}
            </Wrapper>
        </Fragment>
    )
}

export default Home;