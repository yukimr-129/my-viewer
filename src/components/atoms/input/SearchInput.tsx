import { Input } from '@chakra-ui/input'
import React, { ChangeEvent, Dispatch, memo, SetStateAction, useState, VFC } from 'react'

type Props = {
    keyword: string;
    setSearchKeyword: Dispatch<SetStateAction<string>>;
}

export const SearchInput: VFC<Props> = memo((props) => {
   const {keyword, setSearchKeyword} = props

    const SerachSetKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value) 
    }

    return (
        <Input placeholder="search for youtube..." size="md" mr='15px' borderRadius='999px' value={keyword} onChange={SerachSetKeyword}/>
    )
})
