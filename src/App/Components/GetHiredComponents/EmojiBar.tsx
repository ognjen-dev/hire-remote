import React from 'react'
import Emoji from './Emoji'

const EmojiBar = () => {
    return (
        <div className="lg:flex lg:flex-row z-0">
            <Emoji />
            <Emoji />
            <Emoji />
        </div>
    )
}

export default EmojiBar
