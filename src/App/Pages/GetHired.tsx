import React from 'react'
import NavBar from '../Components/SharedComponents/NavBar'
import Hero from '../Components/GetHiredComponents/Hero'
import EmojiBar from '../Components/GetHiredComponents/EmojiBar'
import Jobs from '../Components/GetHiredComponents/Jobs'

const GetHired = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <EmojiBar />
            <Jobs />
        </div>
    )
}

export default GetHired
