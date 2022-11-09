import { NavLink } from 'react-router-dom';
import CardComponent from '../components/CardComponent';
import BodyContainerComponent from '../components/Container/BodyContainer';

function ErrorPage() {
  return ( <div>
    <BodyContainerComponent>

      <div  className='flex flex-col justify-center items-center'>
    <p>Erro 404. Página não encontrada.</p>
    <NavLink to="/">
      <CardComponent addStyle="w-[300px] flex justify-center">
        <p className='font-poppins text-darkBlue'>Voltar para o início</p>
      </CardComponent>
    </NavLink>
      </div>
    </BodyContainerComponent>
  </div> );
}

export default ErrorPage;