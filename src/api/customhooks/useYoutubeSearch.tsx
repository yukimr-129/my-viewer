import axios from "axios"
import { useCallback, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
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
    const [ searchResultVideo, setSearchResult] = useRecoilState(youtubeDataState)
    const setNextPageToken = useSetRecoilState(nextPageToken)

    const search = useCallback(async (keyword: string = '', pageToken: string = '') => {
        try {
           const searchItems = await axios.get<APIsearch>('https://www.googleapis.com/youtube/v3/search',{
                                                            params: {
                                                                part: 'id',
                                                                q: keyword,
                                                                maxResults: 5,
                                                                regionCode: 'JP',
                                                                pageToken,
                                                                key: process.env.REACT_APP_YOUTUBE_API_KEY
                                                            }
                                                        })
            
            const {data: {items, nextPageToken}} = searchItems
                                                    
            if(pageToken === '') {
                const videoListresult = await Promise.all(items.filter((item) => item.id.videoId).map(async (videoItem: searchData) => {
                    const videoList: any = await getVideoList(videoItem.id.videoId)                
                    return videoList.data.items
                }))
    
                const videoList = videoListresult.map((listitem) => {
                    for (let i = 0; i < listitem.length; i++) {
                        return listitem[i];
                    }
                })
                console.log(videoList);
                
                //検索結果をstateにセット
                setSearchResult(videoList)
                setNextPageToken(nextPageToken)
            } else {
                //nextPageTokenを元に動画の続きを取得
                const videoListresult = await Promise.all(items.filter((item) => item.id.videoId).map(async (videoItem: searchData) => {
                    const videoList: any = await getVideoList(videoItem.id.videoId)                
                    return videoList.data.items
                }))
    
                // const videoList = videoListresult.filter((video) => ).map((listitem) => {
                //     for (let i = 0; i < listitem.length; i++) {
                //         return listitem[i];
                //     }
                // })
                const videoList = videoListresult.map((listitem) => {
                    for (let i = 0; i < listitem.length; i++) {
                        return listitem[i];
                    }
                })

                const nextvideo = videoList.filter(({ id }) => {
                    return !searchResultVideo.find((video) => video.id === id)
                })
                console.log(searchResultVideo, nextvideo);
                
                const nextVideoList = searchResultVideo.concat(nextvideo)
                console.log(nextVideoList);
                
                setSearchResult(nextVideoList)
                setNextPageToken(nextPageToken)

            }
            
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
                    regionCode: 'JP',
                    key: process.env.REACT_APP_YOUTUBE_API_KEY
                }
            })
            return result
        } catch (error) {
            console.log(error) 
        }
    }
    

    return {search}
}
