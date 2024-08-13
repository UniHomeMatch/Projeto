import ReactInputMask from "react-input-mask";
import styled from "styled-components";

export const Container = styled.div`
    padding: 60px 150px;
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
export const Mask = styled(ReactInputMask)`
    height: 50px;
    padding: 8px 15px;
    border-radius: 5px;
    width: 100%;
    color: var(--secondary);
    letter-spacing: 1px;
    font-size: 15px;
    margin-bottom: 10px;
    outline: none;
    border-color: var(--gray);
    border: 1px solid var(--gray);
    resize: none;
`

export const Select = styled.select`
    height: 50px;
    padding: 8px 15px;
    border-radius: 5px;
    width: 100%;
    color: var(--secondary);
    letter-spacing: 1px;
    font-size: 15px;
    margin-bottom: 10px;
    outline: none;
    border-color: var(--gray);
    border: 1px solid var(--gray);
    resize: none;
    `