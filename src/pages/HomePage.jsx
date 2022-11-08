import { NavLink } from 'react-router-dom'

import BodyContainerComponent from '../components/Container/BodyContainer'

import Wireframe from '../assets/svg/wireframe.svg'

function HomePage() {
  return (
    <div className='sm:flex sm:flex-col items-center'>
      <BodyContainerComponent bgColor='white' textColor='black'>
        <div>
          <p className='font-bold text-[36pt] sm:w-[300px] leading-none'>
            Dê vida aos seus projetos com a &nbsp;
            <b className='text-blue font-saoTorpes'>Revo.</b>
          </p>
          <p className='mt-5'>A consultoria ideal para suas necessidades</p>
          <NavLink to='/services'>
            <div className='bg-blue text-white font-bold text-xl flex justify-center items-center h-20 my-5 sm:mt-40 rounded-md'>
              Conheça agora
            </div>
          </NavLink>
        </div>
        <img
          src={Wireframe}
          className='sm:w-1/2 sm:max-w-[500px] order-first sm:order-last sm:ml-10'
        />
      </BodyContainerComponent>
      <BodyContainerComponent bgColor='blue' textColor='white'>
        <div className='max-w-7xl'>
          <p>Parágrafo 2</p>
          <p className=''>mais texto</p>
        </div>
      </BodyContainerComponent>
      <BodyContainerComponent bgColor='white' textColor='black'>
        <div>Alô</div>
      </BodyContainerComponent>
    </div>
  )
}

export default HomePage
