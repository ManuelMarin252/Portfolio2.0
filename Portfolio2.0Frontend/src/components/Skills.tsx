import { Box, Chip, MobileStepper, Typography } from '@mui/material'
import { useState } from 'react'
import { autoPlay } from 'react-swipeable-views-utils'
import SwipeableViews from 'react-swipeable-views'
import { BeenhereOutlined } from '@mui/icons-material'
import { useMode } from '../theme'
import useLanguage from '../Hook/lenguage'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
export default function Skills () {
  const { categorias } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)
  const [hovered, setHovered] = useState(false)
  const maxSteps = categorias.length
  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }
  const [theme] = useMode()
  return (
                <Box id='Skills' component="section" sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', py: '30px' }} >
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alingItems: 'center' }} >
                <BeenhereOutlined fontWeight="bold" color="primary" sx={{ fontSize: `${theme.typography.h4.fontSize}`, mt: 'auto', mb: 'auto', mr: '10px' }} />
                <Typography color="primary" variant="h4" fontWeight="bold" component="h1" >Skills</Typography>
              </Box>
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alingItems: 'center', flexDirection: 'column' }} >
                <Box width='100%' onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }} sx={{ userSelect: 'none', cursor: hovered ? 'pointer' : 'auto' }}>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    autoplay = {true}
                    interval = {6000}
                  >
                      {categorias.map((categoria, index) => (
                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '25vh', justifyContent: 'center', alignItems: 'center' }}>
                          <Typography variant="h6" color="primary" margin='10px'>{categoria.titulo}</Typography>
                          <Box sx={{ display: 'flex', width: '70%', flexWrap: 'wrap', justifyContent: 'center', height: '100%' }}>
                            {categoria.iconos.map((icono, iconIndex) => (
                              <Chip
                                key={iconIndex}
                                label={icono.label}
                                color="primary"
                                variant="outlined"
                                icon={icono.icon}
                                sx={{ mr: '10px', '& .MuiChip-icon': { ...icono.iconStyle, ml: '10px' } }}
                              />
                            ))}
                          </Box>
                    </Box>
                      ))}
                  </AutoPlaySwipeableViews>
                </Box>
                <MobileStepper variant="progress" steps={maxSteps} position="static" sx={{ width: '100%', background: 'transparent', flexGrow: 1, justifyContent: 'center' }} activeStep={activeStep} backButton={null} nextButton={null} />
              </Box>
            </Box>
  )
}
