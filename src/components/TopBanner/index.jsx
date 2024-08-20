import React from 'react';
import { Container, Text } from './styles';
import { urlApi } from '../../services/Api';

const TopBanner = ({thumb}) => {  
    const imgUrl = `${urlApi}/uploads/${thumb}`;

    return (
        <Container style={{backgroundImage: `url(${imgUrl})`}}>	
            <Text>
                <h2>Apartamentos</h2>
                <p>Milhares de opções estão à sua disposição. Não perca a oportunidade de conquistar seu espaço residencial hoje.</p>
            </Text>
        </Container>
    )
}

export default TopBanner;