"use client"

import React, {useEffect} from 'react'
import useUIState from "@/hooks/useUIState"

const HeaderBgChanger = ({imageSrc}) => {

    const {setHeaderImageSrc} = useUIState();

    useEffect(() => {
        //이미지 정보를 가져와 플레이리스트에 들어갔을 때 background 이미지 설정
      if(imageSrc) setHeaderImageSrc(imageSrc);
    }, [imageSrc])
    

  return (
    <>
        
    </>
  )
}

export default HeaderBgChanger
