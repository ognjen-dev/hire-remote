import React from 'react'

interface EmojiProps {
    emoji: string
    phText: string
} 

const Emoji = ({ emoji, phText }:EmojiProps) => {
    return (
        <div>
            <a href="/" className="">
                <div className="md:flex flex md:flex-col flex-col md:p-6 p-6 text-center md:text-center hover:opacity-70 opacity-100 ">
                    <p>
                        {emoji}
                    </p>
                    <div>
                        <p className="text-sm font-semibold text-center leading-4">
                            {phText}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Emoji
