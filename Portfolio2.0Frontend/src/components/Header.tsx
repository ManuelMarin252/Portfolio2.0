import { useState, useEffect } from 'react'
import { Box, IconButton, Link, Drawer, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import useLanguage from '../Hook/lenguage.tsx'
import EspañolIcon from './Icons/Español.tsx'
import InglesIcon from './Icons/Ingles.tsx'
import { useNavigate } from 'react-router-dom'

export function Header () {
  const [scrolled, setScrolled] = useState(false)
  const [atSection, setAtSection] = useState < string | null >(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false) // Estado para controlar el Drawer
  const { changeLanguage, language, links } = useLanguage()
  const Navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)

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

      if (window.scrollY === 0) {
        setAtSection(links[0].id)
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setAtSection(links[links.length - 1].id)
      }

      if (!foundSection) {
        setAtSection(links[0].id)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [links])

  const handleClick = (id: string) => {
    const url = window.location.href
    const urlSplit = url.split('/')
    const urlPage = urlSplit[urlSplit.length - 1]
    if (urlPage === 'Projects') {
      Navigate('/')
    }
    const element = document.getElementById(id)
    if (element != null) {
      const offset = element.offsetTop

      window.scrollTo({
        top: offset - 50,
        behavior: 'smooth'
      })
    }
    setIsDrawerOpen(false) // Cerrar el Drawer cuando se hace clic en un enlace
  }

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <Box
        component="header"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: '5px',
          pt: 0,
          width: 'auto',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: '10px',
            backgroundColor: scrolled ? 'hsla(192, 15%, 10%,1)' : 'transparent',
            borderRadius: '30px',
            transition: 'background-color 0.3s',
            width: '60%'
          }}
        >
          {/* Ícono de hamburguesa para pantallas pequeñas */}
          <IconButton
            aria-label="menu"
            color="primary"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={() => { setIsDrawerOpen(true) }}
          >
            <MenuIcon />
          </IconButton>

          {/* Navegación para pantallas más grandes */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between',
              width: '100%',
              flexDirection: 'row',
              gap: '10px'
            }}
          >
            <IconButton aria-label="menu" color="primary" onClick={() => { changeLanguage() }}>
              {language === 'es' ? <EspañolIcon /> : <InglesIcon />}
            </IconButton>
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

      {/* Drawer para pantallas pequeñas */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        color='primary'
        onClose={() => { setIsDrawerOpen(false) }}
      >
        <List>
          {links.map(link => (
            <ListItem
              button
              key={link.id}
              onClick={() => { handleClick(link.id) }}
            >
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
