import { Box, Flex } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useYoutubeSearch } from '../../../api/custohooks/useYoutubeSearch'
import { DefaultButton } from '../../atoms/button/Button'
import { SearchInput } from '../../atoms/input/SearchInput'

export const SearchForm = () => {

    const [keyword, setKeyword] = useState('')
    const { search } = useYoutubeSearch()

    const getSearchYoutube = () => {
        search(keyword)
        setKeyword('')
    }
    return (
        <Flex align='center' justify='space-around' width='60%' m='auto'>
            <SearchInput keyword={keyword} setKeyword={setKeyword}></SearchInput>
            <DefaultButton getSearchYoutube={getSearchYoutube}>検索</DefaultButton>
        </Flex>
    )
}
