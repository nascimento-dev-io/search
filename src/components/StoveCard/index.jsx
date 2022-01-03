import React from 'react'
import { Container } from './styles';
import {FiCopy} from 'react-icons/fi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const StoveCard = ({result}) => {

  function copyStoveName(stoveName){
    navigator.clipboard.writeText(stoveName);

    toast.info('Modelo copiado!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      theme='dark'
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Container>
      {result.map((stove, index) => (
        <div key={index}>        
          <a  href={`https://www.google.com.br/search?q=${stove}`} 
          target="_blank" rel="noreferrer">{stove}</a>
          <FiCopy size={25} onClick={() => copyStoveName(stove)}/>
        </div>
      ))}
    </Container>
    </>
  )
 
}

export default StoveCard;
