import React from 'react'

import HeroComponent from './HeroComponent'
import GetStartedComponent from './GetStartedComponent'
import ConstructionsComponent from './ConstructionsComponent'
import ServiceComponent from './ServiceComponent'

export default function BodyComponent() {
  return (
    <>
   <HeroComponent></HeroComponent>
   <GetStartedComponent></GetStartedComponent>
   <ConstructionsComponent></ConstructionsComponent>
   <ServiceComponent></ServiceComponent>
   </>
  )
}
