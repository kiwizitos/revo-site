import { CreditCard, Engineering, Home, Map, Work } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

function MenuComponent() {
  return (
    <div className='flex w-screen md:w-[90vw] justify-between md:justify-evenly h-8 overflow-x-auto overflow-y-hidden snap-x overscroll-x-contain outline-1'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? 'text-blue border-b-2 transition-all duration-200'
            : 'text-white border-b-2 border-black'
        }>
        <div className='flex gap-1 w-40 justify-center snap-center'>
          <Home />
          <p>Início</p>
        </div>
      </NavLink>
      <NavLink
        to='/services'
        className={({ isActive }) =>
          isActive
            ? 'text-orange border-b-2 transition-all duration-200'
            : 'text-white border-b-2 border-black'
        }>
        <div className='flex gap-1 w-40 justify-center snap-center'>
          <Engineering />
          <p>Nossos serviços</p>
        </div>
      </NavLink>
      <NavLink
        to='projects'
        className={({ isActive }) =>
          isActive
            ? 'text-dust border-b-2 transition-all duration-200'
            : 'text-white border-b-2 border-black'
        }>
        <div className='flex gap-1 w-40 justify-center snap-center'>
          <Work  />
          <p>Projetos</p>
        </div>
      </NavLink>
      <NavLink
        to='/team'
        className={({ isActive }) =>
          isActive
            ? 'text-salmon border-b-2 transition-all duration-200'
            : 'text-white border-b-2 border-black'
        }>
        <div className='flex gap-1 w-40 justify-center snap-center'>
          <Map />
          <p>Equipe</p>
        </div>
      </NavLink>
      <NavLink
        to='about'
        className={({ isActive }) =>
          isActive
            ? 'text-green border-b-2 transition-all duration-200 snap-center'
            : 'text-white border-b-2 border-black'
        }>
        <div className='flex gap-1 w-40 justify-center snap-center'>
          <CreditCard />
          <p>Identidade</p>
        </div>
      </NavLink>
    </div>
  )
}

export default MenuComponent
