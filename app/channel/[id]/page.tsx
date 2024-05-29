import { getChannelById } from '@/lib/dummyData'
import { permanentRedirect } from 'next/navigation';
import React from 'react'
import HeaderBgChanger from '@/components/HeaderBgChanger'
import PagePadding from '@/components/PagePadding'
import { getRandomElementFromArray } from '@/lib/utils';
import PlayListCarousel from '@/components/PlayListCarousel';
import ChannelHead from '../components/ChannelHead'
import SongCardRowExpand from '@/components/SongCardRowExpand'
import usePlayerState from '@/hooks/usePlayerState'


interface ChannelPageProps {
  params: {
    id: string;
  };
}

//props는 동적 라우팅 페이지 정보를 담고있음
const page = async (props: ChannelPageProps) => {

  //페이지에 들어가면 채널 id 값을 받아옴
  const channel = await getChannelById(Number(props.params.id));


  //채널이 없으면 메인 페이지로 리다이렉트
  if (!channel) permanentRedirect("/");

  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-[150px]"></div>
      <ChannelHead channel={channel} />
      <section className="mt-[80px]">
        <div className=" text-[28px] font-bold">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, key) => {
              return <SongCardRowExpand song={song} key={key} />;
            })}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className=" text-[28px] font-bold">앨범</div>
        <PlayListCarousel playlistArray={channel.playlistArray} />
      </section>
      <section className="mt-[80px]"></section>
    </PagePadding>
  )
}

export default page
