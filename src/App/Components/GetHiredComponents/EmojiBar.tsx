import React from 'react'
import Emoji from './Emoji'

const EmojiBar = () => {
    return (
        <div className="md:flex md:justify-center flex justify-center md:pt-4 lg:pt-36">
            <Emoji />
            <Emoji />
            <Emoji />
            <Emoji />
        </div>
    )
}

export default EmojiBar
