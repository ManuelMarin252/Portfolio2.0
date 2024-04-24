/* eslint-disable react/prop-types */
import { Fade, Button, Modal, Card, useTheme, CardHeader, CardContent, Typography, Chip, Box, CardActions } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { GitHub, VisibilityOutlined } from '@mui/icons-material'
import { type Project } from '../types'

export function ModalDetalleProject ({ open, setOpen, props }: { open: boolean, setOpen: (open: boolean) => void, props: Project }) {
  const theme = useTheme()
  const abrirlink = (url: string) => {
    // abrir link en una nueva pestaña
    window.open(url, '_blank')
  }
  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '90%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    background: 'radial-gradient(200% 200% at 50% 0%, hsl(192, 15%, 10%) 45%, hsl(183, 54%, 38%) 100%)',
    boxShadow: 24,
    overflow: 'visible',
    border: '1px solid hsl(183, 54%, 38%)',
    borderRadius: '20px'
  }
  return (
    <Modal
      open={open}
      onClose={() => { setOpen(false) }}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Fade in={open}>
        <Card sx={styleModal}>
          <CardHeader
            title={props.title}
            action={
              <Button onClick={() => { setOpen(false) }}>
                <CloseIcon />
              </Button>
        }
            sx={{
              color: theme.palette.primary.main,
              borderBottom: '1px solid hsl(183, 54%, 38%)',
              '& .MuiCardHeader-title': {
                fontWeight: 'bold'
              }
            }}
          />
          <CardContent sx={{ overflow: 'auto', height: '90%' }}>
            {props.link !== undefined && (
            <iframe
            width="100%"
            height="250"
            src={`${props.link}`}
            className="iframeVideo"
            title={props.title}
          ></iframe>
            )}
            <Typography variant='body1' color='text.secondary' component='p' sx={{ textWrap: 'pretty', mt: '15px' }}>
              {props.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px', mt: '15px', width: '100%' }}>
            <Typography variant='body2' color='primary' component='h6'> Tecnologías utilizadas: </Typography>
            <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>

            {props.tags.map((tag, index) => (
                              <Chip
                                key={index}
                                label={tag.name}
                                color="primary"
                                variant="outlined"
                                icon={<tag.icon />}
                                sx={tag.class}
                              />))}
            </Box>
            </Box>
          <CardActions sx={{ mt: '10px', display: 'flex', justifyContent: 'center', alingItems: 'center', borderTop: '1px solid hsl(183, 54%, 38%)' }}>
              <Chip
              label='Github'
              color="primary"
              variant="outlined"
              icon={<GitHub />}
              sx={{ '& .MuiChip-icon': { ml: '10px' } }}
              onClick={() => { abrirlink('https://gitlab.com/manuelmarinpalomino/portfolio-manuel-enrique-marin-palomino') }}
              />
              {(props.link !== undefined && props.link.length > 0) && (

              <Chip
              label='preview'
              color="primary"
              variant="outlined"
              icon={<VisibilityOutlined />}
              sx={{ '& .MuiChip-icon': { ml: '10px' } }}
              onClick={() => { abrirlink((props.link !== undefined && props.link.length > 0) ? props.link : '') }}
              />
              )}
          </CardActions>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  )
}
