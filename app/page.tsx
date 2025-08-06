'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Team from '@/components/Team'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <Header />
      <Intro />
      <main id="main">
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
} 