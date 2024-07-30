import styled from "styled-components";

const ImageRollContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const Image = styled.img`
  width: auto;
  height: 150px;
  margin: 10px;
  border-radius: 10px;
`;

export { ImageRollContainer, Image };