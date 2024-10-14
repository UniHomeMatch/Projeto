import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   align-items: center;
   padding: 25px 100px;
   gap: 25px;

   h2{
   align-self: flex-start;
   width: 85%;
   }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 25px 100px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    justify-content: start;
    margin-top: 25px;
`

export const Div = styled.div`
    width: 16,5%;
    margin-left: 10px;
    background-color: var(--white);
    border-radius: 25px;
    box-shadow: 0px 0px 10px var(--orangelight);
    margin-bottom: 25px;
`

export const DivCard = styled.div`
    width: 80%;
    margin-left: -50px;
`

export const DivPesquisa = styled.div`
    width: 83.5%;
    margin-left: 100px;
`