import { AspectRatio } from "@chakra-ui/layout"
import { VFC } from "react"

type Props = {
    videoId: string;
}
export const YouTubeInlineFrame: VFC<Props> = (props) => {
    const { videoId } = props
    return (
        <AspectRatio ratio={16/9}>
            <iframe width='100%' height='100%' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}/>
        </AspectRatio>
    )
}