import React from 'react'
import Styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        img="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        img="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        img="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        img="model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back gaurantee"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
        img="solar-panel.jpg"
      />
      <Section
        title="Sloar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        img="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftBtnText="Shop now"
        img="accessories.jpg"
      />
    </Container>
  )
}

export default Home

const Container = Styled.div``
