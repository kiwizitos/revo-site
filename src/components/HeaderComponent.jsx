import { Link } from 'react-router-dom'
import MenuComponent from './MenuComponent'

function HeaderComponent() {
  return (
    <div className='pt-5 text-center bg-darkBlue flex flex-col items-center'>
      <Link to='/'>
        <p className='text-6xl font-saoTorpes text-white mb-4'>Revo</p>
      </Link>
      <MenuComponent />
    </div>
  )
}

export default HeaderComponent