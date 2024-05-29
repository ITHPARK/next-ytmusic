"use client";
import React, { useCallback, useEffect } from "react";
import { Slider as PlayerSlider } from "@/components/ui/playerSlider";
import { useAudio } from "react-use";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import usePlayerState from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";
import { RiPlayFill } from "react-icons/ri";
import Image from "next/image";
import { RxLoop } from "react-icons/rx";

const PlayerContent = () => {
  const {activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext} = usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src, 
    autoPlay: true,
  });

  //노래 경로가 있고 버퍼가 있으면 현재 로딩중인 상태. (버퍼에는 노래의 총 재생 시간 정보가 담겨있음)
  const isLoading = activeSong?.src && state.buffered?.length === 0;

  const onClickPrevBtn = () => {

    //노래 재생중에(10초 이상일 떄) 이전 버튼을 누르면 0초로 돌아가고 아니면 이전 노래로 넘어간다.
    if(state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }else {
      if(prevPlayerQueue.length === 0) return;
      playBack();
    }
  };
  
  //useCallback을 사용함으로써 controls, playNext, nextPlayerQueue 값이 바뀌지 않는 한 함수를 재생성하지 않는다.
  const onClickNextBtn = useCallback(() => {

    //다음 노래가 없으면 멈춤
    if(nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }

  }, [controls, playNext, nextPlayerQueue]);


  const onClickPauseBtn = () =>{
    controls.pause();
  };
  const onClickStartBtn = () => {
    //현재 진행중인 노래가 있으면 재생 없으면 다음 노래 재생
    if(activeSong) {
      controls.play();
    }else {
      playNext();
    }
    
  };

  useEffect(() => {
    ref?.current?.addEventListener("eneded", onClickNextBtn);

    return () => {
      ref?.current?.removeEventListener("eneded", onClickNextBtn);
    }
  }, [ref, onClickNextBtn]);

  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-[-16px] w-full'>
        <PlayerSlider
          className="w-full" 
          defaultValue={[0]} 
          value={[state.time]}
          //slider를 이동시킬때마다 실행하는 함수
          onValueChange={(value) => {controls.seek(value)}}
          //노래 속도에 맞게 slider가 0에서 100까지 감
          max={state.duration}
        />
      </div>
      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="h-full flex flex-row items-center gap-1 lg:gap-8">
          <IoPlaySkipBackSharp
            size={24}
            className=" cursor-pointer"
            onClick={onClickPrevBtn}
          />
          {/* 로딩중일 떄는 로딩 아이콘 */}
          {isLoading ? (
            <ClipLoader color="#FFF" />
          ) :
          // 재생중일 때는 정지아이콘 
          state.playing ? (
            <AiOutlinePause
              size={40}
              className=" cursor-pointer"
              onClick={onClickPauseBtn}
            />
          ) : (
            <RiPlayFill
              size={40}
              className=" cursor-pointer"
              onClick={onClickStartBtn}
            />
          )}

          <IoPlaySkipForwardSharp
            size={24}
            className=" cursor-pointer"
            onClick={onClickNextBtn}
          />
        </div>
        <article>
          <div className=" flex flex-row gap-4 items-center">
            <div className=" relative w-[40px] h-[40px]">
              <Image
                fill
                className="object-cover"
                src={activeSong?.imageSrc}
                alt="img"
              ></Image>
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.name}</div>
              <div className=" text-neutral-500 text-[14px]">
                {activeSong?.channel} • 조회수 7.8만회 • 좋아요 1.7천개
              </div>
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-2">
          <div className=" hidden lg:flex flex-row gap-2 ">
            <IoVolumeHighOutline size={24} className=" cursor-pointer" />
            <IoShuffle size={24} className=" cursor-pointer" />
            <RxLoop size={24} className=" cursor-pointer" />
          </div>
          <div>
            <AiFillCaretUp size={24} className=" cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlayerContent
