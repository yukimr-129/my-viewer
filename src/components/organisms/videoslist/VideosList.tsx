import { Flex } from '@chakra-ui/layout'
import React, { memo, useCallback, useEffect, VFC } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useYoutubeSearch } from '../../../api/customhooks/useYoutubeSearch'
import nextPageToken from '../../../store/nextPageToken'
import { searchKeyword } from '../../../store/searchKeyword'
import youtubeDataState from '../../../store/youtubeDataState'
import { VideoData } from '../../../testData/VideoData'
import VideosListItem from '../videoslistItem/VideosListItem'

const VideosList: VFC = memo(() => {
    const { search } = useYoutubeSearch()
    const searchResultVideo = useRecoilValue(youtubeDataState)
    const keyword = useRecoilValue(searchKeyword)
    const [ PageToken, setPageToken ] = useRecoilState(nextPageToken)
    console.log(searchResultVideo);


    const loadMore = useCallback(() => {
        search(keyword, PageToken)
    }, [search])
    
    useEffect(() => {
        loadMore()
        setPageToken(undefined)
    }, [keyword])
  

    return (
        <InfiniteScroll loadMore={loadMore} hasMore={true}>
            <Flex direction='column' align='center' py={5} mt={10} backgroundColor='gray.50' height='100%'>
                {searchResultVideo ? searchResultVideo.map((video, index) => (
                    <VideosListItem key={index} video={video}/>
                )) : <span>検索結果が見つかりません</span>}
            </Flex>
        </InfiniteScroll>
    )
})

export default VideosList
