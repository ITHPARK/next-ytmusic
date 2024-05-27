import React from 'react';
import Image from 'next/image';

const Header = ({children}) => {
  return (
    <header className='relative overflow-y-auto w-full h-full'>
        <section className='absolute top-0 w-full'>
            <div className='relative h-[400px] w-full'>
                <Image fill src="https://plus.unsplash.com/premium_photo-1708336795870-2dc53f5926aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div className='absolute h-[400px] top-0 bg-black opacity-40 w-full '></div>
            <div className='absolute h-[400px] top-0 bg-gradient-to-t from-black  w-full '></div>
        </section>
        <section className='absolute'>{children}</section>
    </header>
  )
}

export default Header