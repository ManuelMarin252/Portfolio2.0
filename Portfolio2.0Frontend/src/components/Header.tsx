import { Box, IconButton, Link } from '@mui/material'
import { Monitor } from '@mui/icons-material'
export function Header () {
  return (
      <Box component='header' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: '5px', width: '1120px' }}>
        <IconButton aria-label='menu' color="primary">
          <Monitor/>
        </IconButton>
        <Box component='nav' sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Link component='button' color='primary' underline="none">Home</Link>
          <Link component='button' color='primary' underline="none">About</Link>
          <Link component='button' color='primary' underline="none">Projects</Link>
          <Link component='button' color='primary' underline="none">Contact</Link>
        </Box>
      </Box>
  )
}
