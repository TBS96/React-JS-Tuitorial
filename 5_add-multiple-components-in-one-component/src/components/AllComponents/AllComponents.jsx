import React from 'react'
import './AllComponents.css'
import Navigation from '../Navigation/Navigation'
import HeroArea from '../HeroArea/HeroArea'
import MainSection from '../MainSection/MainSection'
import Footer from '../Footer/Footer'

const AllComponents = () => {
  return (
    <div>
        <Navigation></Navigation>
        <HeroArea></HeroArea>
        <MainSection></MainSection>
        <Footer></Footer>
    </div>
  )
}

export default AllComponents