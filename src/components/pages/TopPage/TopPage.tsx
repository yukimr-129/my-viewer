import React, { VFC } from 'react'
import { Link } from 'react-router-dom'
import { DefaultButton } from '../../atoms/button/Button'
import { SearchInput } from '../../atoms/input/SearchInput'
import { Header } from '../../organisms/header/Header'
import { SearchForm } from '../../organisms/searchform/SearchForm'
import VideosList from '../../organisms/videoslist/VideosList'
import VideosListItem from '../../organisms/videoslistItem/VideosListItem'

export const TopPage: VFC = () => {
    return (
        <>
            <Header>My Viewer</Header>
            <SearchForm />
            <VideosList/>
        </>
    )
}