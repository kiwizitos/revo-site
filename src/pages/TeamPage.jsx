import ProfileContainerComponent from '../components/Container/ProfileContainer'

import profileMatheus from '../assets/svg/profileIcons/Matheus.svg'
import profileYasmin from '../assets/svg/profileIcons/Yasmin.svg'
import profileFabiola from '../assets/svg/profileIcons/Fabiola.svg'
import profileGabriel from '../assets/svg/profileIcons/Gabriel.svg'
import profileSamuel from '../assets/svg/profileIcons/Samuel.svg'

function TeamPage() {
  return ( 
    <div className='py-4'>
      <div className='flex flex-col sm:flex-row sm:justify-evenly items-center gap-y-5'>
        <ProfileContainerComponent
          profileImage={profileMatheus}
          profileName='Matheus'
          profileFunction='Líder'
          profileColor='-blue'
        />
        <ProfileContainerComponent
          profileImage={profileYasmin}
          profileName='Yasmin'
          profileFunction='DBA'
          profileColor='-orange'
        />
        <ProfileContainerComponent
          profileImage={profileFabiola}
          profileName='Fabiola'
          profileFunction='Redatora'
          profileColor='-dust'
        />
        <ProfileContainerComponent
          profileImage={profileGabriel}
          profileName='Gabriel'
          profileFunction='UX Dev'
          profileColor='-salmon'
        />
        <ProfileContainerComponent
          profileImage={profileSamuel}
          profileName='Samuel'
          profileFunction='Beta Tester'
          profileColor='-green'
        />
      </div>
    </div>
   );
}

export default TeamPage;