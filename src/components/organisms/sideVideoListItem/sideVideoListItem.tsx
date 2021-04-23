import { Image } from '@chakra-ui/image'
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/layout'
import React, { VFC } from 'react'
import { useHistory } from 'react-router'

import { videoListData } from '../../../types/api/youtubeData'

type Props = {
    video: videoListData;
}

const SideVideoListItem: VFC<Props> = (props) => {
    const { video } = props
    const history = useHistory()

    //動画詳細ページ遷移
    const onClickVideoDetail = () => {
        history.push({pathname: `/play/${video.id}`, state: video})
    }
    return (
        <Box display='flex' justifyContent={{base: 'center', md: 'center'}} w='100%' h={{base: '300px', md: '150px'}} shadow='md' mb={{base: '10', md: '2'}} backgroundColor='white' _hover={{opacity: 0.7, cursor: 'pointer'}}>
            <Link onClick={onClickVideoDetail}　_hover={{textDecoration: 'none'}}>
                <Flex align='center' direction={{base: 'column', md: 'row'}} h='100%'>
                    <Image src={video?.snippet?.thumbnails?.standard?.url || video?.snippet?.thumbnails?.default?.url} w={{base: '80%'}} h={{base: '60%', md: '100%'}} objectFit="cover"/>
                    <Box ml={2} my='auto' w={{base: '80%', md: '100%'}} >
                        <Stack spacing='2'>
                            <Text fontSize={{base: 'lg', md: 'sm'}} h='30%' lineHeight='1.2rem' overflow='hidden' textOverflow='ellipsis'>{video.snippet.title}</Text>
                            {/* <Text as='pre' fontSize='md' display={{base: 'none', md: 'block'}} overflowX='hidden' textOverflow='ellipsis' whiteSpace='pre-wrap'>{video.snippet.description}</Text> */}
                            <Text fontSize='sm'>視聴回数: {video.statistics.viewCount}</Text>
                        </Stack>
                    </Box>
                </Flex>
            </Link>
        </Box>
    )
}

export default SideVideoListItem
