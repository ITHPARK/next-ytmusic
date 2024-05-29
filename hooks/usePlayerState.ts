import { dummyAllSongList } from "@/lib/dummyData";
import { Song } from "@/types";
import { create } from "zustand";

interface PlayerState {
  //하단 플레이어 노출 비노출
  isVisiblePlayer: boolean;

  //하단 플레이어를 보이게하
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;

  //현재 재생중인 노래
  activeSong?: Song | null;

  //이전에 재생된 노래들
  prevPlayerQueue: Song[];

  //다음에 재생될 노래들
  nextPlayerQueue: Song[];

  // 기능들 (재생,다음곡,이전곡)  아무 값을 반환하지 않기에 void를 사용해준다.
  addSongList: (songList: Song[]) => void;
  playNext: () => void;
  playBack: () => void;
}

//저장소 생성, <PlayerState> 타입 정의
const usePlayerState = create<PlayerState>((set) => ({

  //하단 플레이어가 보이게하는 함수
  isVisiblePlayer: false,

  //isVisiblePlayer의 상태를 변경할 함수 변경할 값을 set에 넣어줌
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => set({ isVisiblePlayer }),

  activeSong: null,
  prevPlayerQueue: [],
  nextPlayerQueue: [],
  addSongList: (songList: Song[]) =>set((prev) => {
    //prev.activeSong = 현재 재생되고 있는 노래
    const prevSong = prev.activeSong;

    const cloneSongList = [...songList];

    //0번째 배열이 없어진채로 다시 배열 리턴(그렇게 되면 다음에 재생될 노래가 배열 0번쨰 인덱스에 있는것)
    const currentSong = cloneSongList.splice(0,1)?.[0]

    return {
      activeSong: currentSong,
      prevPlayerQueue: prevSong? [prevSong, ...prev.prevPlayerQueue]: prev.prevPlayerQueue,
      nextPlayerQueue: [...cloneSongList],
      isVisiblePlayer: true,
    }
  }),
  
  playNext: () => set((prev) => {
    const currentSong = prev.activeSong;

    //다음 노래
    const nextSrc = prev.nextPlayerQueue.splice(0,1)?.[0];

    return {
      activeSong: nextSrc,
      nextPlayerQueue: prev.nextPlayerQueue,

      //currentSong(이전 노래)이 있으면 currentSong을 반환 아니면 빈배열 반환
      prevPlayerQueue: [...(currentSong ? [currentSong] : []),...prev.prevPlayerQueue],
    }
  }),
  playBack: () => set((prev) => {
    const currentSong = prev.activeSong;

    //다음 노래
    const preSrc = prev.prevPlayerQueue.splice(0,1)?.[0];

    return {
      activeSong: preSrc,

      //currentSong(다음 노래)이 있으면 currentSong을 반환 아니면 빈배열 반환
      nextPlayerQueue: [...(currentSong ? [currentSong] : []),...prev.nextPlayerQueue],
      prevPlayerQueue: prev.prevPlayerQueue,
    }
  }),

}));


export default usePlayerState;

