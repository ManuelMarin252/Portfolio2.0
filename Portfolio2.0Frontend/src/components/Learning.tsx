import { Box, Grid, Typography } from '@mui/material'
import { Timeline, TimelineItem, TimelineDot, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab'
import { BookOutlined } from '@mui/icons-material'
import { tokens, useMode } from '../theme'
import useLanguage from '../Hook/lenguage'
export default function Learning () {
  const { education } = useLanguage()

  // dividir  education.Education que es un array de objetos en dos arrays
  const education1 = education.educacion.slice(0, Math.ceil(education.educacion.length / 2))
  const education2 = education.educacion.slice(Math.ceil(education.educacion.length / 2), education.educacion.length)
  const [theme] = useMode()
  const colors = tokens(theme.palette.mode)
  return (
    <Box id='Education' component="section" sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', py: '30px' }} >
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alingItems: 'center' }} >
        <BookOutlined fontWeight="bold" color="primary" sx={{ fontSize: `${theme.typography.h4.fontSize}`, mt: 'auto', mb: 'auto', mr: '10px' }} />
        <Typography color="primary" variant="h4" fontWeight="bold" component="h1" >{education.titulo}</Typography>
      </Box>
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alingItems: 'center', flexDirection: 'column' }} >
        <Grid width='100%' container spacing={2}>
          <Grid item xs={6}>

          <Timeline sx={{ width: '100%', '& .MuiTimelineItem-root::before': { content: 'none' }, '& .MuiTimelineConnector-root': { width: '3px' } }}>
                    {education1.map((experiencia, index) => (
                      <TimelineItem key={index} sx={{ mt: '15px' }} >
                        <TimelineSeparator>
                          <TimelineDot color="primary" sx={{ mb: '30px' }} />
                          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                        </TimelineSeparator>
                        <TimelineContent
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            p: '0',
                            pl: '10px',
                            gap: '40px'
                          }}
                        >
                          <Box width="100%" ml='20px'>
                            <Typography variant="h6" fontWeight="bold" color="primary">
                              {experiencia.titulo}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: `${colors.grey[200]}` }}>
                              {experiencia.institucion}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: `${colors.grey[200]}` }}>
                              {experiencia.fecha}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: `${colors.grey[200]}` }}>
                              {experiencia.detalles}
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
          </Grid>
        <Grid item xs={6}>

<Timeline sx={{ width: '100%', '& .MuiTimelineItem-root::before': { content: 'none' }, '& .MuiTimelineConnector-root': { width: '3px' } }}>
          {education2.map((experiencia, index) => (
            <TimelineItem key={index} sx={{ mt: '15px' }} >
              <TimelineSeparator>
                <TimelineDot color="primary" sx={{ mb: '30px' }} />
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  p: '0',
                  pl: '10px',
                  gap: '40px'
                }}
              >
                <Box width="100%" ml='20px'>
                  <Typography variant="h6" fontWeight="bold" color="primary">
                    {experiencia.titulo}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: `${colors.grey[200]}` }}>
                    {experiencia.institucion}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: `${colors.grey[200]}` }}>
                    {experiencia.fecha}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: `${colors.grey[200]}` }}>
                    {experiencia.detalles}
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
        </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
