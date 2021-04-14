import { memo, ReactNode, VFC } from "react"
import { Button } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

type Props = {
    children: ReactNode;
    disabled: boolean;
    getSearchYoutube: () => void;
}
export const DefaultButton: VFC<Props> = memo((props) => {
    const { children, disabled, getSearchYoutube } = props
  
    return (
        <Button 
            p={5} 
            leftIcon={<Search2Icon />} 
            backgroundColor='pink.400' 
            color="white" 
            size='md' 
            variant="none" 
            borderRadius='999px' 
            isDisabled={disabled} 
            _hover={{background: 'note'}} 
            onClick={getSearchYoutube}
        >
            { children }
        </Button>
    )
})