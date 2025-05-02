import React from 'react'
import HeroSection from '../components/HeroSection'
import TwitterSection from '../components/TweeterCards'
import CohortSection from '../components/CohortSection'
import CohortsBenefits from '../components/BenifitsOfCohorts'
import AlumniNetworkSection from '../components/AlumniNetworkSec'
import CommunitySection from '../components/CommunitySec'
import OpenSourceSection from '../components/Opensource'
import WhyChaiCodeSection from '../components/Chaicode'
import TopicsCloudSection from '../components/CloudSec'
import MobileSec from '../components/MobileSec'
import YouTubeChannels from '../components/YoutubeSec'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <TwitterSection />
      <CohortSection/>
      <CohortsBenefits/>
      <AlumniNetworkSection/>
      <CommunitySection />
      <WhyChaiCodeSection/>
      <TopicsCloudSection/>
      <OpenSourceSection />
      <MobileSec/>
      <YouTubeChannels/>
    </>
  )
}

export default Home