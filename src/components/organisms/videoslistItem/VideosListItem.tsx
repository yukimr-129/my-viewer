import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { VFC } from 'react'

type VideoItem = {
    src: string;
    title: string;
    discription: string;
    viewCount: string;
}

type Props = {
    video: VideoItem;
}

const VideosListItem: VFC<Props> = (props) => {
    const { video } = props
    return (
        <Box display='flex' justifyContent={{base: 'center', md: 'flex-start'}} w='70%' h={{base: '350px', md: '200px'}} my={4} p={3} borderRadius='10px' shadow='md' backgroundColor='white' _hover={{opacity: 0.7, cursor: 'pointer'}}>
            <Flex align='center' direction={{base: 'column', md: 'row'}}>
                <Image src='https://techpit-market-prod.s3.amazonaws.com/uploads/part_attachment/file/10132/624137c0-4f68-4cd9-a5ab-dd4bc6bcf8b2.jpg' width='250px' height='100%' objectFit="cover" borderRadius='10px'/>
                <Box ml={2}>
                    <Text fontSize='lg'>タイトル</Text>
                    <Text fontSize='md' display={{base: 'none', md: 'block'}}>本文</Text>
                    <Text fontSize='md'>視聴回数</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default VideosListItem
