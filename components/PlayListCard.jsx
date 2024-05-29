'use client'

import React from 'react'
import Image  from 'next/image';
import {getRandomElementFromArray} from '@/lib/utils'
import { useRouter } from 'next/navigation';
import {MdMoreVert} from "react-icons/md";
import {FiPlay} from "react-icons/fi" ;
import IconButton from '@/components/elements/IconButton';
import usePlayerState from '@/hooks/usePlayerState';

const PlayListCard = ({playlist = {}} = {}) => {

   const { addSongList } = usePlayerState();
 
  const { id, owner = "", playlistName = "", songList = [] } = playlist ?? {};

    //음악 리스트
    const songListLen = songList?.length;

    //랜덤으로 하나고른 음악의 사진을 가져온다.
    const imageSrc = getRandomElementFromArray(songList)?.imageSrc
    const {push}  = useRouter();

    //클릭시 해당 플레이리스트로 이동
    const onClickCard =() => {
        //id값이 있을 때만 이동
        if(id) push(`/playlist?list=${id}`);
    }

    const onClickPlay = (e) => {
        e.stopPropagation();
        addSongList(songList);
    }

  return (
    <article className=" h-[240px] cursor-pointer group">
      <section onClick={onClickCard} className=" relative h-[136px] ">
        <Image
          src={
            imageSrc ||
            "https://images.unsplash.com/photo-1707833558984-3293e794031c"
          }
          fill={true}
          alt="thumbnail"
          className="object-cover rounded-md"
        />
        <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px] ">
          <div className=" absolute top-2 right-4">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClick={onClickPlay}
            className=" absolute bottom-4 right-4 flex items-center justify-center
           transform-gpu transition-transform hover:scale-110 
           bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full
           hover:bg-[rgba(0,0,0,0.9)] pl-[1.5px]
           "
          >
            <FiPlay size={22} color="red" />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}개`}</div>
      </section>
    </article>
  )
}

export default PlayListCard
