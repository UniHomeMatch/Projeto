import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const Container = styled.div`
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  background-color: var(--light-gray);
`;

export const Right = styled.div`
  width: 55%;
  padding: 20px;
  h2 {
    font-size: 1.17em;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  margin-top: 10px;
  padding: 25px;
  border-radius: 25px;
  border: 1px solid var(--orangelight);
  box-shadow: 0px 0px 10px var(--orangelight);
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espaçamento vertical entre as seções */
`;

export const Section = styled.div`
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;

  h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: var(--dark-gray);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    /* O label ocupará uma largura de 30% e o input 65% */
    label {
      width: 30%;
      text-align: right;
      padding-right: 10px;
    }

    input {
      width: 65%;
      padding: 10px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }
  }

  div{
  gap: 2px;
  display: flex;
  align-items: start;
  justify-content: start;
  }
`;

export const Label = styled.label`
  font-size: 1em;
  font-weight: 500;
`;

export const Button = styled.button`
  background-color: var(--orange);
  color: #fff;
  padding: 12px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  text-align: center;

  &:hover {
    background-color: var(--dark-orange);
  }
`;

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
`;
