import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { css, cx } from '@emotion/css'
import styled from '@emotion/styled'
import '../main.scss'

import { Container } from 'react-bootstrap'


const Navbar = 
  styled.nav`
    position: relative;
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 5rem;
  `

const NavbarBrand = styled.div`
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
`
const NavbarNav = styled.ul`
    display: flex;
    align-items: center;
    flex-basis: auto;
    margin-bottom: 0;
  `

const NavbarItems = styled.li`
    list-style: none;
    padding: .5rem .725rem;
    outline: none;
  `

const NavbarLink = styled.a`
    cursor: pointer;
    display: block;
    padding: .5rem;
    text-decoration: none !important;
  `

const Flex = styled.div`
    display: flex;
    align-items: center;
  `

function HeaderNav() {

  const [menus] = useState([
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
    <Navbar className="tw-bg-navbar">
      <NavbarBrand href="#home" className="font-bold tracking-wider text-base">adhitomoo cv</NavbarBrand>
        <NavbarNav className="me-auto">
          {menus.map((menu, index) => {
            return (<NavbarItems className="tw-mx-2" key={index} href={menu.link}>
              <NavbarLink className="link--hover">
                <span className="tw-font-bold tw-text-base line" style={{ color: 'rgba(17, 24, 39)' }}> {`0${index + 1}`}.{menu.name} </span>
              </NavbarLink>
            </NavbarItems>)
          })}
        </NavbarNav>
      <NavbarBrand>
        <Flex>
          <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-5 tw-w-5 tw-mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="tw-text-base">+62 8383 8274 057 </span>
        </Flex>
      </NavbarBrand>
    </Navbar>
  )
}

export default HeaderNav;