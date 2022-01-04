import styled from "styled-components";
import {shade} from 'polished'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div{
    width: 700px ;
    color: #F4EDE8;
    background: #232129;

    display: flex;
    justify-content: space-between;

    padding: 16px;
    margin:20px;

    border-radius: 10px;

    a {
      display: block;
      padding: 32px;  

      text-decoration:none;

      color: #F4EDE8;
      background: #232129;

      font-size:18px;
      text-align: center;
   }

   span {
     display: flex;
     align-self: flex-start;
     

     padding: 5px 10px;
     border-radius: 5px;

     background-color: ${shade(0.1, '#232129')};

    cursor: pointer;

     &:active {
       transform: scale(.9);
      }

      svg {    
        margin-left: 5px;
      }

   }

   
}



`