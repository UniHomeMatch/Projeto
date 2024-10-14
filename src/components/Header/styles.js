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

//adição da estilização para o ícone do perfil
//adição de deixar a imagem de perfil em círculo
//adição de tornar clicável com o cursor
export const ProfileIcon = styled.div`
  img {
    width: 50px;
    height: 50px; 
    border-radius: 50%; 
    cursor: pointer; 
  }
`;

//adição da estilização do container do modal 
//deixei o fundo meio transparente
export const ModalContainer = styled.div`
  position: fixed;
  top: 70px;
  right: 30px;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

//adição de estilização para a parte de conteúdo do modal
//coloquei para que quando seja aberto o perfil, a foto continue circular porém maior
//os links vão ser azuis e o sublinhado deles não vai aparecer ao menos que passe o mouse em cima deles
export const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    &:hover {
      background-color: #d32f2f;
    }
  }
`
