import { atom } from "recoil";
import { videoListData } from "../types/api/youtubeData";

const youtubeDataState = atom<Array<videoListData>>({
    key: 'youtubevideoDataState',
    default: []
})

export default youtubeDataState