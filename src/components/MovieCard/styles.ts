import styled from "styled-components";

export const Card = styled.div`
  display: flex;


  flex-direction: column;
  text-align: center;
  padding: 10px;
  align-items: center;
  text-align: center;
  border-radius: 10px;

  @media (min-width: 768px) {
    margin-top: 25px;
    flex-direction: row-reverse;
    color: white;

    text-align: left;
  }
`;

export const CardText = styled.div`
  padding: 10px;
`;

export const CardImg = styled.div`
  img{
    width: 100%;
  }
  text-align: center;

  @media (min-width: 768px) {
    width: 180px;
    border-radius: 5px;
    margin-right: 20px;
    margin-top: 0;
    margin-left: 36px;
  }
`;
