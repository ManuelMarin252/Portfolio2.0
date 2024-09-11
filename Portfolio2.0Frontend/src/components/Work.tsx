import { Box, Typography } from '@mui/material'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import { Timeline, TimelineItem, TimelineDot, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab'
import { useMode, tokens } from '../theme'
import useLanguage from '../Hook/lenguage'

export default function Work () {
  const [theme] = useMode()
  const colors = tokens(theme.palette.mode)
  const { experienciaLaboral } = useLanguage()
  return (
    <Box id="experiencia" component="section" sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', py: '30px' }}>
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'center' }}>
        <WorkOutlineOutlinedIcon fontWeight="bold" color="primary" sx={{ fontSize: `${theme.typography.h4.fontSize}`, mt: 'auto', mb: 'auto', mr: '10px' }} />
        <Typography color="primary" variant="h4" fontWeight="bold" component="h1">{experienciaLaboral.titulo}</Typography>
      </Box>
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'center' }}>
        <Timeline sx={{ width: '100%', '& .MuiTimelineItem-root::before': { content: 'none' }, '& .MuiTimelineConnector-root': { width: '3px' } }}>
          {experienciaLaboral.experiencia.map((experiencia, index) => (
            <TimelineItem key={index} sx={{ mt: '15px' }} >
              <TimelineSeparator>
                <TimelineDot color="primary" sx={{ mb: '30px' }} />
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  p: '0',
                  pl: '10px',
                  gap: '40px'
                }}
              >
                <Box width="50%" ml='20px'>
                  <Typography variant="h6" fontWeight="bold" color="primary">
                    {experiencia.puesto}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: `${colors.grey[200]}` }}>
                    {experiencia.empresa}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: `${colors.grey[200]}` }}>
                    {experiencia.fecha}
                  </Typography>
                </Box>
                <Box width="100%">
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ color: `${colors.grey[200]}`, display: 'flex', justifyContent: 'center', whiteSpace: 'pre-wrap' }}>
                    {experiencia.detalles()}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
          <TimelineItem sx={{ mt: '15px' }}>

          <TimelineSeparator>
            <TimelineDot color="primary" sx={{ mb: '30px' }} />
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  )
}
