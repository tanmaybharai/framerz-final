import { useEffect } from 'react'


// export const useSmoothScroll = () => {
//   useEffect(() => {
//     // Enhanced smooth scrolling for the entire document
//     const style = document.createElement('style')
//     style.textContent = `
//       html {
//         scroll-behavior: smooth;
//         scroll-padding-top: 80px;
//       }
      
//       * {
//         scroll-behavior: smooth;
//       }
//     `
//     document.head.appendChild(style)

//     return () => {
//       document.head.removeChild(style)
//     }
//   }, [])

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       const navbarHeight = 80
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
//       const offsetPosition = elementPosition - navbarHeight

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       })
//     }
//   }

//   return { scrollToSection }
// }

// export const useScrollReveal = () => {
//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '-50px 0px -50px 0px'
//     }

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('revealed')
//         }
//       })
//     }, observerOptions)

//     // Observe all scroll-reveal elements
//     const scrollElements = document.querySelectorAll('.scroll-reveal')
//     scrollElements.forEach(el => observer.observe(el))

//     return () => {
//       scrollElements.forEach(el => observer.unobserve(el))import { useEffect } from 'react'


export const useSmoothScroll = () => {
  useEffect(() => {
    // Apply smooth scrolling to the whole page
    const style = document.createElement('style')
    style.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
      }

      * {
        scroll-behavior: smooth;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Scroll to specific section with navbar offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return { scrollToSection }
}

//     }
//   }, [])
// }
