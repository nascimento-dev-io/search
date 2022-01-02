import React from 'react'
import { Container } from './styles';

const StoveCard = ({result}) => {

  return (
    <Container>
      {result.map((stove, index) => (
        <a key={index} href={`https://www.google.com.br/search?q=${stove}`} 
        target="_blank" rel="noreferrer">{stove}</a>
      ))}
    </Container>
  )
}

export default StoveCard;
