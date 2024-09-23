import styled from "styled-components";

export const Container = styled.div`
    width: 24%;
    margin-bottom: 12px;
    background-color: var(--white);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`

export const Img = styled.div`
    width: 100%;
    height: 150px;
    img{
    border-radius: 4px 4px 0 0;
        width: 100%;
        height: 100%;
    }
`

export const Description = styled.div`
    padding: 12px;
    a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--secondary);
    }
    h4{
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 10px;
    }
`

export const Itens = styled.div` 
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    span{
        margin-bottom: 10px;
    }
`