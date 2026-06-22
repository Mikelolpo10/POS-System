import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { Routes, Route } from 'react-router'
import MainLayout from './components/MainLayout'
import Mainpage from './pages/Mainpage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Mainpage />} />
      </Route>
    </Routes>
  )
}

export default App
