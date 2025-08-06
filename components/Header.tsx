'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = document.getElementById('header')?.offsetHeight || 0
      const topSpace = isScrolled ? headerHeight : headerHeight - 20
      
      window.scrollTo({
        top: element.offsetTop - topSpace,
        behavior: 'smooth'
      })
    }
    
    // Close mobile nav if open
    if (isMobileNavActive) {
      setIsMobileNavActive(false)
    }
  }

  return (
    <header id="header" className={`fixed-top ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="logo float-left">
          <Image 
            src="/allfiles/img/softtract-logo.svg" 
            alt="Softtract" 
            width={170} 
            height={50}
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </div>

        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active">
              <button onClick={() => scrollToSection('intro')}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')}>About Us</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact Us</button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="mobile-nav d-lg-none">
          <button 
            className="mobile-nav-toggle"
            onClick={() => setIsMobileNavActive(!isMobileNavActive)}
          >
            <i className={`fa ${isMobileNavActive ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {isMobileNavActive && (
          <div className="mobile-nav-overly" onClick={() => setIsMobileNavActive(false)}></div>
        )}

        <nav className={`mobile-nav ${isMobileNavActive ? 'active' : ''}`}>
          <ul>
            <li className="active">
              <button onClick={() => scrollToSection('intro')}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')}>About Us</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact Us</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 