import axios from "axios"
import { useSetRecoilState } from "recoil"
import youtubeRelatedData from "../../store/youtubeRelatedData"
import { searchData, videoListData } from "../../types/api/youtubeData"

type APIvideoList = {
    etag: string;
    items: Array<videoListData>;
    kind: string;
    pageInfo: {
        resultsPerPage: number;
        totalResults: number;
    }
}
type APIsearch = {
    etag: string;
    items: Array<searchData>;
    kind: string;
    nextPageToken: string;
    pageInfo: {
        resultsPerPage: number;
        totalResults: number;
    }
    regionCode: string;
}

export const useGetRelatedVideo = () => {
    const setRelatedVideo = useSetRecoilState(youtubeRelatedData)

    const getRelatedVide = async (id: string) => {
        const relatedVideo = await axios.get<APIsearch>('https://www.googleapis.com/youtube/v3/search', {
                                                    params: {
                                                        part: 'snippet',
                                                        // q: 'Alexandros',
                                                        maxResults: 5,
                                                        regionCode: 'JP',
                                                        type: 'video',
                                                        relatedToVideoId: id,
                                                        key: process.env.REACT_APP_YOUTUBE_API_KEY
                                                    }
        })
        const { data: {items, nextPageToken}} = relatedVideo

        const relatedVideoList = items.filter((item) => item.snippet)
        const relatedVideoListresult = await Promise.all(relatedVideoList.filter((item) => item.id.videoId).map(async (videoItem: searchData) => {
            const videoList: any = await getVideoList(videoItem.id.videoId)                
            return videoList.data.items
        }))

        const videoList = relatedVideoListresult.map((listitem) => {
            for (let i = 0; i < listitem.length; i++) {
                return listitem[i];
            }
        })
        console.log(videoList);
        setRelatedVideo(videoList)
    }

    //検索結果のIDで動画取得
    const getVideoList = async (id: string) => {
        try {
            const result = await axios.get<APIvideoList>('https://www.googleapis.com/youtube/v3/videos',{
                params: {
                    id: id,
                    part: 'snippet, statistics',
                    // regionCode: 'JP',
                    key: process.env.REACT_APP_YOUTUBE_API_KEY
                }
            })
            return result

        } catch (error) {
            console.log(error) 
        }
    }

    return {getRelatedVide}
}