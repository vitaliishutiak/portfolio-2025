'use client';

import { Container } from '@mui/material'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroBlock from '../../components/HeroBlock'
import ProjectsBlock from '../../components/ProjectsBlock'
import SkillsBlock from '../../components/SkillsBlock'
import FaqBlock from '../../components/FaqBlock'
import HowItsWorksBlock from '../../components/HowItsWorksBlock'
import ExperienceBlock from '../../components/ExperienceBlock'
import PageTransition from '../../components/PageTransition'

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <PageTransition>
        <main>
          <HeroBlock />
          <ProjectsBlock />
          <HowItsWorksBlock />
          <SkillsBlock />
          <ExperienceBlock />
          <FaqBlock />
        </main>
      </PageTransition>
      <Footer />
    </Container>
  )
}

