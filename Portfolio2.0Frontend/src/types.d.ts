export interface ILink {
  id: string
  text: string
  icon: JSX.Element
}
export type ILinks = ILink[]
export interface Categoria {
  titulo: string
  iconos: Array<{
    label: string
    icon: JSX.Element
    iconStyle: Record<string, string>
  }>
}
export type Categorias = Categoria[]

export interface ExperienciaLaboral {
  titulo: string
  experiencia: Array<{
    puesto: string
    empresa: string
    descripcion: string
    fecha: string
    detalles: () => JSX.Element
  }>
}
export interface IHomeContent {
  PrimerTexto: string[]
  badgeText: string
  SegundoTexto: string[]
}
export interface tag {
  name: string
  class: SxProps<Theme>
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>> & { muiName: string }
}

export interface Project {
  id: number
  title: string
  description: string
  link?: string
  github?: string
  image: string
  type: string
  tags: tag[]
}
export interface ProjectsPrincipales {
  title: string
  projects: Project[]
}
export interface AboutMeContent {
  Title: string
  Text: string[]
}
