// import "./Footer.css"
import styled from "styled-components"


const FooterDiv = styled.div`
  background-color: black;
  height: 500px;
  width: 100%;

  @media(max-width: 720px){
    background-color: orange;
  }
`;

export const Footer=()=>{

 


  return(
    <>
       <FooterDiv id="main_footer">
        <div className="footer_col"></div>
        <div className="footer_col"></div>
        <div className="footer_col"></div>
        <div className="footer_col"></div>
       </FooterDiv>
    </>
  )
}