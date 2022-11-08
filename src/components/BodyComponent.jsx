import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import ServicesPage from '../pages/ServicesPage'
import TeamPage from '../pages/TeamPage'

function BodyComponent() {
  return (
    <div className='overflow-hidden justify-center'>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default BodyComponent