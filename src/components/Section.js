import React from 'react'
import Styled from 'styled-components'

function Section({ title, description, leftBtnText, rightBtnText, img }) {
  return (
    <Wrap bgImage={img}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Button>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          <RightButton>{rightBtnText}</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrap>
  )
}

export default Section

const Wrap = Styled.div`
background-image:url('/images/model-s.jpg');
  height:100vh;
  width:100vw;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`}
`

const ItemText = Styled.div`
text-align:center;
padding-top:15vh;
`

const ButtonGroup = Styled.div`
display:flex;
margin-button:30px;
@media (max-width:768px){
  flex-direction:column;
  
}

`
const LeftButton = Styled.button`
height:40px;
width:256px;
border-radius:20px;
background-color:rgba(23,26,32,0.8);
color:white;
text-transform:uppercase;
display:flex;
justify-content:center;
align-items:center;
border:none;
cursor:pointer;
opacity:0.85;
font-size:12px;
margin:8px;
`

const RightButton = Styled(LeftButton)`
background:white;
color:black;
`
const DownArrow = Styled.img`
height:40px;
margin-left:250px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
`
const Button = Styled.div`

`
