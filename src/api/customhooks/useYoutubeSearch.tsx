import axios from "axios"
import { useCallback, useState } from "react"
import { useSetRecoilState } from "recoil"
import youtubeDataState from "../../store/youtubeDataState"
import nextPageToken from "../../store/nextPageToken"
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

export const useYoutubeSearch = () => {
    //set関数呼び出し
    const setSearchResult = useSetRecoilState(youtubeDataState)
    const setNextPageToken = useSetRecoilState(nextPageToken)
    // const [ videoList, setVideoList ] = useState<Array<videoListData>>([])

    //検索結果を取得
    // const search = (keyword: string) => {
    //     axios.get<APIsearch>('https://www.googleapis.com/youtube/v3/search',{
    //         params: {
    //             part: 'snippet',
    //             q: '猫',
    //             maxResults: 5,
    //             key: process.env.REACT_APP_YOUTUBE_API_KEY
    //         }
    //     })
    //     .then(({data: {items}}) => {
    //         items.map((item: searchData) => {
    //             getVideoList(item.id.videoId)
    //             console.log(item)
    //         })   
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     })
    // }
    const search = useCallback(async (keyword: string) => {
        try {
           const searchItems = await axios.get<APIsearch>('https://www.googleapis.com/youtube/v3/search',{
                                                            params: {
                                                                part: 'id',
                                                                q: keyword,
                                                                maxResults: 5,
                                                                regionCode: 'JP',
                                                                key: process.env.REACT_APP_YOUTUBE_API_KEY
                                                            }
                                                        })
            
            const {data: {items, nextPageToken}} = searchItems

            
            const videoListresult = await Promise.all(items.filter((item) => item.id.videoId).map(async (videoItem: searchData) => {
                const videoList: any = await getVideoList(videoItem.id.videoId)                
                return videoList.data.items
            }))

            const videoList = videoListresult.map((listitem) => {
                for (let i = 0; i < listitem.length; i++) {
                    return listitem[i];
                }
            })

            //検索結果をstateにセット
            setSearchResult(videoList)
            setNextPageToken(nextPageToken)
            
        } catch (error) {
            console.log(error);
            
        }
     
    }, [setSearchResult, setNextPageToken])

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
        console.log(result);
        
            return result

        } catch (error) {
            console.log(error) 
        }
    }
    

    return {search}
}
