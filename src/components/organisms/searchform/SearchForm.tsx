import { Box, Flex } from '@chakra-ui/layout'
import React, { memo, useCallback, useEffect, useState, VFC } from 'react'
import { useRecoilState } from 'recoil'
import { useYoutubeSearch } from '../../../api/customhooks/useYoutubeSearch'
import { searchKeyword } from '../../../store/searchKeyword'
import { DefaultButton } from '../../atoms/button/Button'
import { SearchInput } from '../../atoms/input/SearchInput'

export const SearchForm: VFC = memo(() => {

    // const [keyword, setKeyword] = useState('')
    const [ keyword, setSearchKeyword ] = useRecoilState(searchKeyword)
    const { search } = useYoutubeSearch()

    //検索文字列が入力されていなければボタン非活性
    const disabled = keyword !== '' ? false : true

    const getSearchYoutube = () => {
        search(keyword)
        setSearchKeyword(keyword)
    }
    
    return (
        <Flex align='center' justify='space-around' width='60%' m='auto'>
            <SearchInput keyword={keyword} setSearchKeyword={setSearchKeyword}></SearchInput>
            <DefaultButton getSearchYoutube={getSearchYoutube} disabled={disabled}>検索</DefaultButton>
        </Flex>
    )
})

