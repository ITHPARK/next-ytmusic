import { getPlaylistById } from '@/lib/dummyData'
import React from 'react'
import {permanentRedirect} from 'next/navigation'
import { getRandomElementFromArray } from '@/lib/utils'
import HeaderBgChanger from '@/components/HeaderBgChanger'
import PlayListHead from '@/components/PlayListHead'
import PagePadding from "@/components/PagePadding";
import SongCardRowExpand from "@/components/SongCardRowExpand";


interface PlayListPageProps {
  searchParams: {
    list:string
  }
}


const page = async (props: PlayListPageProps) => {

  //플레이리스트 가져오기 
  const playlist = await getPlaylistById(Number(props.searchParams.list));

  //플레이리스트가 없으면 메인 페이지로 리다이렉트 시키는 서버 함수
  if(!playlist) permanentRedirect('/')

  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

  console.log(imageSrc)

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className='mt-12'></div>
      <PlayListHead playlist={playlist}/>
      <div className='mt-12'></div>
      <section className='flex flex-col gap-2'>
        {
          playlist.songList.map((song, idx) =>{
            return <SongCardRowExpand song={song} key={idx}/>
          }) 
        }
      </section>
      
     
    </PagePadding>
  )
}

export default page
