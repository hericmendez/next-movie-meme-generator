import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 8vh;
@media (min-width: 768px){
  text-align:left;
  justify-content: center;
  align-items: flex-start;
  padding: 36px;
  padding-left: 20vw;
  padding-right: 20vw;
  margin-top: 20vh;
}


`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
`;


export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    
  }
`

export const Input = styled.input`
  width: 90%;
  margin-bottom: 12px;

  margin-right: 0px;
  padding:  12px 8px;
  border: 1px solid var(--foreground);
  border-radius: 4px;


  @media (min-width: 768px) {
    width: 50%;
    margin-right: 12px;
    margin-bottom: 0px;
  }
`;



export const Button = styled.button`
  width: 90%;
  padding: 12px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  @media (min-width: 768px) {
   width:20%;
    
  }

  &:hover {
    background-color: #1565c0;
  }
`;


export const Select = styled.select`
  width: 90%;
  margin-bottom: 12px;
  background-color: #222;
  margin-right: 0px;
  padding:  12px 8px;
  border: 1px solid var(--foreground);
  border-radius: 4px;


  @media (min-width: 768px) {
    width: 30%;
    margin-right: 12px;
    margin-bottom: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 24px;
  padding-left:36px;
  padding-right:36px;
  font-weight: bold;
`;

export const Text = styled.p`

  color: #ccc;
  padding-right:36px;
  padding-left:36px;
  font-size: 20px;
  margin-bottom: 12px;
`;

export const Footer = styled.div`
  display: none;
  @media (min-width: 768px) {
    text-align: right;

    display: flex;
    align-items: center;
    position: absolute;

    bottom: 0;
    right: 0;
    padding: 10px;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
`;
export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  color: #666;
  margin-right: 10px;
`;