import { Box, Typography, Chip } from '@mui/material'
import { useMode, tokens } from '../theme'
import { WhatsApp, LinkedIn } from '@mui/icons-material'
import useLanguage from '../Hook/lenguage'

export default function Footer () {
  const [theme] = useMode()
  const colors = tokens(theme.palette.mode)
  const CurrentYear = new Date().getFullYear()
  const { footerContent } = useLanguage()
  const abrirlink = (url: string) => {
    // abrir link en una nueva pestaña
    window.open(url, '_blank')
  }
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        width: '90%',
        margin: 'auto',
        py: '30px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alingItems: 'center',
          gap: '10px',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="subtitle2" color={colors.grey[100]} m="auto" fontWeight="bold" component="h2"> © {CurrentYear} {footerContent.text}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <Chip variant="outlined" onClick={() => { abrirlink('https://api.whatsapp.com/send?phone=5491173699882') }} icon={<WhatsApp fontSize="small" />} label={footerContent.contact} />
          <Chip variant="outlined" onClick={() => { abrirlink('https://linkedin.com/in/manuel-enrique-marin-palomino') }} icon={<LinkedIn fontSize="small" />} label="LikedIn" />
        </Box>
      </Box>
    </Box>
  )
}
