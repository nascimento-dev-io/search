import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.main` 
  display: flex;
  flex-direction: column; 
  align-items: center;

  width:100%;  
  height:100vh;

  header {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-top: 80px;

    h1{
      opacity: .7;
      font-size: 46px;
    }

    img{
      width: 50px;
      opacity: .7;
    }
  }

  
  p {
    max-width: 700px;
    font-size: 32px;
    opacity: .5;
    text-align: center;

    border-radius: 10px;

    padding: 32px;
    color: #F4EDE8;
    background: #232129;
  }

  form {
    display:flex;

    margin: 30px 0 30px 0;
    width: 90%;
    max-width: 700px;
    text-align: center;

    input {
      min-width:200px;
      background: #232129;
      border-radius:10px 0 0 10px;
      border: 2px solid #232129;
      padding:16px;

      color: #F4EDE8;
      flex: 2;

      &::placeholder{
        color: #666360;
      }
    }

    button {
      background: #FF9000;
      border-radius: 0 10px 10px 0;
      border: 0;
      padding: 16px 32px;

      color: #312E38;

      font-weight: 500;

      transition: background-color .2s;

      &:hover {
        background-color: ${shade(0.2, '#FF9000')}
      }
}
`