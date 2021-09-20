import React from 'react'
import Section from './Section'

function Home() {
  return (
    <div>
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
    </div>
  )
}

export default Home
