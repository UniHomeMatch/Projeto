import styled from "styled-components";

export const Container = styled.div`
    padding: 100px 100px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    &:before{
        background-color: rgba(0,0,0,0.55);
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`

export const Text = styled.div`
    width: 55%;
    position: relative;
    z-index: 1;
    h2{
        color: var(--white);
        font-size: 62px;
        font-weight: 700;
        margin-bottom: 35px;
    }
    p{
        color: var(--white);
        margin-bottom: 25px;
    }
    span{
        background-color: var(--orangelight);
        border: 0;
        color: var(--darkgray);
        font-size: 15px;
        font-weight: 700;
        padding: 12px 120px;
        line-height: 24px;
        border-radius: 4px;
        cursor: pointer;

        a{
        color: var(--white);
        }
    }
`   