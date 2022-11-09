import { NavLink } from 'react-router-dom'

import BodyContainerComponent from '../components/Container/BodyContainer'

import Wireframe from '../assets/svg/wireframe.svg'
import CardComponent from '../components/CardComponent'

function HomePage() {
  return (
    <div className='sm:flex sm:flex-col items-center'>
      <BodyContainerComponent bgColor='white' textColor='black'>
        <div>
          <p className='font-bold text-[36pt] sm:w-[300px] leading-none'>
            Dê vida aos seus projetos com a <br />
            <b className='text-blue font-normal font-saoTorpes text-6xl'>
              Revo.
            </b>
          </p>
          <p className='mt-5'>A consultoria ideal para suas necessidades</p>
          <NavLink to='/services'>
            <CardComponent addStyle='bg-blue text-white font-bold text-xl flex justify-center items-center h-20 my-5 sm:mt-40 rounded-md font-poppins'>
              Conheça agora
            </CardComponent>
          </NavLink>
        </div>
        <img
          src={Wireframe}
          className='sm:w-1/2 sm:max-w-[500px] order-first sm:order-last sm:ml-10'
        />
      </BodyContainerComponent>
      <BodyContainerComponent bgColor='blue'>
        <CardComponent>
          <p>
            Somos uma consultoria de tecnologia com foco em desenvolvimento de
            aplicações mobile, utilizando das linguagens mais atuais e
            populares, para que nossos clientes estejam sempre satisfeitos.
          </p>
        </CardComponent>
      </BodyContainerComponent>
    </div>
  )
}

export default HomePage
