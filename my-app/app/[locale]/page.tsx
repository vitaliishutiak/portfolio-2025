'use client';

import { Container } from '@mui/material'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroBlock from '../../components/HeroBlock'
import ProjectsBlock from '../../components/ProjectsBlock'
import SkillsBlock from '../../components/SkillsBlock'
import FaqBlock from '../../components/FaqBlock'
import HowItsWorksBlock from '../../components/HowItsWorksBlock'
import ExperienceBlock from '../../components/ExperienceBlock'
import PageTransition from '../../components/PageTransition'
import Preloader from '../../components/Preloader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handlePreloaderComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />
  }

  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <main>
        <HeroBlock />
        <ProjectsBlock />
        <HowItsWorksBlock />
        <SkillsBlock />
        <ExperienceBlock />
        <FaqBlock />
      </main>
      <Footer />
    </Container>
  )
}

