function CardComponent({children, addStyle}) {
  return ( 
    <div className={`${addStyle} bg-white shadow-solidBox border-darkBlue border-[2px] rounded-md p-4 m-4`}>
      {children}
    </div>
   );
}

export default CardComponent;