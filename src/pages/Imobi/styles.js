import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    width: 70%;
    padding: 10px;
    border: 1px solid rgb(0,0,0,0.1);
    h2{
        margin-bottom: 10px;
    }
`

export const Thumb = styled.div`
    position: relative;
    width: 100%;

    img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.65));
    }
`

export const Description = styled.div`
    padding: 25px 0;
    display: space-between;
    justify-content: flex-start;
    flex-direction: column;
    span{
        margin-bottom: 10px;
        padding-left: 0px;
        padding-right: 25px;
    }
    h2,p{
        margin-top: 5px;
        margin-bottom: 10px;
        color: var(--secondary);
    }
`

export const Right = styled.div`
    width: 28%;
    padding: 10px;
    border: 1px solid rgb(0,0,0,0.1);
    border-radius: 5px;
    h2{
        margin-bottom: 10px;
    }
`

export const Profile = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ProfileImg = styled.div`
    width: 50%;
    img{
        width: 100%;
        height: auto;
        border-radius: 5px;
    }
`

export const ProfileDescription = styled.div`
    width: 48%;
    h3, p{
        margin-bottom: 10px;
        color: var(--secondary);
    }
`

export const ProfileContact = styled.div`
    h3, p{
        margin-bottom: 10px;
        color: var(--secondary);
    }
`

export const ProfileFormContact = styled.div`
    h3, p{
        margin-bottom: 10px;
        color: var(--secondary);
    }
    form{
        display: flex;
        flex-direction: column;
`

export const MapImg = styled.div `
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 45px;
        flex-direction: column;
        h3{
            margin-bottom: 10px;
            color: var(--secondary);
        }
        img{
            width: 80%;
            height: auto;
            border-radius: 5px;
        }
`