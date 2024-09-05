import { useState, useEffect } from 'react'
import { Box, IconButton, Link } from '@mui/material'
import useLanguage from '../Hook/lenguage.tsx'
import EspañolIcon from './Icons/Español.tsx'
import InglesIcon from './Icons/Ingles.tsx'
import { useNavigate } from 'react-router-dom'

export function Header () {
  const [scrolled, setScrolled] = useState(false)
  const [atSection, setAtSection] = useState < string | null >(null)
  const { changeLanguage, language, links } = useLanguage()
  const Navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)

      // Verificar si el desplazamiento llega a cierta sección
      let foundSection = false
      links.forEach(link => {
        const section = document.getElementById(link.id)
        if (section != null) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          const scrollPosition = window.scrollY + window.innerHeight / 2
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setAtSection(link.id)
            foundSection = true
          }
        }
      })
      // ver si el scrfoolY llego a 0
      if (window.scrollY === 0) {
        setAtSection(links[0].id)
      }
      // ver si el scroll llego al final de la pagina
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setAtSection(links[links.length - 1].id)
      }
      // Si no se ha encontrado ninguna sección, establecer el enlace principal como activo
      if (!foundSection) {
        setAtSection(links[0].id) // Suponiendo que el primer enlace es el principal
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [links])

  // Función para ajustar el desplazamiento de la página cuando se hace clic en un enlace
  const handleClick = (id: string) => {
    // ver que pagina esta en el link del navegador
    const url = window.location.href
    const urlSplit = url.split('/')
    const urlPage = urlSplit[urlSplit.length - 1]
    if (urlPage === 'Projects') {
      Navigate('/')
    }
    const element = document.getElementById(id) // Obtener el elemento de la sección
    if (element != null) {
      const offset = element.offsetTop // Calcular el desplazamiento necesario

      window.scrollTo({
        top: offset - 50, // Ajustar el desplazamiento para dejar espacio para el encabezado
        behavior: 'smooth' // Desplazamiento suave
      })
    }
  }

  return (
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 100
          // borderRadius: '15px' // Redondea todo el contenedor// Oculta el desenfoque fuera del contenedor
          // Agrega una transición suave
        }}
      >
        <Box
          component="header"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: '5px',
            pt: 0, // Agrega una transición suave
            width: 'auto',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: '10px',
            backgroundColor: scrolled ? 'hsla(192, 15%, 10%,1)' : 'transparent',
            borderRadius: '30px', // Cambia el color de fondo cuando se ha hecho scroll
            transition: 'background-color 0.3s', // Agrega una transición suave
            width: '60%'
          }} >
        <Box
          component="nav"
          sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'row', gap: '10px' }}
        >
        <IconButton aria-label="menu" color="primary" onClick={() => { changeLanguage() }}>
          {language === 'es' ? <EspañolIcon /> : <InglesIcon />}
        </IconButton>
          {/* Mapear sobre los enlaces proporcionados */}
          {links.map(link => (
            <Link
              key={link.id}
              component="button"
              color={atSection === link.id ? 'secondary' : 'primary'}
              underline="none"
              onClick={(): void => { handleClick(link.id) }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {link.icon}
              {link.text}
            </Link>
          ))}
          </Box>
        </Box>
          </Box>
      </Box>
  )
}
