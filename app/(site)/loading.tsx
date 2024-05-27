"use client"
/*
    BarLoader는 인터렉션을 위해서 useEffect 등의 csr 리액트의 hooks를 사용하기 때문에
    "use clinet"를 넣어서 리액트 hooks를 사용할 수 있게 해주어야한다.
    무조건 적으로 use clinet가 필요한것음 아님.
*/

import React from 'react'

//page.tsx에서 의도적 지연을 하는 3초간의 시간동안에는 layoyt.tsx의 내용이 뜨게 된다.
import LoadingBar from "@/components/LoadingBar";


const loading = () => {
  return (
    <div className=''>
       <LoadingBar/>
    </div>
  )
}

export default loading