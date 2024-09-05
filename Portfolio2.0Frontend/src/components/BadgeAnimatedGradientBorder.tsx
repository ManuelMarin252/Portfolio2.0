import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const BadgeAnimatedGradientBorder = ({ link, description, addClass, nuevaPestaña }: { link: string, description: string, addClass?: string, nuevaPestaña?: string }) => {
  const Navigate = useNavigate()
  const abrirlink = (url: string, nuevaPestaña = '_blank') => {
    // abrir link en una nueva pestaña
    if (nuevaPestaña === '_blank') {
      window.open(url, '_blank')
      return
    }
    // hacer escroll hacia el principio de la pagina
    Navigate(url)
    window.scrollTo(0, 0)
  }
  return (
  <Box className={`flex items-center ${addClass}`} onClick={() => { nuevaPestaña === undefined ? abrirlink(link) : abrirlink(link, '_self') }}>
    <span className="relative inline-flex overflow-hidden rounded-full p-[2px] w-full">
      <span className="absolute inset-[-10000%] animate-[spin_0.7s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
      <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
        {description}
      </div>
    </span>
  </Box>
  )
}
export default BadgeAnimatedGradientBorder
