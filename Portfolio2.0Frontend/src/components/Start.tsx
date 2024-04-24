import { Box, Avatar, Typography, Chip } from '@mui/material'
import r from '../assets/WhatsApp Image 2021-03-25 at 12.07.04 AM (1) - copia.jpeg'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useMode, tokens } from '../theme'
import BadgeAnimatedGradientBorder from './BadgeAnimatedGradientBorder'
import useLanguage from '../Hook/lenguage'

export default function Home () {
  const { HomeContent } = useLanguage()
  const abrirlink = (url: string) => {
    // abrir link en una nueva pestaña
    window.open(url, '_blank')
  }
  const [theme] = useMode()
  const colors = tokens(theme.palette.mode)
  return (
            <Box id='home' component="section" sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', py: '20px' }} >
              <Box width="auto">
                <Avatar sx={{ width: '100px', height: '100px' }} src={r}/>
              </Box>
              <Box width='100%'>
                <Box display='flex' gap='10px'>
                  <Typography color="primary" variant="h6" align="justify" fontWeight="bold" component="h1" sx={{ textWarp: 'pretty' }}>{HomeContent.PrimerTexto[0]}{' '} </Typography>
                  <Box component='span' className='flex items-center transition md:justify-center md:hover:scale-105'><BadgeAnimatedGradientBorder link='https://linkedin.com/in/manuel-enrique-marin-palomino' description={HomeContent.badgeText} /></Box>
                </Box>
                <Box sx={{ color: `${colors.grey[100]}`, fontSize: '1.5rem', width: '100%' }} >
                  <Typography variant="body1" sx={{ textWarp: 'pretty' }}>{HomeContent.PrimerTexto[1]}{' '}<Box component="span" sx={{ color: theme.palette.primary.main }} >{HomeContent.PrimerTexto[2]}</Box>{' '}{HomeContent.PrimerTexto[3]}</Typography>
                </Box>
                <Box sx={{ mt: '10px', display: 'flex', gap: '10px' }}>
                  <Chip variant="outlined" onClick={() => { abrirlink('https://api.whatsapp.com/send?phone=5491173699882') }} icon={<WhatsAppIcon fontSize="small" />} label={HomeContent.SegundoTexto[0]} />
                  <Chip variant="outlined" onClick={() => { abrirlink('https://linkedin.com/in/manuel-enrique-marin-palomino') }} icon={<LinkedInIcon fontSize="small" />} label={HomeContent.SegundoTexto[1]} />
                  <Chip variant="outlined" onClick={() => { abrirlink('https://gitlab.com/manuelmarinpalomino/portfolio-manuel-enrique-marin-palomino') }} icon={<GitHubIcon fontSize="small" />} label={HomeContent.SegundoTexto[2]} />
                </Box>
              </Box>
            </Box>
  )
}
