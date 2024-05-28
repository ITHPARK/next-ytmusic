export interface Song {
    name: string,
    channelId: number,
    channel: string,
    src: string,
    imageSrc: string,
}
 //기본적으로 Song 인터페이스의 타입들을 상속받은
export interface TopSong extends Song {
    prevRank: number,
    rank: number,
}

export interface PlayList {
    id: number,
    owner: string,
    playlistName: string,
    songList: Song[],
}

export interface Channel {
    id: number,
    subscribers: number,
    name: string,
    songList: Song[],
    playlistArray: PlayList[],
}