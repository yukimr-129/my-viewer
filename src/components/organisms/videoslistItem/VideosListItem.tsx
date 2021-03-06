import { Image } from '@chakra-ui/image'
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/layout'
import React, { memo, VFC } from 'react'
import { useHistory } from 'react-router'
import { searchData, videoListData } from '../../../types/api/youtubeData'

type Props = {
    video: videoListData;
}

const VideosListItem: VFC<Props> = memo((props) => {
    const { video } = props
    const history = useHistory()

    //動画詳細ページ遷移
    const onClickVideoDetail = () => {
        history.push({pathname: `/play/${video.id}`, state: video})
    }
    
    return (
        <Box display='flex' justifyContent={{base: 'center', md: 'flex-start'}} w='70%' h={{base: '300px', md: '200px'}} my={4} p={3} borderRadius='10px' shadow='md' backgroundColor='white' _hover={{opacity: 0.7, cursor: 'pointer'}}>
            <Link onClick={onClickVideoDetail}　_hover={{textDecoration: 'none'}}>
                <Flex align='center' direction={{base: 'column', md: 'row'}} h='100%'>
                    <Image src={video?.snippet?.thumbnails?.standard?.url || video?.snippet?.thumbnails?.default?.url} width='250px' height='100%' objectFit="cover" borderRadius='10px'/>
                    <Box ml={2} width='100%'>
                        <Stack spacing='2'>
                            <Text as='h2' fontSize='lg' fontWeight='bold' >{video.snippet.title}</Text>
                            {/* <Text as='pre' fontSize='md' display={{base: 'none', md: 'block'}} overflowX='hidden' textOverflow='ellipsis' whiteSpace='pre-wrap'>{video.snippet.description}</Text> */}
                            <Text fontSize='md'>視聴回数: {video.statistics.viewCount}</Text>
                        </Stack>
                    </Box>
                </Flex>
            </Link>
        </Box>
    )
})

export default VideosListItem
