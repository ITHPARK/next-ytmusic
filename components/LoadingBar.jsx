import React from 'react'
/*
    BarLoader는 인터렉션을 위해서 useEffect 등의 csr 리액트의 hooks를 사용하기 때문에
    "use clinet"를 넣어서 리액트 hooks를 사용할 수 있게 해주어야한다.
    무조건 적으로 use clinet가 필요한것음 아님.
*/
import {BarLoader} from 'react-spinners'

const LoadingBar = () => {
  return (
    <div className='w-full'>
        {/* tailwind css가 서포트가 안되는 컴포넌트는 cssOverride를 사용한다.*/}
        <BarLoader color='red' cssOverride={{width:"100%"}}/>
    </div>
  )
}

export default LoadingBar