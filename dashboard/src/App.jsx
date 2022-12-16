import { ColorModeContext, useMode } from "./theme.js"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Route, Routes } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';
import Topbar from './pages/global/Topbar.jsx'
import SidebarNew from './pages/global/Sidebar'
import Dashboard from './pages/dashboard'
import Connected from "./pages/connected"
import Packet from "./pages/packet"
import Monitor from "./pages/monitor"
import FAQ from "./pages/faq"
import Pie from "./pages/Pie"
import Settings from "./pages/settings"



function App() {
  const [theme, colorMode] = useMode()

  return (
    <ProSidebarProvider>
      <ColorModeContext.Provider value = {colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            {/* SIDEBAR */}
            <SidebarNew />
            <main className='content'>
              {/* TOPBAR */}
              <Topbar />

              {/* ROUTES */}
              <Routes>
                <Route path ="/" element={<Dashboard />} />
                <Route path ="/connected" element={<Connected />} />
                <Route path ="/packet" element={<Packet />} />
                <Route path ="/monitor" element={<Monitor />} />
                <Route path ="/pie" element={<Pie />} />
                <Route path ="/faq" element={<FAQ />} />
                <Route path ="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ProSidebarProvider>
  )
}

export default App
