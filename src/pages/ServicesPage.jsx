import { QuestionAnswer } from '@mui/icons-material'
import CardComponent from '../components/CardComponent'
import BodyContainerComponent from '../components/Container/BodyContainer'

function ServicesPage() {
  return (
    <div>
      <BodyContainerComponent>
        <CardComponent>
          <p>
            Tá pensando em montar um projeto e não sabe por onde começar? Vem
            com a gente que você descobre num piscar de olhos.
          </p>
        </CardComponent>
      </BodyContainerComponent>
      <BodyContainerComponent bgColor='orange'>
        <div>
          <div className='text-white'>
            <QuestionAnswer />
            <p className='font-poppins'>FAQ</p>
          </div>
          <div className='md:grid grid-cols-3'>
          <CardComponent addStyle=''>
              <p className='font-poppins text-3xl text-center'>
                Como é feito o processo de desenvolvimento?
              </p>
              <p>
                Desde a idealização até a entrega do produto final, estamos sempre conectados com o cliente buscando atingir a maior satisfação com o nosso serviço.
              </p>
            </CardComponent>
            <CardComponent addStyle=''>
              <p className='font-poppins text-3xl'>Quais tecnologias usamos?</p>
              <p>
                Utilizamos do flutter como principal linguagem para
                desenvolvimento dos nossos projetos.
              </p>
            </CardComponent>
            <CardComponent addStyle=''>
              <p className='font-poppins text-3xl'>
                Qual o tipo de software que a gente produz?
              </p>
              <p>O foco da nossa consultoria é produzir aplicações e serviços que possam integrar no dia-a-dia das pessoas ou de empresas.</p>
            </CardComponent>
          </div>
        </div>
      </BodyContainerComponent>
    </div>
  )
}

export default ServicesPage
