import { Box } from '@mui/material'
import './App.css'
import { Header } from './components/Header'
function App () {
  return (
    <>
    {/* <Box sx={{
      position: 'relative',
      height: '100vh',
      width: '100vw',
      background: 'rgb(0, 0, 0)'
    }}>
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        background: 'linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)',
        backgroundSize: '14px 24px'
      }}></Box>
    </Box> */}
    {/* <Box sx={{
      position: 'absolute',
      top: 0,
      zIndex: -2,
      height: '100vh',
      width: '100vw',
      background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))'
    }}></Box> */}
    <Box sx={{ position: 'absolute', inset: 0, zIndex: -10, height: '100vh', width: '100vw', items: 'center', px: 5, py: 24, background: 'radial-gradient(200% 200% at 60% 0%, hsl(192, 15%, 10%) 45%, hsl(183, 54%, 38%) 100%)' }}>
      </Box>
      <Header/>
    </>
  )
}

export default App
// <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

// <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
// <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
// <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
