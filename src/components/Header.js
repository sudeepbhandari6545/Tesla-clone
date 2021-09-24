import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
  const [openItem, setOpenItem] = useState(false)
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="/">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="">shop</a>
        <a href="">tesla account</a>
        <CustomIcon onClick={() => setOpenItem(true)} />
      </RightMenu>
      <BurgerMenu show={openItem}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpenItem(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a key={index}>{car}</a>
            </li>
          ))}

        <li>
          <a>Existing Inventory</a>
        </li>
        <li>
          <a>Used Inventory</a>
        </li>
        <li>
          <a>Trade-In</a>
        </li>
        <li>
          <a>Cybertruck</a>
        </li>
        <li>
          <a>Roadaster</a>
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
  z-index: 16;
  align-items: center;
  flex-direction: column;
  list-style: none;
  padding: 20px;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.4s ease-in;
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
