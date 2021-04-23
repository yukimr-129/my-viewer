import { atom } from "recoil";
import { videoListData } from "../types/api/youtubeData";

const youtubeRelatedData = atom<Array<videoListData>>({
    key: 'youtubeRelatedData',
    default: []
})

export default youtubeRelatedData