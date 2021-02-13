import React from 'react'
import Emoji from './Emoji'

const EmojiBar = () => {
    return (
            <div className="overflow-x-auto md:flex md:justify-center flex justify-center pt-10 lg:pt-48 lg:-mt-1">
                <Emoji emoji="🚀" phText="text"/>
                <Emoji emoji="⚛️" phText="text"/>
                <Emoji emoji="🧩" phText="text"/>
                <Emoji emoji="💎" phText="text"/>
                <Emoji emoji="💎" phText="text"/>
                <Emoji emoji="💎" phText="text"/>
                <Emoji emoji="💎" phText="text"/>
            </div>
    )
}

export default EmojiBar
