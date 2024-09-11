import { Box, Typography, useMediaQuery } from '@mui/material'
import { SentimentSatisfiedAltOutlined } from '@mui/icons-material'
import r from '../assets/WhatsApp Image 2021-03-25 at 12.07.04 AM (1) - copia.jpeg'
import { useMode, tokens } from '../theme'
import useLanguage from '../Hook/lenguage'

export default function AboutMe () {
  const { aboutMeContent } = useLanguage()
  const [theme] = useMode()
  const isMobile = useMediaQuery('(max-width: 600px)')
  const colors = tokens(theme.palette.mode)
  return (
                <Box id='AboutMe' component="section" sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', py: '30px' }} >
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alingItems: 'center' }} >
                <SentimentSatisfiedAltOutlined fontWeight="bold" color="primary" sx={{ fontSize: `${theme.typography.h4.fontSize}`, mt: 'auto', mb: 'auto', mr: '10px' }} />
                <Typography color="primary" variant="h4" fontWeight="bold" component="h1" >{aboutMeContent.Title}</Typography>
              </Box>
              <Box sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'space-between', alingItems: 'center' }} >
                <Box sx={{ width: isMobile ? '100%' : '60%' }}>
                  {aboutMeContent.Text.map((text, index) => (<Typography key={index} variant='subtitle1' color={colors.grey[100]} sx={{ textWarp: 'pretty', mb: '15px', fontSize: '1rem' }}>{text}</Typography>))}
                </Box>
                <Box sx={{ width: '30%', display: isMobile ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img width="300" height="300" src={r} alt='Manuel Marin' className="order-1 object-cover w-85 h-85  p-1 md:order-2 rotate-3 lg:p-2 lg:w-84 aspect-square rounded-2xl bg-[#ffffff]/20 dark:bg-[#2d9095] ring-1 ring-black/70 dark:ring-white/20 " style={{ objectPosition: '50% 50%' }}/>
                </Box>
              </Box>
            </Box>
  )
}
