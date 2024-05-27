import {create} from "zustand"

//zustand 상태관리를 위한 스토어 생성
const useUIState = create((set) => ({
    homeCategory: "",
    headerImageSrc: "https://images.unsplash.com/photo-1707833558984-3293e794031c",
    setHomeCategory: (value) => set({ homeCategory: value }),
    setHeaderImageSrc: (value) => set({ headerImageSrc: value }),
  }));

export default useUIState;