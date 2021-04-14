import { Box, Flex } from '@chakra-ui/layout'
import React, { memo, useCallback, useState, VFC } from 'react'
import { useYoutubeSearch } from '../../../api/customhooks/useYoutubeSearch'
import { DefaultButton } from '../../atoms/button/Button'
import { SearchInput } from '../../atoms/input/SearchInput'

export const SearchForm: VFC = memo(() => {

    const [keyword, setKeyword] = useState('')
    const { search } = useYoutubeSearch()

    //検索文字列が入力されていなければボタン非活性
    const disabled = keyword !== '' ? false : true
    console.log(keyword);

    const getSearchYoutube = () => {
        search(keyword)
        setKeyword('')
    }
    
    return (
        <Flex align='center' justify='space-around' width='60%' m='auto'>
            <SearchInput keyword={keyword} setKeyword={setKeyword}></SearchInput>
            <DefaultButton getSearchYoutube={getSearchYoutube} disabled={disabled}>検索</DefaultButton>
        </Flex>
    )
})

