'use client';

import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollAnimationsProps {
  children: React.ReactNode
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Animate headings
      gsap.fromTo(".animate-heading", 
        { 
          opacity: 0, 
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".animate-heading",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate cards with stagger
      gsap.fromTo(".animate-card", 
        { 
          opacity: 0, 
          y: 60,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.7, 
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".animate-card",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate text blocks
      gsap.fromTo(".animate-text", 
        { 
          opacity: 0, 
          y: 30 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".animate-text",
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate buttons with bounce effect
      gsap.fromTo(".animate-button", 
        { 
          opacity: 0, 
          scale: 0.8 
        },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".animate-button",
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate images with scale effect
      gsap.fromTo(".animate-image", 
        { 
          opacity: 0, 
          scale: 1.1 
        },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".animate-image",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate project cards with 3D effect
      gsap.fromTo(".animate-project-card", 
        { 
          opacity: 0, 
          y: 80,
          rotationX: 15,
          transformOrigin: "center bottom"
        },
        { 
          opacity: 1, 
          y: 0,
          rotationX: 0,
          duration: 0.8, 
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".animate-project-card",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate FAQ accordions
      gsap.fromTo(".animate-faq", 
        { 
          opacity: 0, 
          y: 40 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".animate-faq",
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate skill cards with rotation
      gsap.fromTo(".animate-skill-card", 
        { 
          opacity: 0, 
          y: 50,
          rotation: 5
        },
        { 
          opacity: 1, 
          y: 0,
          rotation: 0,
          duration: 0.7, 
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".animate-skill-card",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate achievement numbers
      gsap.fromTo(".animate-number", 
        { 
          opacity: 0, 
          scale: 0.5 
        },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".animate-number",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={containerRef}>
      {children}
    </Box>
  )
}

export default ScrollAnimations
