import React from "react";
import { Container } from "react-bootstrap";
import ListCustomers from "../components/ListCustomers";

const App = () => {
    return (
      <Container>
        <h1 className="text-center">LISTA DE SOLICITUDES</h1>
        <ListCustomers />
       </Container>
    );
  
}

export default App;
