import Image from "next/image";
import { sleep } from '@/lib/utils'
import UserIcon from '@/components/UserIcon';

//()로 묶인 디렉토리 이름은 경로에 영향을 주지 않는다.

import React from 'react'
import Category from './components/Category'
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray, getPlaylistById } from '@/lib/dummyData';



const page = async () => {
  /*
    //페이지를 3초 뒤에 띄우는 의도적 지연을 위해서 비동기 처리를 사용함
    //utils에서 만든 sleep 함수를 사용

    console.log("before HomePage sleep");
    //최초진입 시 RootLayout에서 sleep 2초 건것과 같이 실행된다.
    //그러므로 최초진입 시 RootLayout에서 2초뒤에 뜨고 2초뒤에 homepage가 뜬다.
    await sleep(4000);
    console.log("after HomePage sleep");
  */


  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];



  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category></Category>
        <div className="mt-12"></div>
        {/* carousel */}
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray1]}
          Thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size={"lg"} />
            </div>
          }
          title="다시 듣기"
          subTitle="도도"
        ></PlayListCarousel>
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray2]}
          title="케이시 -  Full Bloom"
          subTitle="새로운 앨범"
        ></PlayListCarousel>
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray3]}
          title="커뮤니티 제공"
        ></PlayListCarousel>
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray4]}
          title="커버 및 리믹스"
        ></PlayListCarousel>
      </div>
    </PagePadding>
  );
}

export default page;
