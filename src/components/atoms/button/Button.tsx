import { ReactNode, VFC } from "react"
import { Button } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

type Props = {
    children: ReactNode;
    getSearchYoutube: () => void;
}
export const DefaultButton: VFC<Props> = (props) => {
    const { children, getSearchYoutube } = props
  
    return (
        <Button p={5} leftIcon={<Search2Icon />} backgroundColor='pink.400' color="white" size='md' variant="none" borderRadius='999px' onClick={getSearchYoutube}>
            { children }
        </Button>
    )
}