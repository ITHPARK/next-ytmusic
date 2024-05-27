import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

const IconButton = ({icon, onClickMenu = () =>{} }) => {
  return (
    <div>
        <div
            onClick={onClickMenu}
            className='flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144, 144, 144, 0.45)] rounded-full cursor-pointer'>
            {icon}
        {/* <RxHamburgerMenu size={24}/> */}
      </div>
    </div>
  )
}

export default IconButton