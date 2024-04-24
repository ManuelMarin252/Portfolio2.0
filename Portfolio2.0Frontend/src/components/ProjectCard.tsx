import { Card, CardContent, CardActions, Button, Typography, Grid, CardMedia } from '@mui/material'
import { type Project } from '../types'
interface ProjectCardProps {
  project: Project
  buttonText: string
  handleOpen: (project: Project, setOpen: (open: boolean) => void) => void
  setOpen: (open: boolean) => void
}
const ProjectCard = ({ project, buttonText, handleOpen, setOpen }: ProjectCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}> {/* Ajustamos el tamaño del card según la grilla */}
      <Card
        sx={{
          width: '100%', // Hacemos que el card ocupe el 100% del ancho de su contenedor
          height: '100%', // Hacemos que el card ocupe el 100% del alto de su contenedor
          borderRadius: '20px',
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgba(45, 144, 149, 0.5)',
          '& .MuiCardMedia-root': {
            height: '150px' // Ajustamos la altura de la imagen
          }
        }}
        variant='outlined'
        className='group transition duration-500 ease-in-out transform   shadow-[0_5px_20px_rgba(45,_144,_149,_0.7)] hover:shadow-[0_10px_40px_rgba(45,_144,_149,_0.9)] hover:scale-105'
      >
        <CardMedia component="img" height="100%" image={project.image} alt={project.title} />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', pt: 0, height: '150px', justifyContent: 'space-between' }}>
          <Typography variant="subtitle2" component="h6" mt='10px' color='primary' sx={{ textAlign: 'center' }}>
            {project.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ textWrap: 'pretty', mt: 'auto' }}>
            {project.description.length > 100 ? `${project.description.slice(0, 100)}...` : project.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center', alingItems: 'center' }}>
          <Button size="small" onClick={() => { handleOpen(project, setOpen) }}>{buttonText}</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProjectCard
