'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('English')

  const languages = [
    { name: 'English', code: 'en', flag: '🇺🇸' },
    { name: 'Français', code: 'fr', flag: '🇫🇷' },
    { name: 'Español', code: 'es', flag: '🇪🇸' },
    { name: 'Deutsch', code: 'de', flag: '🇩🇪' },
    { name: 'Português', code: 'pt', flag: '🇵🇹' },
    { name: 'Italiano', code: 'it', flag: '🇮🇹' }
  ]

  // Flag component using flag images
  const FlagIcon = ({ countryCode }: { countryCode: string }) => {
    const flagUrls: { [key: string]: string } = {
      en: 'https://flagcdn.com/w20/us.png',
      fr: 'https://flagcdn.com/w20/fr.png', 
      es: 'https://flagcdn.com/w20/es.png',
      de: 'https://flagcdn.com/w20/de.png',
      pt: 'https://flagcdn.com/w20/pt.png',
      it: 'https://flagcdn.com/w20/it.png'
    }
    
    return (
      <img 
        src={flagUrls[countryCode] || flagUrls.en}
        alt={`${countryCode} flag`}
        className="w-5 h-4 object-cover rounded-sm"
        style={{ minWidth: '20px', minHeight: '16px' }}
      />
    )
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Manage body class for mobile navigation
  useEffect(() => {
    if (!isClient) return

    if (isMobileNavActive) {
      document.body.classList.add('mobile-nav-active')
    } else {
      document.body.classList.remove('mobile-nav-active')
    }

    return () => {
      document.body.classList.remove('mobile-nav-active')
    }
  }, [isMobileNavActive, isClient])

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

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive)
  }

  const closeMobileNav = () => {
    setIsMobileNavActive(false)
  }

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  const selectLanguage = (language: { name: string, code: string, flag: string }) => {
    setCurrentLanguage(language.name)
    setIsLanguageDropdownOpen(false)
    // Here you can add logic to change the actual language
    console.log(`Language changed to: ${language.name} (${language.code})`)
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
            <li className="language-selector">
              <div className="relative">
                <button 
                  onClick={toggleLanguageDropdown}
                  className="language-btn flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <FlagIcon countryCode={languages.find(lang => lang.name === currentLanguage)?.code || 'en'} />
                  <span className="text-sm font-medium text-gray-700">
                    {currentLanguage}
                  </span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    {languages.map((language) => (
                                             <button
                         key={language.code}
                         onClick={() => selectLanguage(language)}
                         className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                           currentLanguage === language.name ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                         }`}
                       >
                         <FlagIcon countryCode={language.code} />
                         <span className="text-sm font-medium">{language.name}</span>
                       </button>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="mobile-nav-toggle d-lg-none">
          <button onClick={toggleMobileNav}>
            <i className={`fa ${isMobileNavActive ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isClient && isMobileNavActive && (
        <div className="mobile-nav-overly active" onClick={closeMobileNav}></div>
      )}

      {/* Mobile Navigation Menu */}
      <nav className={`mobile-nav ${isClient && isMobileNavActive ? 'active' : ''}`}>
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
          <li className="mobile-language-section">
            <div className="mobile-language-header">
              <span className="text-sm font-medium text-gray-600">Language</span>
            </div>
            <div className="mobile-language-options">
              {languages.map((language) => (
                                 <button
                   key={language.code}
                   onClick={() => selectLanguage(language)}
                   className={`mobile-language-option flex items-center space-x-3 w-full px-4 py-3 text-left ${
                     currentLanguage === language.name ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                   }`}
                 >
                   <FlagIcon countryCode={language.code} />
                   <span className="text-sm font-medium">{language.name}</span>
                 </button>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
} 