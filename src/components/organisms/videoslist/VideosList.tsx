import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { VideoData } from '../../../testData/VideoData'
import VideosListItem from '../videoslistItem/VideosListItem'

const VideosList = () => {
    return (
        <Flex direction='column' align='center' py={5} mt={10} backgroundColor='gray.50'>
            {VideoData.map((video, index) => (
                <VideosListItem key={index} video={video}/>
            ))}
        </Flex>
    )
}

export default VideosList
