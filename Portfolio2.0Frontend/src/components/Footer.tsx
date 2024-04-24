import { Box, Typography, Chip } from '@mui/material'
import { useMode, tokens } from '../theme'
import { WhatsApp, LinkedIn } from '@mui/icons-material'

export default function Footer () {
  const [theme] = useMode()
  const colors = tokens(theme.palette.mode)
  const CurrentYear = new Date().getFullYear()
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
        width: '70%',
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
        <Typography variant="subtitle1" color={colors.grey[100]} fontWeight="bold" component="h2"> © {CurrentYear} Manuel Enrique Marin Palomino. Portfolio Inspirado en el hecho por MiduDev. Hecho en React con TypeScript.</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <Chip variant="outlined" onClick={() => { abrirlink('https://api.whatsapp.com/send?phone=5491173699882') }} icon={<WhatsApp fontSize="small" />} label="Contactame" />
          <Chip variant="outlined" onClick={() => { abrirlink('https://linkedin.com/in/manuel-enrique-marin-palomino') }} icon={<LinkedIn fontSize="small" />} label="LikedIn" />
        </Box>
      </Box>
    </Box>
  )
}
