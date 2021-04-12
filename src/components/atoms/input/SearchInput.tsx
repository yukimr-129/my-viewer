import { Input } from '@chakra-ui/input'
import React, { ChangeEvent, Dispatch, SetStateAction, useState, VFC } from 'react'

type Props = {
    keyword: string;
    setKeyword: Dispatch<SetStateAction<string>>;
}

export const SearchInput: VFC<Props> = (props) => {
   const {keyword, setKeyword} = props

    const SerachSetKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value) 
    }

    return (
        <Input placeholder="search for youtube..." size="md" mr='15px' borderRadius='999px' value={keyword} onChange={SerachSetKeyword}/>
    )
}
