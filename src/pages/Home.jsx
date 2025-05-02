import React from 'react'
import  HeroSection  from '../components/HeroSection'
import  StudentTestimonials from '../components/TweeterCards'
import CohortSection from '../components/CohortSection'
import CohortsBenefits from '../components/BenifitsOfCohorts'
import AlumniNetworkSection from '../components/AlumniNetworkSec'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <StudentTestimonials />
    <CohortSection/>
    <CohortsBenefits/>
    <AlumniNetworkSection/>
    </>
  )
}

export default Home