import React from 'react'
import Emoji from './Emoji'

const EmojiBar = () => {
    return (
            <div className="md:flex md:justify-center flex justify-center pt-10 lg:pt-36 lg:-mt-8">
                <Emoji emoji="🚀" phText="text"/>
                <Emoji emoji="⚛️" phText="text"/>
                <Emoji emoji="🧩" phText="text"/>
                <Emoji emoji="💎" phText="text"/>
            </div>
    )
}

export default EmojiBar
