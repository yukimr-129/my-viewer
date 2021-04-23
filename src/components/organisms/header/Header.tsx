import { Box, Heading } from '@chakra-ui/layout'
import React, { ReactNode, VFC } from 'react'
import { SearchForm } from '../searchform/SearchForm'

type Props = {
    children: ReactNode;
}

export const Header: VFC<Props> = (props) => {
    const { children } = props
    return (
        <Box m={2} w='100%' zIndex='999'>
            <Heading p={3} textAlign='center' color='red.400'>{ children }</Heading>
        </Box>
    )
}
