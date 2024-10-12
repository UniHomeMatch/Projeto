import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   align-items: center;
   padding: 25px 150px;
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
    padding: 25px 150px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    justify-content: start;
    margin-top: 25px;
`

export const Div = styled.div`
    width: 25%;
    margin-left: 10px;
    background-color: var(--gray);
    border-radius: 10px;
    border: 3px solid rgb(0,0,0);
    border-color: var(--tercery);
`