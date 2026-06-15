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
