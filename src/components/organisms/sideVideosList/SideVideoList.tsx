import { Flex } from "@chakra-ui/layout"
import { VFC } from "react"
import { useRecoilValue } from "recoil"
import youtubeRelatedData from "../../../store/youtubeRelatedData"
import SideVideoListItem from "../sideVideoListItem/sideVideoListItem"
import VideosListItem from "../videoslistItem/VideosListItem"

export const SideVideoList: VFC = () => {
    const RelatedVideo = useRecoilValue(youtubeRelatedData)
    return (
        <Flex direction='column' h='100%'>
            {RelatedVideo ? RelatedVideo.map((video, index) => (
                <SideVideoListItem key={index} video={video}/>
            )) : <span>検索結果が見つかりません</span>}
        </Flex>
    )
}