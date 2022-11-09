function ProfileContainerComponent(props) {
  return ( 
    <div className={`border-black m-2 border-[2px] rounded-md w-fit flex flex-col items-center p-4 shadow-solidBox shadow${props.profileColor}`}>
      <img src={props.profileImage} className='w-40'/>
      <p className='text-3xl'>{props.profileName}</p>
      <div className={`bg${props.profileColor} border-black border-[2px] px-2 rounded-md`}>
      <p className={`text-black`}>{props.profileFunction}</p>
      </div>
    </div>
   );
}

export default ProfileContainerComponent;