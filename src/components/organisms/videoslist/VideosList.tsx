import { Flex } from '@chakra-ui/layout'
import React, { memo, VFC } from 'react'
import { useRecoilValue } from 'recoil'
import youtubeDataState from '../../../store/youtubeDataState'
import { VideoData } from '../../../testData/VideoData'
import VideosListItem from '../videoslistItem/VideosListItem'

const VideosList: VFC = memo(() => {
    const searchResultVideo = useRecoilValue(youtubeDataState)

    return (
        <Flex direction='column' align='center' py={5} mt={10} backgroundColor='gray.50' height='100%'>
            {searchResultVideo ? searchResultVideo.map((video, index) => (
                <VideosListItem key={index} video={video}/>
            )) : <span>検索結果が見つかりません</span>}
        </Flex>
    )
})

export default VideosList
