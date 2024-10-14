import LanguageContext from '../Context/lenguageContext'
import { useContext } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material'
import { BeenhereOutlined, BookOutlined, Circle, Code, Home, SentimentSatisfiedAltOutlined, WorkOutlineOutlined } from '@mui/icons-material'
import type { IHomeContent, ILinks, ExperienciaLaboral, Categorias, ProjectsPrincipales, Project, AboutMeContent } from '../types'
import r from '../assets/FUID.webp'
import e from '../assets/InventarioReact.webp'
import f from '../assets/MultijugadorGame.webp'
import g from '../assets/Optimización.webp'
import { NodejsIcon, ReactIcon, CsharpIcon, PythonIcon, JavascriptIcon, TypescriptIcon, HTML5Icon, CssIcon, VueIcon, BootstrapIcon, MaterialUiIcon, FlaskIcon, MsqlServerIcon, MysqlIcon, PostgresqlIcon, SqlliteIcon, MongodbIcon, WwiseIcon, ReaperIcon, BlenderIcon, UnrealIcon, UnityIcon, IllustratorIcon, PhotoshopIcon, PremierIcon, AftereffectsIcon, FigmaIcon, CanvaIcon, GithubIcon, OpenaiIcon, AmazonwebserviceIcon, WindowsIcon, LinuxIcon, EspañolIcon, InglesIcon, GooglecloudIcon, CmasIcon } from '../components/Icons'
import LanguageIcon from '@mui/icons-material/Language'
import imagenes from '../imagenes'
export default function useLanguage () {
  const { language, changeLanguage } = useContext(LanguageContext)
  const traduccion: Traduccion = {
    Header: language === 'es' ? linksEs : linksEn,
    HomeContent: language === 'es' ? HomeContentEs : HomeContentEn,
    experienciaLaboral: language === 'es' ? experienciaLaboralEs : experienciaLaboralEn,
    categorias: language === 'es' ? categoriasEs : categoriasEn,
    projectsPrincipales: language === 'es' ? projectsPrincipalesEs : projectsPrincipalesEn,
    AboutMeContent: language === 'es' ? aboutMeContentEs : aboutMeContentEn,
    allProjects: language === 'es' ? projectsEs : projectsEn,
    footerContent: language === 'es' ? footerContentEs : footerContentEn,
    education: language === 'es' ? educationEs : educationEn
  }
  return { language, changeLanguage, links: traduccion.Header, HomeContent: traduccion.HomeContent, experienciaLaboral: traduccion.experienciaLaboral, categorias: traduccion.categorias, projectsPrincipales: traduccion.projectsPrincipales, aboutMeContent: traduccion.AboutMeContent, allProjects: traduccion.allProjects, footerContent: traduccion.footerContent, education: traduccion.education }
}
interface Traduccion {
  Header: ILinks
  HomeContent: IHomeContent
  experienciaLaboral: ExperienciaLaboral
  categorias: Categorias
  projectsPrincipales: ProjectsPrincipales
  AboutMeContent: AboutMeContent
  allProjects: ProjectsPrincipales
  footerContent: FooterContent
  education: Education
}

