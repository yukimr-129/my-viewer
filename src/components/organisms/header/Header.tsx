import { Box, Heading } from '@chakra-ui/layout'
import React, { ReactNode, VFC } from 'react'

type Props = {
    children: ReactNode;
}

export const Header: VFC<Props> = (props) => {
    const { children } = props
    return (
        <Box m={2}>
            <Heading p={3} textAlign='center' color='red.400'>{ children }</Heading>
        </Box>
    )
}
