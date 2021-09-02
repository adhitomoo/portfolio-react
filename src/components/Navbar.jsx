import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { css, cx } from '@emotion/css'
import { BeakerIcon } from '@heroicons/react/solid'


import { Navbar, Nav, Container } from 'react-bootstrap'

function HeaderNav() {
  const [menus, setMenus] = useState([
    {
      name: 'Home',
      link: '',
    },
    {
      name: 'My Experience',
      link: '',
    },
    {
      name: 'Skills',
      link: '',
    },
    {
      name: 'Contact Me',
      link: '',
    }
  ]);
  console.log(menus)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={css`justify-content: center`}>
          <Nav className="me-auto">
            {menus.map((menu, index) => {
              return (<Nav.Link className={css`margin: 0 10px`} key={index} href={menu.link}>
                <span className={css`font-weight: 600; color: #000; font-size: 16px`}> {`0${index + 1}`}.{menu.name} </span>
              </Nav.Link>)
            })}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <div className={css`display: flex; align-items: center`}>
            <BeakerIcon className="h-5 w-5 mr-2 text-blue-500" />
            <span>test</span>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default HeaderNav;