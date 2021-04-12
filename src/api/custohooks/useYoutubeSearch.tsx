import axios from "axios"
import { useState } from "react"
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
    const [ searchResult, setSearchResult ] = useState()

    //検索結果を取得
    const search = (keyword: string) => {
        axios.get<APIsearch>('https://www.googleapis.com/youtube/v3/search',{
            params: {
                part: 'snippet',
                q: '猫',
                maxResults: 5,
                key: process.env.REACT_APP_YOUTUBE_API_KEY
            }
        })
        .then(({data: {items}}) => {
            items.map((item: searchData) => {
                videoList(item.id.videoId)
            })   
        })
        .catch((e) => {
            console.log(e);
        })
    }

    //検索結果のIDで動画取得
    const videoList = (id: string) => {
        axios.get<APIvideoList>('https://www.googleapis.com/youtube/v3/videos',{
            params: {
                id: id,
                part: 'snippet, statistics',
                key: process.env.REACT_APP_YOUTUBE_API_KEY
            }
        })
        .then((res) => {
            console.log(res.data);
            
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return {search}
}
