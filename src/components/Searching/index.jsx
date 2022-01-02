import React, { useEffect, useState } from 'react'
import { parseCSV } from '../../utils/utils'

import StoveCard from '../StoveCard'
import {Container} from './styles'
import stoveImg from '../../assets/logo.svg'

const Searching = () => {
  const [stoves, setStoves] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [stoveResult, setStoveResult] = useState([])
  const [notFound, setNotFound] = useState("Searching...")


  useEffect(() => {
    fetch('./fogoes.csv')
    .then(response => response.text())
    .then(text => {
      const stoves = parseCSV(text)
      setStoves(stoves);
    } )
  }, [])

  function handleSubmit(e){
    e.preventDefault(); 
    
    if(searchInput.trim() === ""){
      setNotFound("Preencha o campo de busca...");
      return;
    }
    setSearchInput('')
    setStoveResult([])  
    
    const stovesFiltered = stoves.filter(stove => stove.toUpperCase().includes(searchInput)) 

    if(stovesFiltered <= 0){
      setNotFound("Fogão não encontrado.");
      return;
    }

    setNotFound("")
    setStoveResult(stovesFiltered)
  }
  return (
    <Container>
      <header>
      <h1>Search</h1> 
      <img src={stoveImg} alt='logo stove'></img>
      </header>
      <form onSubmit={handleSubmit}>
      <input type="text" value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value.toUpperCase())} 
        placeholder='Digite algo para buscar o fogão ( marca, modelo, descrição )' />
      <button type='submit'>Buscar</button>
      </form>
      {stoveResult.length > 0 ? <StoveCard result={stoveResult}/> : <p>{notFound}</p>}
    </Container>
  )
}

export default Searching
