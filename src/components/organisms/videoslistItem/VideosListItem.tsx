import { Image } from '@chakra-ui/image'
import { Box, Flex, Stack, Text } from '@chakra-ui/layout'
import React, { memo, VFC } from 'react'
import { videoListData } from '../../../types/api/youtubeData'

type Props = {
    video: videoListData;
}

const VideosListItem: VFC<Props> = memo((props) => {
    const { video } = props
    console.log(video);
    
    return (
        <Box display='flex' justifyContent={{base: 'center', md: 'flex-start'}} w='70%' h={{base: '350px', md: '200px'}} my={4} p={3} borderRadius='10px' shadow='md' backgroundColor='white' _hover={{opacity: 0.7, cursor: 'pointer'}}>
            <Flex align='center' direction={{base: 'column', md: 'row'}}>
                <Image src={video?.snippet?.thumbnails?.standard?.url || video?.snippet?.thumbnails?.default?.url} width='250px' height='100%' objectFit="cover" borderRadius='10px'/>
                <Box ml={2} width='100%'>
                    <Stack spacing='2'>
                        <Text as='h2' fontSize='lg' fontWeight='bold'>{video.snippet.title}</Text>
                        <Text fontSize='md' display={{base: 'none', md: 'block'}} overflowX='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{video.snippet.description}</Text>
                        <Text fontSize='md'>視聴回数: {video.statistics.viewCount}</Text>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
})

export default VideosListItem
