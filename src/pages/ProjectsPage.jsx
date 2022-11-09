import { WorkHistory } from '@mui/icons-material'
import CardComponent from '../components/CardComponent'
import BodyContainerComponent from '../components/Container/BodyContainer'

import Building from '../assets/svg/building.svg'

function ProjectsPage() {
  return (
    <div>
      <BodyContainerComponent>
        <div className='flex flex-col sm:flex-row justify-center'>
          <CardComponent addStyle='sm:w-1/3'>
            <p className='font-poppins text-3xl'>Contaí</p>
            <p className='text-gray'>- Em desenvolvimento -</p>
            <p>
              Com o contaí você não precisaria mais se preocupar na hora de
              pagar a conta!
            </p>
          </CardComponent>
          <CardComponent addStyle='sm:w-1/3'>
            <p className='font-poppins text-3xl'>Expo Hub</p>
            <p className='text-gray'>- Em desenvolvimento -</p>
            <p>
              Exponha seu portfólio num ambiente digital montado totalmente para
              você
            </p>
          </CardComponent>
        </div>
      </BodyContainerComponent>
    </div>
  )
}

export default ProjectsPage
