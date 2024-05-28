'use client'

import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import {GoHome} from 'react-icons/go';
import {FiCompass, FiMusic, FiPlus} from  'react-icons/fi';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import {dummyPlaylistArray} from "@/lib/dummyData";
import PlayListNav from './PlayListNav';

const Navigator = () => {

  const pathname = usePathname();

  //네비게이션 데이터
  const routes = useMemo(() => {
    return [
      {icon: <GoHome size={24}/>, label: "홈", isActive: pathname === '/', href: "/"},
      {icon: <FiCompass size={24}/>, label: "둘러보기", isActive: pathname === '/explore', href: "/explore"},
      {icon: <FiMusic size={24}/>, label: "보관함", isActive: pathname === '/library', href: "/library"},
    ]
  },[pathname]);

  return (
    <div>
      <section className='flex flex-col gap-2 p-4'>
        {
          routes.map((route) => {
            return (
              <Link href={route.href} key={route.label}>
                {/* cn은 Shade CN을 이용한 함수 TW Marge를 사용해서 useState의 변수에 의해서 클래스 이름이 바뀌었을 때 스타일을 먹게함. 원래 리액트에서 스타일 적용하던 삼항연산자 방식 안됨.*/}
                <div
                  className={cn(
                    "text-[16px] flex flex-row items-center gap-4 hover:bg-neutral-700 rounded-lg p-2",
                    route.isActive && "bg-neutral-800"
                  )}
                >
                  {route.icon}
                  <span>{route.label}</span>
                </div>
              </Link>
            
            )
          })
        }
      </section>
      <section className='px-6'>
        <div className='w-full h-[1px] bg-neutral-700'></div>
      </section>
      <section className='px-6'>
        <div className='hover:bg-neutral-600 cursor-pointer flex flex-row items-center bg-neutral-700 my-6 rounded-3xl p-2 font-[200] justify-center gap-4'>
          <FiPlus size={24}></FiPlus>
          <span>새 재생목록</span>
        </div>
      </section>
      <section >
        <ul className='flex flex-col'>
          {dummyPlaylistArray.map((playlist) => {
            return  <PlayListNav key={playlist.id} playlist={playlist}></PlayListNav>
          })}
        </ul>
      </section>
    </div>
  )
}

export default Navigator