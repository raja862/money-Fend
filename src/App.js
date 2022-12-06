import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
  
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,0.2539609593837535) 92%);
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 40px ;
  font-family: Montserrat;
`;

const Header = styled.div`
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,0.2539609593837535) 92%);
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;
const App = () => {
  return (
    <Container>
      <Header>Money Manager
</Header>
      <HomeComponent />
    </Container>
  );
};

export default App;
