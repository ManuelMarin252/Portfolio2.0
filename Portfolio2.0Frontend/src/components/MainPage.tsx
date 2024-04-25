import { Box } from '@mui/material'
import Work from './Work.tsx'
import Home from './Start.tsx'
import Skills from './Skills.tsx'
import ProyectosPrincipales from './ProyectosPrincipales.tsx'
import AboutMe from './AboutMe.tsx'

export default function MainPage () {
  return (
    <Box component="main" sx={{ padding: '10px', width: '90%', margin: 'auto', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >
      <Home />
      <Work />
      <Skills />
      <ProyectosPrincipales />
      <AboutMe />
    </Box>
  )
}
