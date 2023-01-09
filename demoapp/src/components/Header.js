import React from 'react'
import {Container,Navbar} from 'react-bootstrap'

export default function Header() {
  return (
    <div>
    <header>
        <Navbar bg='light' expand='lg' >
        <Container>
          <Navbar.Brand>DemoApp</Navbar.Brand>
        </Container>
        </Navbar>
      </header>
    </div>
  )
}
