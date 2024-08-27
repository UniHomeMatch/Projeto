import react, { Fragment } from 'react';
import { Wrapper } from './styles';
import api from "../../services/Api";


const Search = () => {
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
           <Wrapper>
                {imobi.map((items) => (
                    <Card key={items.id} 
                    thumb={items.thumb}
                    title={items.title}
                    location={items.location}
                    price={items.price}
                    slug={items.slug} />
                ))}
                <Card />
            </Wrapper>
            </Fragment>
    )
}

export default Search;