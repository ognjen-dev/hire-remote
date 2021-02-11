import React from 'react'
import Emoji from './Emoji'

const EmojiBar = () => {
    return (
        <div className="lg:flex lg:flex-row flex justify-center items-center z-0 py-40">
            <Emoji />
            <Emoji />
            <Emoji />
            <Emoji />
            <Emoji />
            <Emoji />
            <Emoji />
        </div>
    )
}

export default EmojiBar
