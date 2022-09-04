import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {projects} from './info';


function App() {
  console.log(projects);

  return (
        <>

        

          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="#">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          
        <div className="presentation">
          <h1>Julio Yescas</h1>
          <h3>ing sistemas specialist on web development</h3>
          <p>call me</p>

        </div>
        <div className="center">
          <div>
          <h2>about me</h2>
          <p>conoceme mas, con mas informacion que bla bla</p>
          </div>
          <div>
            <img src="https://i.pinimg.com/564x/55/32/a3/5532a35c10e7558b3eed821cd8978aa4.jpg" alt="zorrito"/>
          </div>
        </div>
        

    <div className="center2">
      <h2>projects</h2>
      <h4>projects description</h4>
    </div>

    
    <div className="center">
    {projects.map((nombrecito) => 
         
          <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={nombrecito.image} />
             <Card.Body>
              <Card.Title>{nombrecito.name}</Card.Title>
                <Card.Text>
                 {nombrecito.description}
               </Card.Text>
                <a href={nombrecito.link} className="Button">lets go</a>
             </Card.Body>
            </Card>
        )}
    </div>

     
        </>
      
    
    
   
  )
}

export default App
