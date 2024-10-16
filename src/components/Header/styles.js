import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 100px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-color: var(--gray);
`;

export const Logo = styled.div`
  img {
    width: 300px;
  }
`;

export const Menu = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      border: 1px solid var(--tercery);
      color: black;
      border-radius: 10px;
      padding: 10px;
      margin-right: 10px; 
      span {
        font-size: 1.2rem;
        font-weight: 300;
      }
      &:hover {
        background-color: var(--terceryligth);
        cursor: pointer;
      }
    }
  }
`;

export const ProfileIcon = styled.div`
  img {
    width: 50px;
    height: 50px; 
    border-radius: 50%; 
    cursor: pointer; 
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 70px;
  right: 30px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out; 

  &.editing {
    transform: translateX(-50px);
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  h3 {
    margin: 10px 0;
  }

  p {
    color: gray;
    margin-bottom: 20px;
  }

  a {
    margin-bottom: 10px;
    color: #0073e6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background-color: #f44336;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      background-color: #d32f2f;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      margin: 5px 0;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
    }
  }
`