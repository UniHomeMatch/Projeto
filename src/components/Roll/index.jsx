// ImageRoll.js
import React from 'react';
import { ImageRollContainer, Image } from './styles';

const ImageRoll = ({ images }) => {
  // Verifica se as imagens estão definidas e não estão vazias
  if (!images || images.length === 0) {
    return <div>Nenhuma imagem disponível</div>; // Ou um componente de espaço reservado
  }

  return (
    <ImageRollContainer>
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`Imagem ${index + 1}`} />
      ))}
    </ImageRollContainer>
  );
};

export default ImageRoll;
