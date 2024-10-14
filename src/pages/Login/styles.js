import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        font-size: 30px;
    }
    p{
        font-size: 15px;
        margin-bottom: 15px;
    }
`

export const ContainerForm = styled.div`
    padding: 35px;
    width: 370px;
    background-color: var(--white);
    border-radius: 25px;
    box-shadow: 0px 0px 10px var(--orangelight);
`

export const Label = styled.div`
    display: flex;
    margin-bottom: 10px;
    font-weight: 500;
`

export const Form = styled.form`
    width: 100%;
`
export const Links = styled.div`
padding-bottom: 10px;
font-size: 16px;
a{
    color: var(--tercery);
}
`