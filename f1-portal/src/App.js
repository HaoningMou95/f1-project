import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import MainBody from './components/MainBody'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DriverPage from './pages/DriverPage'
import DriverDetailPage from './pages/DriverDetailPage'
import CircuitPage from './pages/CircuitPage'
import CircuitDetailPage from './pages/CircuitDetailPage'
import ConstructorPage from './pages/ConstructorPage'
import ConstructorDetailPage from './pages/ConstructorDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import './styles/font.css'

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/drivers' element={<DriverPage />} />
        <Route path='/drivers/:id' element={<DriverDetailPage />} />
        <Route path='/circuits/' element={<CircuitPage />} />
        <Route path='/circuits/:id' element={<CircuitDetailPage />} />
        <Route path='/constructors/' element={<ConstructorPage />} />
        <Route path='/constructors/:id' element={<ConstructorDetailPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
