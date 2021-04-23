import { Box, Container, Divider, Flex, Link } from "@chakra-ui/layout";
import { memo, useEffect, VFC } from "react"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { useGetRelatedVideo } from "../../../api/customhooks/useGetRelatedVideo";
import youtubeRelatedData from "../../../store/youtubeRelatedData";
import { videoListData } from "../../../types/api/youtubeData";
import { YouTubeInlineFrame } from "../../atoms/frame/YouTubeInlineFrame";
import { Header } from "../../organisms/header/Header";
import { SearchForm } from "../../organisms/searchform/SearchForm";
import { SideVideoList } from "../../organisms/sideVideosList/SideVideoList";
import { VideoDatailInfo } from "../../organisms/videoDatailInfo/VideoDatailInfo";


type VideoId = {
    videoId: string;
}

type LocationVideo = {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: videoListData;
}

export const PlayerPage: VFC = memo(() => {
    const { state: video } = useLocation<LocationVideo>()
    const { videoId } = useParams<VideoId>()
    const { getRelatedVide } = useGetRelatedVideo()
    const history = useHistory()

    const goBackHome = () => {
        history.push('/')
    }
    
    useEffect(() => {
        getRelatedVide(videoId)
    }, [getRelatedVide])
    
    
    return (
        <>
        <Link _hover={{textDecoration: 'none'}} onClick={goBackHome}>
            <Header>My Viewer</Header>
        </Link>
            <Flex　direction={{base: 'column', md: 'row'}} mt={5} mx={4} justify='space-around' align={{base: 'center', md: 'flex-start'}}>
                <Box w={{base: '90%', md: "80%"}} mr={{md: '4'}}>
                    <YouTubeInlineFrame videoId={videoId}/>
                    <VideoDatailInfo video={video} />
                </Box>
                <Box w={{base: '90%', md: '40%'}} h='100%' mt={{base: '8', md: '0'}}>
                    <SideVideoList />
                </Box>
            </Flex>
        </>
    )
})