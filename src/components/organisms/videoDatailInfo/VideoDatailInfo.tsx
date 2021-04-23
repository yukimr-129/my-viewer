import { Box, Divider, Link, Text } from "@chakra-ui/layout"
import { useState, VFC, memo } from "react"
import { videoListData } from "../../../types/api/youtubeData"
import Linkify from 'react-linkify'
import { Collapse } from "@chakra-ui/transition"

type Props = {
    video: any;
}
export const VideoDatailInfo: VFC<Props> = memo((props) => {
    const { video } = props

    const [show, setShow] = useState(false)
    const handleToggle = () => {
        setShow(!show)
    }
    
    return (
        <>  
        <Box m={3}>
            <Text as='h2' fontWeight='bold'>{video.snippet.title}</Text>
            <Divider my='5'/>
            <Linkify>
                <Collapse startingHeight={80} in={show}>
                    <Text as='pre' overflow='auto' whiteSpace='pre-wrap'>{video.snippet.description}</Text>
                </Collapse>
            </Linkify>
            <Link textDecoration='underline' onClick={handleToggle}>
                {show ? '一部のみ表示' : 'もっと見る'}
            </Link>
            <Divider my='5'/>
        </Box>
        </>
    )
})