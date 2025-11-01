import React from 'react'

const Clinet = () => {
  return (
    <>
    <div className='flex p-14 justify-center items-center gap-16 dark:bg-[hsl(var(--background))] border-b border-solid dark:hidden'>
        <div className="text-center justify-start text-text-default-heading text-base font-medium font-['Brando_Sans_TEST'] leading-5">Authorized by</div>
        <img src='/asset/Sudialogo1.png' />
        <img src='/asset/Sudialogo2.png' />
    </div>

     <div className='flex p-14 justify-center items-center gap-16 dark:bg-[hsl(var(--background))] border-b border-solid dark:flex hidden'>
        <div className="text-center justify-start text-text-default-heading text-base font-medium font-['Brando_Sans_TEST'] leading-5">Authorized by</div>
        <img src='/asset/dark1.png' />
        <img src='/asset/dark2.png' />
    </div>
    </>
  )
}

export default Clinet
