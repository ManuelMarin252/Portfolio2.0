import { Box, Typography, Chip, Grid } from '@mui/material'
import { useState } from 'react'
import { useMode, tokens } from '../theme'
import CodeIcon from '@mui/icons-material/Code'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import LanguageIcon from '@mui/icons-material/Language'
import SwipeableViews from 'react-swipeable-views'
import { GitHub, VisibilityOutlined } from '@mui/icons-material'
import BadgeAnimatedGradientBorder from './BadgeAnimatedGradientBorder'
import type { Project } from '../types'
import useLanguage from '../Hook/lenguage'

const ProjectCard = ({ image, title, description, tags, link, github }: Project) => {
  const [theme] = useMode()
  const colors = tokens(theme.palette.mode)
  const abrirlink = (url: string) => {
    // abrir link en una nueva pestaña
    window.open(url, '_blank')
  }
  return (
  <Grid container spacing={4} className='group'sx={{ '& .MuiGrid-item.MuiGrid-item': { pl: '33px' } }} >
    <Grid item xs={12} md={6} >
      <Box
        className='relative flex flex-col items-center h-full col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform   shadow-[5px_5px_rgba(45,_144,_149,_0.4),_10px_10px_rgba(45,_144,_149,_0.3),_15px_15px_rgba(45,_144,_149,_0.2),_20px_20px_rgba(45,_144,_149,_0.1),_25px_25px_rgba(45,_144,_149,_0.05)]  overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-[5px_5px_rgba(45,_144,_149,_0.5),_10px_10px_rgba(45,_144,_149,_0.4),_15px_15px_rgba(45,_144,_149,_0.3),_20px_20px_rgba(45,_144,_149,_0.2),_25px_25px_rgba(45,_144,_149,_0.1)] lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50~'
        component="div"
      >
        <img alt="Recién llegado vs 5 años en Nueva Zelanda" className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-105 md:group-hover:scale-100" src={image} />
      </Box>
    </Grid>
    <Grid item xs={12} md={6} sx={{ maxWidth: 'lg' }}>
      <Typography variant="h5" className="text-2xl font-bold" color="primary">{title}</Typography>
      <div className="flex flex-wrap mt-2">
        <ul className="flex flex-row mb-2 gap-2 flex-wrap">
          {tags.map((tag, index) => (
                              <Chip
                                key={index}
                                label={tag.name}
                                color="primary"
                                variant="outlined"
                                icon={<tag.icon />}
                                sx={tag.class}
                              />
          ))}
        </ul>
        <Typography variant="body1" className='mt-2' sx={{ color: colors.grey[200] }}>{description}</Typography>
        <footer className="flex items-end justify-start mt-4 gap-x-4 h-full">
          {(github !== undefined && github.length > 0) && (
            <Chip
              label='Github'
              color="primary"
              variant="outlined"
              icon={<GitHub />}
              sx={{ '& .MuiChip-icon': { ml: '10px' } }}
              onClick={() => { abrirlink(github) }}
              />
          )}
          {(link !== undefined && link.length > 0) && (
            <Chip
              label='preview'
              color="primary"
              variant="outlined"
              icon={<VisibilityOutlined />}
              sx={{ '& .MuiChip-icon': { ml: '10px' } }}
              onClick={() => { abrirlink(link) }}
              />
          )}
        </footer>
      </div>
    </Grid>
  </Grid>
  )
}

export default function ProyectosPrincipales () {
  const { projectsPrincipales } = useLanguage()
  const [theme] = useMode()
  const [value, setValue] = useState(0)
  const handleChange = (newValue: number) => {
    setValue(newValue)
  }
  const proyectosWeb = projectsPrincipales.projects.filter(project => project.type === 'web')
  const proyectosVideojuegos = projectsPrincipales.projects.filter(project => project.type === 'Videojuegos')
  return (
            <Box id='Projects' component="section" sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', py: '30px', width: '100%' }} >
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alingItems: 'center' }} >
                <CodeIcon fontWeight="bold" color="primary" sx={{ fontSize: `${theme.typography.h4.fontSize}`, mt: 'auto', mb: 'auto', mr: '10px' }} />
                <Typography color="primary" variant="h4" fontWeight="bold" component="h1" >{projectsPrincipales.title}</Typography>
              </Box>
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alingItems: 'center', flexDirection: 'column' }} >
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
                              {proyectosWeb.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography variant="h6" color="primary" margin='10px'>Videojuegos</Typography>
                      <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', height: '100%' }}>
                        <Box width='100%'>
                          <Box className="w-full flex flex-col gap-y-16">
                              {proyectosVideojuegos.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                </SwipeableViews>
                <BadgeAnimatedGradientBorder link='/Projects' description='Ver Todos los proyectos' addClass='w-full mt-4' nuevaPestaña='_self'/>
                </Box>
                  </Box>
              </Box>
            </Box>
  )
}
