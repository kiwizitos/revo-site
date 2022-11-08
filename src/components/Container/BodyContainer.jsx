function BodyContainerComponent({children, bgColor, textColor}) {
  return ( 
    <div className={`flex flex-col md:flex-row gap-10 w-full justify-center 
    bg-${bgColor} text-${textColor} p-8`}>
      <div className='w-full max-w-7xl justify-center sm:flex'>
        {children}
      </div>
      </div>
   );
}

export default BodyContainerComponent;