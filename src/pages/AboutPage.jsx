import RevoLogo from '../assets/svg/revo.svg'
import CardComponent from '../components/CardComponent'
import BodyContainerComponent from '../components/Container/BodyContainer'

function AboutPage() {
  return (
    <div>
      <BodyContainerComponent>
        <div className='flex flex-col items-center pb-10 gap-5'>
          <img src={RevoLogo} className="w-[400px]" />
          <CardComponent addStyle='max-w-4xl'>
            <p className='text-darkBlue text-3xl'>
            ”Revo”, traduzido do esperanto, pode ser definido como sonho, missão
            principal da consultoria que é idealizar as necessidades do cliente.
            </p>
          </CardComponent>
        </div>
        </BodyContainerComponent>
        <BodyContainerComponent bgColor='green'>
        <div className='flex flex-col sm:grid sm:grid-cols-3'>
        <CardComponent addStyle='flex justify-between items-center gap-5 sm:w-[300px]'>
          <div className="flex gap-2">
            <div className='bg-darkBlue shadow-darkBlue w-5 h-5 border-darkBlue border-[2px] rounded-full'></div>
            <p>Color</p>
          </div>
          <p>#ffffff</p>
          </CardComponent>
          <CardComponent addStyle='flex justify-between items-center gap-5 sm:w-[300px]'>
            <div className='flex gap-2'>
            <div className='bg-blue shadow-blue w-5 h-5 border-darkBlue border-[2px] rounded-full'></div>
            <p>Color</p>
            </div>
            <p>#ffffff</p>
          </CardComponent>
          <CardComponent addStyle='flex justify-between items-center gap-5 sm:w-[300px]'>
            <div className="flex gap-2">
            <div className='bg-orange shadow-orange w-5 h-5 border-darkBlue border-[2px] rounded-full'></div>
            <p>Color</p>
            </div>
            <p>#ffffff</p>
          </CardComponent>
          <CardComponent addStyle='flex justify-between items-center gap-5 sm:w-[300px]'>
          <div className="flex gap-2">
            <div className='bg-dust shadow-dust w-5 h-5 border-darkBlue border-[2px] rounded-full'></div>
            <p>Color</p>
            </div>
            <p>#ffffff</p>
          </CardComponent>
          <CardComponent addStyle='flex justify-between items-center gap-5 sm:w-[300px]'>
          <div className="flex gap-2">
            <div className='bg-salmon shadow-salmon w-5 h-5 border-darkBlue border-[2px] rounded-full'></div>
            <p>Color</p>
            </div>
            <p>#ffffff</p>
          </CardComponent>
          <CardComponent addStyle='flex justify-between items-center gap-5 sm:w-[300px]'>
          <div className="flex gap-2">
            <div className='bg-green shadow-green w-5 h-5 border-darkBlue border-[2px] rounded-full'></div>
            <p>Color</p>
            </div>
            <p>#ffffff</p>
          </CardComponent>
          <CardComponent addStyle='flex justify-between items-center gap-5 sm:w-[300px]'>
          <div className="flex gap-2">
            <div className='bg-white shadow-white w-5 h-5 border-darkBlue border-[2px] rounded-full'></div>
            <p>Color</p>
            </div>
            <p>#ffffff</p>
          </CardComponent>
          <CardComponent addStyle='flex justify-between items-center gap-5 sm:w-[300px]'>
          <div className="flex gap-2">
            <div className='bg-gray shadow-gray w-5 h-5 border-darkBlue border-[2px] rounded-full'></div>
            <p>Color</p>
            </div>
            <p>#ffffff</p>
          </CardComponent>
          <CardComponent addStyle='flex justify-between items-center gap-5 sm:w-[300px]'>
          <div className="flex gap-2">
            <div className='bg-black shadow-black w-5 h-5 border-darkBlue border-[2px] rounded-full'></div>
            <p>Color</p>
            </div>
            <p>#ffffff</p>
          </CardComponent>
        </div>
        </BodyContainerComponent>
      
    </div>
  )
}

export default AboutPage
