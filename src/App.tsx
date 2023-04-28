import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { projects } from "./info";

function App() {
  return (
    <>
      <header>
        <div className="fondo"></div>
        <Navbar className="nav-color">
          <Container>
            <Navbar.Brand href="#home" className="font-style">
              Navbar
            </Navbar.Brand>
            <Nav className="#">
              <Nav.Link href="#home" className="font-style">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="font-style">
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className="font-style">
                Pricing
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <div className="presentation">
        <div className="mini-card">
          <h1>Julio Yescas</h1>
          <h2>ing sistemas specialist on web development</h2>
        </div>
      </div>
      <div className="center">
        <div>
          <h3>about me</h3>
          <p>
            unofficial ing. in computational system, specialist on web
            development <br></br>with c1 on english and n5 in japanese
          </p>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/55/32/a3/5532a35c10e7558b3eed821cd8978aa4.jpg"
            alt="zorrito"
          />
        </div>
      </div>

      <div className="mini-card">
        <h2>projects</h2>
        <h3>just a little of my work</h3>
      </div>

      <div className="center">
        {projects.map((nombrecito) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={nombrecito.image}
              alt={nombrecito.alternativo}
            />
            <Card.Body>
              <Card.Title>{nombrecito.name}</Card.Title>
              <Card.Text>{nombrecito.description}</Card.Text>
              <a href={nombrecito.link} className="Button">
                lets go
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