const HomeContentEs: IHomeContent = {
  PrimerTexto: ['Hey, soy Manuel Enrique Marin Palomino', '3 años de experiencia.', 'Desarrollador Fullstack y Videojuegos.', 'De buenos Aires,Argentina. Especializado en crear aplicaciones unicas.'],
  badgeText: 'disponible para trabajar',
  SegundoTexto: ['Contactame', 'LikedIn', 'GitHub']
}
const HomeContentEn: IHomeContent = {
  PrimerTexto: ["Hey, I'm Manuel Enrique Marin Palomino", '3 years of experience.', 'Fullstack Developer and Video Games.', 'From Buenos Aires, Argentina. Specialized in creating unique applications.'],
  badgeText: 'available for work',
  SegundoTexto: ['Contact me', 'LinkedIn', 'GitHub']
}
const linksEs: ILinks = [
  { id: 'home', text: 'Home', icon: <Home /> },
  { id: 'Skills', text: 'Skills', icon: <BeenhereOutlined /> },
  { id: 'Projects', text: 'Projectos', icon: <Code /> },
  { id: 'experiencia', text: 'Experiencia', icon: <WorkOutlineOutlined/> },
  { id: 'Education', text: 'Educación', icon: <BookOutlined /> },
  { id: 'AboutMe', text: 'Sobre Mi', icon: <SentimentSatisfiedAltOutlined /> }
]
const linksEn: ILinks = [
  { id: 'home', text: 'Home', icon: <Home /> },
  { id: 'Skills', text: 'Skills', icon: <BeenhereOutlined /> },
  { id: 'Projects', text: 'Projects', icon: <Code /> },
  { id: 'experiencia', text: 'Experience', icon: <WorkOutlineOutlined/> },
  { id: 'Education', text: 'Education', icon: <BookOutlined /> },
  { id: 'AboutMe', text: 'About Me', icon: <SentimentSatisfiedAltOutlined /> }
]
interface Education {
  titulo: string
  educacion: Array<{
    titulo: string
    institucion: string
    fecha: string
    detalles: string
  }>
}
const educationEs: Education = {
  titulo: 'Educación',
  educacion: [
    {
      titulo: 'Licenciatura en Producción de Simuladores y Videojuegos',
      institucion: 'Universidad Abierta Interamericana',
      fecha: '2020 - Actualidad',
      detalles: 'Game Desing, Animacion 3D, Programacion de Videojuegos, Desarrollo de Simuladores'
    },
    {
      titulo: 'Fullstack Python Developer',
      institucion: 'Codo a Codo 4.0',
      fecha: '2021',
      detalles: 'Desarrollo de Aplicaciones Web, Programacion en Python, Flask, SQL, HTML, CSS, Javascript, Vue.js'
    },
    {
      titulo: 'Fullstack Node-React Developer',
      institucion: 'Codo a Codo 4.0',
      fecha: '2022',
      detalles: 'Desarrollo de Aplicaciones Web, Programacion en Node.js, React, SQL, HTML, CSS, Javascript, Bootstrap'
    },
    {
      titulo: 'Google Cloud Computing Foundations',
      institucion: 'Google',
      fecha: '2023',
      detalles: 'Fundamentos de Computacion en la Nube, Google Cloud, Google Cloud Platform, Google Cloud Storage'
    },
    {
      titulo: 'Diseño UI/UX',
      institucion: 'Codo a Codo 4.0',
      fecha: '2024',
      detalles: 'Diseño de Interfaces de Usuario, Experiencia de Usuario, Figma, Adobe XD, Canva, User Research'
    }
  ]
}
const educationEn: Education = {
  titulo: 'Education',
  educacion: [
    {
      titulo: 'Bachelor in Simulator and Video Game Production',
      institucion: 'Universidad Abierta Interamericana',
      fecha: '2020 - Present',
      detalles: 'Game Desing, 3D Animation, Video Game Programming, Simulator Development'
    },
    {
      titulo: 'Fullstack Python Developer',
      institucion: 'Codo a Codo 4.0',
      fecha: '2021',
      detalles: 'Web Application Development, Python Programming, Flask, SQL, HTML, CSS, Javascript, Vue.js'
    },
    {
      titulo: 'Fullstack Node-React Developer',
      institucion: 'Codo a Codo 4.0',
      fecha: '2022',
      detalles: 'Web Application Development, Node.js Programming, React, SQL, HTML, CSS, Javascript, Bootstrap'
    },
    {
      titulo: 'Google Cloud Computing Foundations',
      institucion: 'Google',
      fecha: '2023',
      detalles: 'Cloud Computing Fundamentals, Google Cloud, Google Cloud Platform, Google Cloud Storage'
    },
    {
      titulo: 'UI/UX Design',
      institucion: 'Codo a Codo 4.0',
      fecha: '2024',
      detalles: 'User Interface Design, User Experience, Figma, Adobe XD, Canva, User Research'
    }
  ]
}
const experienciaLaboralEn: ExperienciaLaboral = {
  titulo: 'Work Experience',
  experiencia: [
    {
      puesto: 'Freelance Fullstack Developer',
      empresa: 'Conec7a',
      descripcion: 'Developed web applications for a Colombian company',
      fecha: '2021 - 2024',
      detalles: () => {
        const isMobile = useMediaQuery('(max-width: 600px)')

        return (
    <List>
      <ListItem>
        {!isMobile && (
          <ListItemIcon>
            <Circle sx={{ fontSize: 8, color: 'primary.main' }} /> {/* Bullet point icon */}
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography>
              <strong>Critical Web Projects:</strong> Designed, developed, and maintained three essential web projects for the company.
            </Typography>
          }
        />
      </ListItem>

      <ListItem>
        {!isMobile && (
          <ListItemIcon>
            <Circle sx={{ fontSize: 8, color: 'primary.main' }} />
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography>
              <strong>System Migration:</strong> Migrated two legacy systems from Visual Basic to Python-Flask and React, improving application effectiveness and scalability.
            </Typography>
          }
        />
      </ListItem>

      <ListItem>
        {!isMobile && (
          <ListItemIcon>
            <Circle sx={{ fontSize: 8, color: 'primary.main' }} />
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography>
              <strong>Planning and Execution:</strong> Carefully planned and executed the system transitions, ensuring a smooth and uninterrupted migration.
            </Typography>
          }
        />
      </ListItem>

      <ListItem>
        {!isMobile && (
          <ListItemIcon>
            <Circle sx={{ fontSize: 8, color: 'primary.main' }} />
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography>
              <strong>Optimization and Maintenance:</strong> Optimized the applications and provided ongoing maintenance to guarantee optimal performance.
            </Typography>
          }
        />
      </ListItem>

      <ListItem>
        {!isMobile && (
          <ListItemIcon>
            <Circle sx={{ fontSize: 8, color: 'primary.main' }} />
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography>
              <strong>User Experience Improvement:</strong> Ensured a satisfying user experience by enhancing performance and application scalability.
            </Typography>
          }
        />
      </ListItem>
    </List>
        )
      }

    }
  ]
}
const experienciaLaboralEs: ExperienciaLaboral = {
  titulo: 'Experiencia Laboral',
  experiencia: [
    {
      puesto: 'Desarrollador Fullstack Freelance',
      empresa: 'Conec7a',
      descripcion: 'Desarrollador de aplicaciones web para empresa colombiana',
      fecha: '2021 - 2024',
      detalles: () => {
        const isMobile = useMediaQuery('(max-width: 600px)')

        return (
    <List>
      <ListItem>
        {!isMobile && (
          <ListItemIcon>
            <Circle sx={{ fontSize: 8, color: 'primary.main' }} /> {/* Icono de punto */}
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography>
              <strong>Proyectos Web Clave:</strong> Diseñé, desarrollé y mantuve tres proyectos web fundamentales para la empresa.
            </Typography>
          }
        />
      </ListItem>

      <ListItem>
        {!isMobile && (
          <ListItemIcon>
            <Circle sx={{ fontSize: 8, color: 'primary.main' }} />
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography>
              <strong>Migración de Sistemas:</strong> Migré dos sistemas heredados de Visual Basic a Python-Flask y React, mejorando la eficacia y escalabilidad de las aplicaciones.
            </Typography>
          }
        />
      </ListItem>

      <ListItem>
        {!isMobile && (
          <ListItemIcon>
            <Circle sx={{ fontSize: 8, color: 'primary.main' }} />
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography>
              <strong>Planificación y Ejecución:</strong> Planifiqué y ejecuté cuidadosamente la transición de los sistemas, asegurando una migración fluida y sin interrupciones.
            </Typography>
          }
        />
      </ListItem>

      <ListItem>
        {!isMobile && (
          <ListItemIcon>
            <Circle sx={{ fontSize: 8, color: 'primary.main' }} />
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography>
              <strong>Optimización y Mantenimiento:</strong> Optimicé las aplicaciones y brindé mantenimiento continuo para garantizar un rendimiento óptimo.
            </Typography>
          }
        />
      </ListItem>

      <ListItem>
        {!isMobile && (
          <ListItemIcon>
            <Circle sx={{ fontSize: 8, color: 'primary.main' }} />
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography>
              <strong>Mejora de la Experiencia de Usuario:</strong> Aseguré una experiencia de usuario satisfactoria mediante la mejora del rendimiento y la escalabilidad de las aplicaciones.
            </Typography>
          }
        />
      </ListItem>
    </List>
        )
      }

    }
  ]
}

const categoriasEs: Categorias = [
  {
    titulo: 'Lenguajes Programación',
    iconos: [
      { label: 'C#', icon: <CsharpIcon />, iconStyle: { ml: '10px' } },
      { label: 'Javascript', icon: <JavascriptIcon />, iconStyle: { ml: '15px' } },
      { label: 'Typescript', icon: <TypescriptIcon />, iconStyle: { ml: '15px' } },
      { label: 'Python', icon: <PythonIcon />, iconStyle: { ml: '5px', mr: '-10px', width: '2em', height: '2em' } }
    ]
  },
  {
    titulo: 'Desarrollo Web',
    iconos: [
      { label: 'HTML5', icon: <HTML5Icon />, iconStyle: { ml: '10px' } },
      { label: 'CSS', icon: <CssIcon />, iconStyle: { ml: '10px' } },
      { label: 'Bootstrap', icon: <BootstrapIcon />, iconStyle: { ml: '15px' } },
      { label: 'Material UI', icon: <MaterialUiIcon />, iconStyle: { ml: '15px' } },
      { label: 'Vue.js', icon: <VueIcon />, iconStyle: { ml: '10px' } },
      { label: 'React', icon: <ReactIcon />, iconStyle: { ml: '10px' } },
      { label: 'Node', icon: <NodejsIcon />, iconStyle: { ml: '10px' } },
      { label: 'Flask', icon: <FlaskIcon />, iconStyle: { ml: '10px' } }
    ]
  },
  {
    titulo: 'Bases de Datos',
    iconos: [
      { label: 'Microsoft SQL Server', icon: <MsqlServerIcon />, iconStyle: { ml: '10px' } },
      { label: 'MySQL', icon: <MysqlIcon />, iconStyle: { ml: '10px' } },
      { label: 'PostgreSQL', icon: <PostgresqlIcon />, iconStyle: { ml: '15px' } },
      { label: 'SQLite', icon: <SqlliteIcon />, iconStyle: { ml: '15px' } },
      { label: 'MongoDB', icon: <MongodbIcon />, iconStyle: { ml: '15px' } }
    ]
  },
  {
    titulo: 'Desarollo de Videojuegos',
    iconos: [
      { label: 'Unity', icon: <UnityIcon />, iconStyle: { ml: '10px' } },
      { label: 'Unreal', icon: <UnrealIcon />, iconStyle: { ml: '10px' } },
      { label: 'Blender', icon: <BlenderIcon />, iconStyle: { ml: '15px' } },
      { label: 'Reaper', icon: <ReaperIcon />, iconStyle: { ml: '15px' } },
      { label: 'Wwise', icon: <WwiseIcon />, iconStyle: { ml: '15px' } }
    ]
  },
  {
    titulo: 'Diseño Grafico',
    iconos: [
      { label: 'Illustrator', icon: <IllustratorIcon />, iconStyle: { ml: '10px' } },
      { label: 'Photoshop', icon: <PhotoshopIcon />, iconStyle: { ml: '10px' } },
      { label: 'AfterEfects', icon: <AftereffectsIcon />, iconStyle: { ml: '15px' } },
      { label: 'Premier', icon: <PremierIcon />, iconStyle: { ml: '15px' } },
      { label: 'Figma', icon: <FigmaIcon />, iconStyle: { ml: '15px' } },
      { label: 'Canva', icon: <CanvaIcon />, iconStyle: { ml: '15px' } }
    ]
  },
  {
    titulo: 'Otros',
    iconos: [
      { label: 'Github', icon: <GithubIcon />, iconStyle: { ml: '10px' } },
      { label: 'OpenAI', icon: <OpenaiIcon />, iconStyle: { ml: '10px' } },
      { label: 'Amazon Web Service', icon: <AmazonwebserviceIcon />, iconStyle: { ml: '10px' } },
      { label: 'Google Cloud', icon: <GooglecloudIcon />, iconStyle: { ml: '10px' } },
      { label: 'Windows', icon: <WindowsIcon />, iconStyle: { ml: '10px' } },
      { label: 'Linux', icon: <LinuxIcon />, iconStyle: { ml: '10px' } },
      { label: 'Español', icon: <EspañolIcon />, iconStyle: { ml: '15px' } },
      { label: 'Ingles', icon: <InglesIcon />, iconStyle: { ml: '15px' } }
    ]
  }
]
const categoriasEn: Categorias = [
  {
    titulo: 'Programming Languages',
    iconos: [
      { label: 'C#', icon: <CsharpIcon />, iconStyle: { ml: '10px' } },
      { label: 'Javascript', icon: <JavascriptIcon />, iconStyle: { ml: '15px' } },
      { label: 'Typescript', icon: <TypescriptIcon />, iconStyle: { ml: '15px' } },
      { label: 'Python', icon: <PythonIcon />, iconStyle: { ml: '5px', mr: '-10px', width: '2em', height: '2em' } }
    ]
  },
  {
    titulo: 'Web Development',
    iconos: [
      { label: 'HTML5', icon: <HTML5Icon />, iconStyle: { ml: '10px' } },
      { label: 'CSS', icon: <CssIcon />, iconStyle: { ml: '10px' } },
      { label: 'Bootstrap', icon: <BootstrapIcon />, iconStyle: { ml: '15px' } },
      { label: 'Material UI', icon: <MaterialUiIcon />, iconStyle: { ml: '15px' } },
      { label: 'Vue.js', icon: <VueIcon />, iconStyle: { ml: '10px' } },
      { label: 'React', icon: <ReactIcon />, iconStyle: { ml: '10px' } },
      { label: 'Node', icon: <NodejsIcon />, iconStyle: { ml: '10px' } },
      { label: 'Flask', icon: <FlaskIcon />, iconStyle: { ml: '10px' } }
    ]
  },
  {
    titulo: 'Databases',
    iconos: [
      { label: 'Microsoft SQL Server', icon: <MsqlServerIcon />, iconStyle: { ml: '10px' } },
      { label: 'MySQL', icon: <MysqlIcon />, iconStyle: { ml: '10px' } },
      { label: 'PostgreSQL', icon: <PostgresqlIcon />, iconStyle: { ml: '15px' } },
      { label: 'SQLite', icon: <SqlliteIcon />, iconStyle: { ml: '15px' } },
      { label: 'MongoDB', icon: <MongodbIcon />, iconStyle: { ml: '15px' } }
    ]
  },
  {
    titulo: 'Game Development',
    iconos: [
      { label: 'Unity', icon: <UnityIcon />, iconStyle: { ml: '10px' } },
      { label: 'Unreal', icon: <UnrealIcon />, iconStyle: { ml: '10px' } },
      { label: 'Blender', icon: <BlenderIcon />, iconStyle: { ml: '15px' } },
      { label: 'Reaper', icon: <ReaperIcon />, iconStyle: { ml: '15px' } },
      { label: 'Wwise', icon: <WwiseIcon />, iconStyle: { ml: '15px' } }
    ]
  },
  {
    titulo: 'Graphic Design',
    iconos: [
      { label: 'Illustrator', icon: <IllustratorIcon />, iconStyle: { ml: '10px' } },
      { label: 'Photoshop', icon: <PhotoshopIcon />, iconStyle: { ml: '10px' } },
      { label: 'AfterEffects', icon: <AftereffectsIcon />, iconStyle: { ml: '15px' } },
      { label: 'Premier', icon: <PremierIcon />, iconStyle: { ml: '15px' } },
      { label: 'Figma', icon: <FigmaIcon />, iconStyle: { ml: '15px' } },
      { label: 'Canva', icon: <CanvaIcon />, iconStyle: { ml: '15px' } }
    ]
  },
  {
    titulo: 'Others',
    iconos: [
      { label: 'Github', icon: <GithubIcon />, iconStyle: { ml: '10px' } },
      { label: 'OpenAI', icon: <OpenaiIcon />, iconStyle: { ml: '10px' } },
      { label: 'Amazon Web Service', icon: <AmazonwebserviceIcon />, iconStyle: { ml: '10px' } },
      { label: 'Google Cloud', icon: <GooglecloudIcon />, iconStyle: { ml: '10px' } },
      { label: 'Windows', icon: <WindowsIcon />, iconStyle: { ml: '10px' } },
      { label: 'Linux', icon: <LinuxIcon />, iconStyle: { ml: '10px' } },
      { label: 'Spanish', icon: <EspañolIcon />, iconStyle: { ml: '15px' } },
      { label: 'English', icon: <InglesIcon />, iconStyle: { ml: '15px' } }
    ]
  }
]

const TAGS = {
  NEXT: {
    name: 'Next.js',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: CmasIcon
  },
  Cmas: {
    name: 'C++',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: LanguageIcon
  },
  React: {
    name: 'React',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: ReactIcon
  },
  MATERIAL_UI: {
    name: 'Material-UI',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: MaterialUiIcon
  },
  Python: {
    name: 'Python',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: PythonIcon
  },
  Flask: {
    name: 'Flask',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: FlaskIcon
  },
  MSqlServer: {
    name: 'Microsoft SQL Server',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: MsqlServerIcon
  },
  Unreal: {
    name: 'Unreal Engine 5',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: UnrealIcon
  },
  Unity: {
    name: 'Unity',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: UnityIcon
  },
  CSharp: {
    name: 'C#',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: CsharpIcon
  },
  Vue: {
    name: 'Vue.js',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: VueIcon
  },
  MySQL: {
    name: 'MySQL',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: MysqlIcon
  },
  TypeScript: {
    name: 'TypeScript',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: TypescriptIcon
  },
  Blender: {
    name: 'Blender',
    class: { '& .MuiChip-icon': { ml: '10px' } },
    icon: BlenderIcon
  }

}

const PROJECTSPRINCIPALES: Project[] = [
  {
    id: 1,
    title: 'Sistema de Gestión Documental FUID',
    type: 'web',
    description:
      'Sistema de Gestión Documental para Alcadias. La modernización del sistema desde Visual Basic a estas tecnologías ha permitido una experiencia de usuario mejorada y una gestión más eficiente de los documentos, así como la centralización del sistema. Este proyecto ha contribuido significativamente a la optimización de la administración documental en donde fue instalado.',
    image: r,
    link: 'https://www.youtube.com/embed/X-4ft9mupL8',
    tags: [TAGS.React, TAGS.MATERIAL_UI, TAGS.Python, TAGS.Flask, TAGS.MSqlServer]
  },
  {
    id: 2,
    title: 'Sistema de Gestion de Inventario',
    type: 'web',
    description:
      'Sistema de Gestión de Inventario para Almacenes. Este sistema proporciona una administración de inventario más eficiente y una experiencia de usuario mejorada, cumpliendo con los requisitos del cliente. El proyecto ha contribuido de manera significativa a la optimización de la gestión de inventario en los almacenes donde ha sido implementado',
    link: 'https://youtube.com/embed/oGwCtHYdOkY',
    image: e,
    tags: [TAGS.React, TAGS.MATERIAL_UI, TAGS.Python, TAGS.Flask, TAGS.MSqlServer]
  },
  {
    id: 3,
    title: 'Juego Multijugador en Tiempo Real',
    type: 'Videojuegos',
    description: 'Desarrollé un emocionante juego multijugador que aprovecha la tecnología de WebSockets para facilitar la comunicación en tiempo real entre los jugadores. Esta implementación permitió la transferencia de información entre cada instancia del juego, lo que posibilitó la sincronización de movimientos y acciones entre los jugadores en diferentes dispositivos.',
    link: 'https://youtube.com/embed/b0yXAoNOOgs',
    image: f,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 4,
    title: 'Optimización Videojuego en Unreal Engine 5',
    type: 'Videojuegos',
    description: 'Realicé una exhaustiva optimización de una escena de videojuego en Unreal Engine 5, implementando una variedad de técnicas de optimización reconocidas en la industria. Utilizando métodos como la tecnología de nivel de detalle (LOD), culling y ninite, logramos mejorar significativamente el rendimiento del juego. La aplicación de estas técnicas resultó en una notable mejora de 20 FPS en la escena, lo que contribuyó a una experiencia de juego más fluida y envolvente para los usuarios.',
    link: 'https://youtube.com/embed/MewgTRQ9PPY',
    image: g,
    tags: [TAGS.Unreal]
  }
]

const PROJECTSPRINCIPALEN: Project[] = [
  {
    id: 1,
    title: 'Document Management System FUID',
    type: 'web',
    description:
      'Document Management System for Municipalities. The modernization of the system from Visual Basic to these technologies has enabled an enhanced user experience and more efficient document management, as well as system centralization. This project has significantly contributed to optimizing document management where it was deployed.',
    image: r,
    link: 'https://www.youtube.com/embed/X-4ft9mupL8',
    tags: [TAGS.React, TAGS.MATERIAL_UI, TAGS.Python, TAGS.Flask, TAGS.MSqlServer]
  },
  {
    id: 2,
    title: 'Inventory Management System',
    type: 'web',
    description:
      'Inventory Management System for Warehouses. This system provides more efficient inventory management and an enhanced user experience, meeting client requirements. The project has significantly contributed to optimizing inventory management in the warehouses where it has been implemented.',
    link: 'https://youtube.com/embed/oGwCtHYdOkY',
    image: e,
    tags: [TAGS.React, TAGS.MATERIAL_UI, TAGS.Python, TAGS.Flask, TAGS.MSqlServer]
  },
  {
    id: 3,
    title: 'Real-Time Multiplayer Game',
    type: 'Videojuegos',
    description: 'I developed an exciting multiplayer game that utilizes WebSocket technology to facilitate real-time communication among players. This implementation allowed the transfer of information between each instance of the game, enabling synchronization of movements and actions among players on different devices.',
    link: 'https://youtube.com/embed/b0yXAoNOOgs',
    image: f,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 4,
    title: 'Optimization of Video Game in Unreal Engine 5',
    type: 'Videojuegos',
    description: 'I conducted a thorough optimization of a video game scene in Unreal Engine 5, implementing a variety of optimization techniques recognized in the industry. Using methods such as level of detail (LOD) technology, culling, and ninjite, we significantly improved the game\'s performance. The application of these techniques resulted in a notable 20 FPS improvement in the scene, contributing to a smoother and more immersive gaming experience for users.',
    link: 'https://youtube.com/embed/MewgTRQ9PPY',
    image: g,
    tags: [TAGS.Unreal]
  }
]

const projectsPrincipalesEs: ProjectsPrincipales = {
  title: 'Proyectos',
  projects: PROJECTSPRINCIPALES

}
const projectsPrincipalesEn: ProjectsPrincipales = {
  title: 'Projects',
  projects: PROJECTSPRINCIPALEN

}

const aboutMeContentEs: AboutMeContent = {
  Title: 'Sobre Mi',
  Text: ['¡Hola! Soy Manuel Enrique Marin Palomino, pero me dicen Manu. Desde joven, los videojuegos han sido mi gran pasión, y fue esta pasión la que me llevó a adentrarme en el mundo del desarrollo de software. Aunque mi formación inicial fue como Técnico Mecánico, amplié mis horizontes y comencé a estudiar programación por mi cuenta, enfocándome especialmente en el desarrollo de videojuegos.',
    'Actualmente, estoy en proceso de completar mis estudios como desarrollador de videojuegos en la Universidad Abierta Interamericana, donde me otorgaron una beca por mi destacado desempeño académico desde mi segundo año.',
    'Hace tres años, decidí ampliar mis conocimientos y me sumergí en un curso de Fullstack Python en Codo a Codo. Esta experiencia no solo me permitió complementar mi formación, sino que también abrió las puertas a mi carrera profesional como freelancer. Durante este tiempo, he desarrollado y mantenido tres proyectos, cada uno una nueva aventura de aprendizaje.',
    'Actualmente, estoy inmerso en un curso de Codo a Codo enfocado en diseño UI/UX, mientras trabajo en el desarrollo de mi propio videojuego en mis momentos libres. Mi objetivo es seguir creciendo como profesional y estar siempre al tanto de las últimas tecnologías. ¡Vamos por más!'
  ]
}
const aboutMeContentEn: AboutMeContent = {
  Title: 'About Me',
  Text: ['Hello! I\'m Manuel Enrique Marin Palomino, but everyone calls me Manu. Since I was young, video games have been my great passion, and it was this passion that god me into the world of software development. Although my initial training was as a Mechanical Technician, I expanded my horizons and began studying programming on my own, focusing especially on game development.',
    'Currently, I am in the process of completing my studies as a game developer at the Universidad Abierta Interamericana, where I was awarded a scholarship for my outstanding academic performance since my second year.',
    'Three years ago, I decided to extend my knowledge and Got myself learing in a Fullstack Python course at the "Codo a Codo" program. This experience not only allowed me to complement my education but also opened the doors to my professional career as a freelancer. During this time, I have developed and maintained three projects, each one a new learning adventure.',
    'Currently, I am immersed in a Codo a Codo course focused on UI/UX design, while working on developing my own video game in my spare time. My goal is to continue growing as a professional and always stay abreast of the latest technologies. Let\'s go for more!'
  ]
}
const allProjectsEn: Project[] =
[
  {
    id: 1,
    title: 'Document Management System FUID',
    type: 'web',
    description:
      'Document Management System for Municipalities, created with React, Material-UI, Flask, and Microsoft SQL Server. The modernization of the system from Visual Basic to these technologies has enabled an enhanced user experience and more efficient document management, as well as system centralization. This project has significantly contributed to optimizing document management where it was deployed.',
    image: imagenes.FUID,
    link: 'https://www.youtube.com/embed/X-4ft9mupL8',
    tags: [TAGS.React, TAGS.MATERIAL_UI, TAGS.Python, TAGS.Flask, TAGS.MSqlServer]
  },
  {
    id: 2,
    title: 'Inventory Management System',
    type: 'web',
    description:
      'Inventory Management System for Warehouses, developed with React, Material-UI, Flask, and Microsoft SQL Server. This system provides more efficient inventory management and an enhanced user experience, meeting client requirements. The project has significantly contributed to optimizing inventory management in the warehouses where it has been implemented.',
    link: 'https://youtube.com/embed/oGwCtHYdOkY',
    image: imagenes.Inventario,
    tags: [TAGS.React, TAGS.MATERIAL_UI, TAGS.Python, TAGS.Flask, TAGS.MSqlServer]
  },
  {
    id: 3,
    title: 'Real-Time Multiplayer Game',
    type: 'Videojuegos',
    description: 'I developed an exciting multiplayer game that utilizes WebSocket technology to facilitate real-time communication among players. This implementation allowed the transfer of information between each instance of the game, enabling synchronization of movements and actions among players on different devices.',
    link: 'https://youtube.com/embed/b0yXAoNOOgs',
    image: imagenes.juegomultijugador,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 4,
    title: 'Optimization of Video Game',
    type: 'Videojuegos',
    description: 'I conducted a thorough optimization of a video game scene in Unreal Engine 5, implementing a variety of optimization techniques recognized in the industry. Using methods such as level of detail (LOD) technology, culling, and ninjite, we significantly improved the game\'s performance. The application of these techniques resulted in a notable 20 FPS improvement in the scene, contributing to a smoother and more immersive gaming experience for users.',
    link: 'https://youtube.com/embed/MewgTRQ9PPY',
    image: imagenes.Optimizacion,
    tags: [TAGS.Unreal]
  },
  {
    id: 5,
    title: 'CRUD Document Inventory FUID',
    type: 'web',
    description: 'CRUD Document Inventory FUID, developed with React, Material-UI, Flask, and Microsoft SQL Server. The modernization of the system from Visual Basic to these technologies has allowed for an enhanced user experience and more efficient management of Document Records, as well as system centralization. This project has significantly contributed to optimizing document management wherever it has been implemented',
    link: 'https://youtube.com/embed/D2SzVzwdPDg',
    image: imagenes.CRUDFUID,
    tags: [TAGS.React, TAGS.MATERIAL_UI, TAGS.Python, TAGS.Flask, TAGS.MSqlServer]
  },
  {
    id: 6,
    title: 'Antichamber-Portal',
    type: 'Videojuegos',
    description: 'Developed a video game inspired by the puzzles of Antichamber and Portal, where I programmed the main mechanics of the game, such as character movement, portal system, enemy behaviors, etc.',
    link: 'https://www.youtube.com/embed/PhdYZIg_Odw',
    image: imagenes.AntichamberPortal,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 7,
    title: 'Desmond Memories Platformer',
    type: 'Videojuegos',
    description: 'Recreated a level from the video game Desmond Memories, where I programmed the main mechanics of the game, such as character movement, jumping system, etc.',
    link: 'https://www.youtube.com/embed/RApKhDOJTSk',
    image: imagenes.AssasinsCreedPlataformer,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 8,
    title: 'Mitsa-etern',
    type: 'Videojuegos',
    description: 'Mitsa-etern is a turn-based fighting console game and map exploration, in which the player controls a character that must face different enemies in a fantasy world. The game features a turn-based combat system, in which the player can choose between different attacks and abilities to defeat their opponents.',
    link: 'https://www.youtube.com/embed/FRTK4jnPxwI',
    image: imagenes.mitsaEtern,
    tags: [TAGS.Cmas]
  },
  {
    id: 25,
    title: 'Sales System',
    type: 'web',
    description:
      'Sales system implemented with C# and Microsoft SQL Server. The system allows users to make product sales, manage product stock, and generate sales reports.',
    link: 'https://youtube.com/embed/u9oWWwfFd-U',
    image: imagenes.image,
    tags: [TAGS.CSharp, TAGS.MSqlServer]
  },
  {
    id: 9,
    title: 'GDI Graphics',
    type: 'web',
    description: 'GDI Graphics is a C# programming project that creates different geometric shapes on the application form, such as circles, rectangles, lines, etc. The user can choose the type of figure they want to draw and the position they want to place it on the form. Additionally, the project allows the user to change the color of the figures and the thickness of the lines.',
    link: 'https://www.youtube.com/embed/d9bassn9gy8',
    image: imagenes.GraficosGDI,
    tags: [TAGS.CSharp]
  },
  {
    id: 10,
    title: 'Endless Runner mechanic',
    type: 'Videojuegos',
    description: 'Prototype of an Endless Runner mechanic, in which I programmed the main game mechanics, such as character movement through animations, and obstacle generation system.',
    link: 'https://www.youtube.com/embed/Uh9ezO4_Ho0',
    image: imagenes.endlessRunner,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 11,
    title: 'Plataforma Ecommerce de Verdulería',
    type: 'web',
    description: 'Plataforma Ecommerce de Verduleria, desarrollada con Vue.js, Flask y MySQL. La plataforma permite a los usuarios realizar compras de productos frescos y de calidad, con la posibilidad de elegir entre una amplia variedad de frutas y verduras, y poder tener un historial de compras.',
    link: 'https://www.youtube.com/embed/QwcDvoJHtXo',
    image: imagenes.GranjaFullstack,
    tags: [TAGS.Vue, TAGS.Python, TAGS.Flask, TAGS.MySQL]
  },
  {
    id: 12,
    title: 'Runner mechanic',
    type: 'Videojuegos',
    description: 'Prototype of a Runner mechanic, in which I programmed the main mechanics of the game, such as character movement, obstacle generation system, parallax, etc.',
    link: 'https://www.youtube.com/embed/l0l9y_2Jqe4',
    image: imagenes.Runner,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 13,
    title: 'Google Translate Clone',
    type: 'web',
    description: 'Clone of Google Translate, developed in TypeScript and React. I implemented real-time text translation functionality with the OpenAI API.',
    link: 'https://youtube.com/embed/7JOABjQdPkU',
    image: imagenes.GoogleTranslateClone,
    tags: [TAGS.TypeScript, TAGS.React]
  },
  {
    id: 14,
    title: 'DirectX 11',
    type: 'Videojuegos',
    description: 'Programming project in C# with DirectX 11, where I investigated how the DirectX 11 API works and programmed a mini-game to dodge meteorites.',
    link: 'https://www.youtube.com/embed/wGcY5qohVeo',
    image: imagenes.DirectX2D,
    tags: [TAGS.CSharp]
  },
  {
    id: 15,
    title: 'JavaScript Quiz',
    type: 'web',
    description: 'Project of a Quiz of questions and answers about JavaScript, where I programmed the game logic.',
    link: 'https://youtube.com/embed/VKIo9Xuq05I',
    image: imagenes.JavaScriptQuiz,
    tags: [TAGS.TypeScript, TAGS.React]
  },
  {
    id: 16,
    title: 'Sokkoban Mechanics',
    type: 'Video games',
    description: 'Prototype of Sokkoban mechanics, where I programmed the main mechanics of the game, such as character movement, box pushing system, etc.',
    link: 'https://www.youtube.com/embed/wBfbT-B91J4',
    image: imagenes.Sokobban,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 17,
    title: 'Movie Search Engine',
    type: 'web',
    description: 'Movie search engine in React, where I implemented The Movie Database API to obtain movie information.',
    link: 'https://www.youtube.com/embed/Xok0xrP7xxM',
    image: imagenes.BuscadorPeliculas,
    tags: [TAGS.React]
  },
  {
    id: 18,
    title: 'Clicker Mechanics',
    type: 'Video games',
    description: 'Prototype of Clicker mechanics, where I programmed the main mechanics of the game, such as the system for grabbing objects to take them to a specific place, etc.',
    link: 'https://www.youtube.com/embed/CShUTwFxeUc',
    image: imagenes.cliker,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 19,
    title: 'Admin Dashboard',
    type: 'web',
    description: 'Admin Dashboard developed with React, Material-UI. I designed the user interface, pagination, etc.',
    link: 'https://youtube.com/embed/6hOIF_KRoUE',
    image: imagenes.AdminDashboard,
    tags: [TAGS.React, TAGS.MATERIAL_UI]
  },
  {
    id: 20,
    title: 'Hang Protest Project',
    type: 'Videojuegos',
    description: 'Artbook of a video game project I worked on, where I designed the characters, scenarios, enemies, etc.',
    link: 'https://www.youtube.com/embed/H7uqi9hqj_U',
    image: imagenes.hangProtest,
    tags: []
  },
  {
    id: 21,
    title: '3D Modeling',
    type: 'Videojuegos',
    description: 'Different 3D models I made over the years.',
    link: 'https://youtube.com/embed/SKb33MGv-Fs',
    image: imagenes.Faisca,
    tags: [TAGS.Blender]
  },
  {
    id: 22,
    title: 'Platformer Mechanics',
    type: 'Videojuegos',
    description: 'Prototype of Platformer mechanics, where I programmed the main mechanics of the game, such as character movement, jumping system, enemy behaviors, etc.',
    link: 'https://www.youtube.com/embed/Yp5lqeyTpKI',
    image: imagenes.Plataformer,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 23,
    title: 'TopDownShooter Mechanics',
    type: 'Videojuegos',
    description: 'Prototype of TopDownShooter mechanics, where I programmed the main mechanics of the game, such as character movement, shooting system, enemy behaviors, etc.',
    link: 'https://www.youtube.com/embed/46NdBm0qNX0',
    image: imagenes.TopDownShootter,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 24,
    title: 'Reverse Engineering Mechanics',
    type: 'Videojuegos',
    description: 'I implemented different types of video game mechanics based on a video seen on YouTube.',
    link: 'https://www.youtube.com/embed/p0gmKwb1ZwA',
    image: imagenes.IngeneriaInversa,
    tags: [TAGS.Unity, TAGS.CSharp]
  }
]
const allProjectsEs: Project[] = [
  {
    id: 1,
    title: 'Sistema de Gestión Documental FUID',
    type: 'web',
    description:
      'Sistema de Gestión Documental para Alcadias, creado con React, Material-UI, Flask y Microsoft SQL Server. La modernización del sistema desde Visual Basic a estas tecnologías ha permitido una experiencia de usuario mejorada y una gestión más eficiente de los documentos, así como la centralización del sistema. Este proyecto ha contribuido significativamente a la optimización de la administración documental en donde fue instalado.',
    image: imagenes.FUID,
    link: 'https://www.youtube.com/embed/X-4ft9mupL8',
    tags: [TAGS.React, TAGS.MATERIAL_UI, TAGS.Python, TAGS.Flask, TAGS.MSqlServer]
  },
  {
    id: 2,
    title: 'Sistema de Gestion de Inventario',
    type: 'web',
    description:
      'Sistema de Gestión de Inventario para Almacenes, desarrollado con React, Material-UI, Flask y Microsoft SQL Server. Este sistema proporciona una administración de inventario más eficiente y una experiencia de usuario mejorada, cumpliendo con los requisitos del cliente. El proyecto ha contribuido de manera significativa a la optimización de la gestión de inventario en los almacenes donde ha sido implementado',
    link: 'https://youtube.com/embed/oGwCtHYdOkY',
    image: imagenes.Inventario,
    tags: [TAGS.React, TAGS.MATERIAL_UI, TAGS.Python, TAGS.Flask, TAGS.MSqlServer]
  },

  {
    id: 3,
    title: 'Juego Multijugador en Tiempo Real',
    type: 'Videojuegos',
    description: 'Desarrollé un emocionante juego multijugador que aprovecha la tecnología de WebSockets para facilitar la comunicación en tiempo real entre los jugadores. Esta implementación permitió la transferencia de información entre cada instancia del juego, lo que posibilitó la sincronización de movimientos y acciones entre los jugadores en diferentes dispositivos.',
    link: 'https://youtube.com/embed/b0yXAoNOOgs',
    image: imagenes.juegomultijugador,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 4,
    title: 'Optimización Videojuego en UE5',
    type: 'Videojuegos',
    description: 'Realicé una exhaustiva optimización de una escena de videojuego en Unreal Engine 5, implementando una variedad de técnicas de optimización reconocidas en la industria. Utilizando métodos como la tecnología de nivel de detalle (LOD), culling y ninite, logramos mejorar significativamente el rendimiento del juego. La aplicación de estas técnicas resultó en una notable mejora de 20 FPS en la escena, lo que contribuyó a una experiencia de juego más fluida y envolvente para los usuarios.',
    link: 'https://youtube.com/embed/MewgTRQ9PPY',
    image: imagenes.Optimizacion,
    tags: [TAGS.Unreal]
  },
  {
    id: 5,
    title: 'CRUD Inventario Documental FUID',
    type: 'web',
    description: 'CRUD Inventario Documental FUID, desarrollado con React, Material-UI, Flask y Microsoft SQL Server. La modernización del sistema desde Visual Basic a estas tecnologías ha permitido una experiencia de usuario mejorada y una gestión más eficiente de los Expedientes Documentales, así como la centralización del sistema. Este proyecto ha contribuido significativamente a la optimización de la administración documental en donde fue instalado.',
    link: 'https://youtube.com/embed/D2SzVzwdPDg',
    image: imagenes.CRUDFUID,
    tags: [TAGS.React, TAGS.MATERIAL_UI, TAGS.Python, TAGS.Flask, TAGS.MSqlServer]
  },
  {
    id: 6,
    title: 'Antichamber-Portal',
    type: 'Videojuegos',
    description: 'Desarrolle  un videojuego inspirado en los puzzles de Antichamber y Portal, en el que programe la mecanica principal del juego, como el movimiento del personaje, sistema de portales, comportamientos de enemigos, etc.',
    link: 'https://www.youtube.com/embed/PhdYZIg_Odw',
    image: imagenes.AntichamberPortal,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 7,
    title: 'Desmond memories plattaformer',
    type: 'Videojuegos',
    description: 'Recree un nivel del videojuego Desmond memories, en el que programe la mecanica principal del juego, como el movimiento del personaje, sistema de salto, etc.',
    link: 'https://www.youtube.com/embed/RApKhDOJTSk',
    image: imagenes.AssasinsCreedPlataformer,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 8,
    title: 'Mitsa-etern',
    type: 'Videojuegos',
    description: 'Mitsa-etern es un juego de consola de pelea por turnos y exploracion del mapa, en el que el jugador controla a un personaje que debe enfrentarse a diferentes enemigos en un mundo de fantasía. El juego cuenta con un sistema de combate por turnos, en el que el jugador puede elegir entre diferentes ataques y habilidades para derrotar a sus oponentes.',
    link: 'https://www.youtube.com/embed/FRTK4jnPxwI',
    image: imagenes.mitsaEtern,
    tags: [TAGS.Cmas]
  },
  {
    id: 25,
    title: 'Sistema de Ventas',
    type: 'web',
    description:
      'Sistema de ventas implementado con C# y Microsoft SQL Server. El sistema permite a los usuarios realizar ventas de productos, gestionar el stock de productos, y generar reportes de ventas.',
    link: 'https://youtube.com/embed/u9oWWwfFd-U',
    image: imagenes.image,
    tags: [TAGS.CSharp, TAGS.MSqlServer]
  },
  {
    id: 9,
    title: 'Graficos GDI',
    type: 'web',
    description: 'Graficos GDI es un proyecto de programación en C# que crea en el formulario de la aplicación distintas figuras geometricas, como circulos, rectangulos, lineas, etc. El usuario puede elegir el tipo de figura que desea dibujar y la posición en la que desea colocarla en el formulario. Además, el proyecto permite al usuario cambiar el color de las figuras y el grosor de las lineas.',
    link: 'https://www.youtube.com/embed/d9bassn9gy8',
    image: imagenes.GraficosGDI,
    tags: [TAGS.CSharp]
  },
  {
    id: 10,
    title: 'Mecánica Endless Runner',
    type: 'Videojuegos',
    description: 'Protototipo de mecanica de Endless Runner, en el que programe la mecanica principal del juego, como el movimiento del persoonaje a traves de animaciones, sistema de generacion de obstaculos.',
    link: 'https://www.youtube.com/embed/Uh9ezO4_Ho0',
    image: imagenes.endlessRunner,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 11,
    title: 'Plataforma Ecommerce de Verdulería',
    type: 'web',
    description: 'Plataforma Ecommerce de Verduleria, desarrollada con Vue.js, Flask y MySQL. La plataforma permite a los usuarios realizar compras de productos frescos y de calidad, con la posibilidad de elegir entre una amplia variedad de frutas y verduras, y poder tener un historial de compras.',
    link: 'https://www.youtube.com/embed/QwcDvoJHtXo',
    image: imagenes.GranjaFullstack,
    tags: [TAGS.Vue, TAGS.Python, TAGS.Flask, TAGS.MySQL]
  },
  {
    id: 12,
    title: 'Mecanica Runner',
    type: 'Videojuegos',
    description: 'Prototipo de mecanica de Runner, en el que programe la mecanica principal del juego, como el movimiento del personaje, sistema de generacion de obstaculos, parallax, etc.',
    link: 'https://www.youtube.com/embed/l0l9y_2Jqe4',
    image: imagenes.Runner,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 13,
    title: 'Google Translate Clone',
    type: 'web',
    description: 'Clon  de  Google  Translate, desarrollado en typescript y React. implemente la funcionalidad de traduccion de texto en tiempo real con la API de OpenAI.',
    link: 'https://youtube.com/embed/7JOABjQdPkU',
    image: imagenes.GoogleTranslateClone,
    tags: [TAGS.TypeScript, TAGS.React]
  },
  {
    id: 14,
    title: 'DirectX 11',
    type: 'Videojuegos',
    description: 'Proyecto de programacion en C# con DirectX 11, En el que investigue como funciona la API de DirectX 11 y programe una miniJuego de esquivar meteoritos',
    link: 'https://www.youtube.com/embed/wGcY5qohVeo',
    image: imagenes.DirectX2D,
    tags: [TAGS.CSharp]
  },
  {
    id: 15,
    title: 'JavaScript  Quiz',
    type: 'web',
    description: 'Proyecto de un Quiz de preguntas y respuestas sobre JavaScript, en el que programe la logica del juego.',
    link: 'https://youtube.com/embed/VKIo9Xuq05I',
    image: imagenes.JavaScriptQuiz,
    tags: [TAGS.TypeScript, TAGS.React]
  },
  {
    id: 16,
    title: 'Mecanica Sokkoban',
    type: 'Videojuegos',
    description: 'Prototipo de mecanica de Sokkoban, en el que programe la mecanica principal del juego, como el movimiento del personaje, sistema de empuje de cajas, etc.',
    link: 'https://www.youtube.com/embed/wBfbT-B91J4',
    image: imagenes.Sokobban,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 17,
    title: 'Buscador Peliculas',
    type: 'web',
    description: 'Buscador de peliculas en React, en el que implemente la API de The Movie Database para obtener la informacion de las peliculas.',
    link: 'https://www.youtube.com/embed/Xok0xrP7xxM',
    image: imagenes.BuscadorPeliculas,
    tags: [TAGS.React]
  },
  {
    id: 18,
    title: 'Mecanica Clicker',
    type: 'Videojuegos',
    description: 'Prototipo de mecanica de Clicker, en el que programe la mecanica principal del juego, como el sistema de agarre de objetos para llevarlos a un lugar especifico, etc.',
    link: 'https://www.youtube.com/embed/CShUTwFxeUc',
    image: imagenes.cliker,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 19,
    title: 'Admin Dashboard',
    type: 'web',
    description: 'Admin Dashboard desarrollado con React, Material-UI, diseñe la interfaz de usuario,paginado,etc.',
    link: 'https://youtube.com/embed/6hOIF_KRoUE',
    image: imagenes.AdminDashboard,
    tags: [TAGS.React, TAGS.MATERIAL_UI]
  },
  {
    id: 20,
    title: 'hang Prostest Project',
    type: 'Videojuegos',
    description: 'Artbook de un proyecto de videojuego en el que trabaje, en el que diseñe los personajes, escenarios, enemigos, etc.',
    link: 'https://www.youtube.com/embed/H7uqi9hqj_U',
    image: imagenes.hangProtest,
    tags: []
  },
  {
    id: 21,
    title: 'Modelado 3D',
    type: 'Videojuegos',
    description: 'Distintos modelos 3D que hice a lo largo de estos años.',
    link: 'https://youtube.com/embed/SKb33MGv-Fs',
    image: imagenes.Faisca,
    tags: [TAGS.Blender]
  },
  {
    id: 22,
    title: 'Mecanica Plataformer',
    type: 'Videojuegos',
    description: 'Prototipo de mecanica de Plataformer, en el que programe la mecanica principal del juego, como el movimiento del personaje, sistema de salto, comportamientos de enemigos, etc.',
    link: 'https://www.youtube.com/embed/Yp5lqeyTpKI',
    image: imagenes.Plataformer,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 23,
    title: 'Mecanica TopDownShooter',
    type: 'Videojuegos',
    description: 'Prototipo de mecanica de TopDownShooter, en el que programe la mecanica principal del juego, como el movimiento del personaje, sistema de disparo, comportamientos de enemigos, etc.',
    link: 'https://www.youtube.com/embed/46NdBm0qNX0',
    image: imagenes.TopDownShootter,
    tags: [TAGS.Unity, TAGS.CSharp]
  },
  {
    id: 24,
    title: 'Mecanica Ingeneria Inversa',
    type: 'Videojuegos',
    description: 'Realice distintos tipos de mecanicas de  videojuegos a partir de un video visto en youtube.',
    link: 'https://www.youtube.com/embed/p0gmKwb1ZwA',
    image: imagenes.IngeneriaInversa,
    tags: [TAGS.Unity, TAGS.CSharp]
  }
]

const projectsEs: ProjectsPrincipales = {
  title: 'Proyectos',
  projects: allProjectsEs
}
const projectsEn: ProjectsPrincipales = {
  title: 'Projects',
  projects: allProjectsEn
}
interface FooterContent {
  text: string
  contact: string
  linkedin: string
}
const footerContentEs: FooterContent = {
  text: 'Manuel Enrique Marin Palomino. Portfolio Inspirado en el hecho por MiduDev. Hecho en React con TypeScript.',
  contact: 'Contactame',
  linkedin: 'LikedIn'
}
const footerContentEn: FooterContent = {
  text: 'Manuel Enrique Marin Palomino. Portfolio Inspired by the one made by MiduDev. Made in React with TypeScript.',
  contact: 'Contact Me',
  linkedin: 'LikedIn'
}
