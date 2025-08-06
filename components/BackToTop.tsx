'use client'

import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <a 
      href="#" 
      className={`back-to-top ${isVisible ? 'd-block' : 'd-none'}`}
      onClick={(e) => {
        e.preventDefault()
        scrollToTop()
      }}
    >
      <i className="fa fa-chevron-up"></i>
    </a>
  )
} 