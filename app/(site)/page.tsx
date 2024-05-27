import Image from "next/image";
import {sleep} from '@/lib/utils'

//()로 묶인 디렉토리 이름은 경로에 영향을 주지 않는다.

import React from 'react'



const page = async() => {
  /*
    //페이지를 3초 뒤에 띄우는 의도적 지연을 위해서 비동기 처리를 사용함
    //utils에서 만든 sleep 함수를 사용

    console.log("before HomePage sleep");
    //최초진입 시 RootLayout에서 sleep 2초 건것과 같이 실행된다.
    //그러므로 최초진입 시 RootLayout에서 2초뒤에 뜨고 2초뒤에 homepage가 뜬다.
    await sleep(4000);
    console.log("after HomePage sleep");
  */

  


  return (
    <div className="">
      HomePage
    </div>
  );
}

export default page;
