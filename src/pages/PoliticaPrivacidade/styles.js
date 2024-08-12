import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  margin-bottom: 15px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const Link = styled.div`
  font-size: 16px;

  a {
    color: var(--tercery);
  }
`;