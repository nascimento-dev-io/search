import styled from "styled-components";

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

   svg {
     cursor: pointer;

     &:active {
       transform: scale(.9);
     }
   }
}



`