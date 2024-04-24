import { Box, Grid, Chip, Typography } from '@mui/material'
import ProjectCard from './ProjectCard'
import { useState } from 'react'
import { useMode } from '../theme'

import LanguageIcon from '@mui/icons-material/Language'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import CodeIcon from '@mui/icons-material/Code'
import SwipeableViews from 'react-swipeable-views'
import useLanguage from '../Hook/lenguage'
import type { Project } from '../types'
import { ModalDetalleProject } from './ProjectModal'
export default function ProjectsPage () {
  const { allProjects } = useLanguage()
  const [project, setProject] = useState<Project>({ id: 0, title: '', description: '', image: '', link: '', tags: [], type: '' })
  const [theme] = useMode() // Asumiendo que tienes un hook llamado useMode
  const [value, setValue] = useState(0)
  const handleChange = (newValue: number) => {
    setValue(newValue)
  }
  const [open, setOpen] = useState(false)
  const handleOpen: HandleOpen = (project, setOpen) => {
    setProject(project)
    setOpen(true)
  }
  const setOpeModal = (openModal: boolean) => {
    setOpen(openModal)
  }
  const proyectosWeb = allProjects.projects.filter(project => project.type === 'web')
  const proyectosVideojuegos = allProjects.projects.filter(project => project.type === 'Videojuegos')
  return (
    <Box component="main" sx={{ padding: '10px', width: '95%', height: 'auto', minHeight: '86vh', margin: 'auto', display: 'flex', flexDirection: 'column' }} >
      <ModalDetalleProject open={open} setOpen={setOpeModal} props={project} />
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'center' }} >
        <CodeIcon fontWeight="bold" color="primary" sx={{ fontSize: `${theme.typography.h4.fontSize}`, mt: 'auto', mb: 'auto', mr: '10px' }} />
        <Typography color="primary" variant="h4" fontWeight="bold" component="h1" >{allProjects.title}</Typography>
      </Box>
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }} >
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }} >
          <Chip onClick={() => { handleChange(0) }} label='Desarrollo Web' color="primary" variant="outlined" icon={<LanguageIcon />} sx={{ mr: '10px', '& .MuiChip-icon': { ml: '10px' }, backgroundColor: value === 0 ? theme.palette.background.paper : '' }} />
          <Chip onClick={() => { handleChange(1) }} label='Videojuegos' color="primary" variant="outlined" icon={<SportsEsportsIcon />} sx={{ mr: '10px', '& .MuiChip-icon': { ml: '10px' }, backgroundColor: value === 1 ? theme.palette.background.paper : '' }} />
        </Box>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }} >
          <Box width='100%'>
            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} enableMouseEvents index={value} onChangeIndex={handleChange}>
              <Box sx={{ p: '10px', display: 'flex', flexDirection: 'column', width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6" color="primary" margin='10px'>Desarrollo Web</Typography>
                <Box sx={{ p: '10px', display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', height: '100%' }}>
                  <Box width='100%' >
                    <Box className="w-full flex flex-col gap-y-16">
                      <Grid container spacing={6}>
                        {proyectosWeb.map((project, index) => (<ProjectCard key={index} project={project} handleOpen={handleOpen} setOpen={setOpeModal} buttonText='Ver mas'></ProjectCard>))}
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ p: '20px', display: 'flex', flexDirection: 'column', width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6" color="primary" margin='10px'>Videojuegos</Typography>
                <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', height: '100%' }}>
                  <Box width='100%'>
                    <Box className="w-full flex flex-col gap-y-16">
                      <Grid container spacing={6}>
                        {proyectosVideojuegos.map((project, index) => (<ProjectCard key={index} project={project} handleOpen={handleOpen} setOpen={setOpeModal} buttonText='Ver mas'></ProjectCard>))}
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwipeableViews>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

type HandleOpen = (project: Project, setOpen: (open: boolean) => void) => void
