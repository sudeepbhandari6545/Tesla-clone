import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header() {
  const [closeItem, setCloseItem] = useState('')

  const closeBurger = () => {
    setCloseItem('')
    alert('close')
  }

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="">shop</a>
        <a href="">tesla account</a>
        <CustomIcon />
      </RightMenu>
      <BurgerMenu>
        <CloseWrapper>
          <CustomClose onClick={closeBurger} />
        </CloseWrapper>

        <li>
          <a href="#">home</a>{' '}
        </li>
        <li>
          <a href="#">home</a>{' '}
        </li>
        <li>
          <a href="#">home</a>{' '}
        </li>
        <li>
          <a href="#">home</a>{' '}
        </li>
        <li>
          <a href="#">home</a>{' '}
        </li>
      </BurgerMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    padding: 0 10px;
    text-transform: uppercase;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  a {
    font-weight: 600;
    margin-right: 10px;
    text-transform: uppercase;
  }
`
const CustomIcon = styled(MenuIcon)`
  align-items: center;
  cursor: pointer;
`
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 10;
  align-items: center;
  list-style: none;
  padding: 20px;
  align-items: center;
  justify-content: center;
  li {
    border-bottom: 1px solid gray;
    padding: 15px 0;
  }
  a {
    font-weight: bold;
    text-transform: capitalize;
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
