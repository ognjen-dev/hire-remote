import React from 'react'
import NavBar from '../Components/SharedComponents/NavBar'
import Hero from '../Components/GetHiredComponents/Hero'
import EmojiBar from '../Components/GetHiredComponents/EmojiBar'
import Jobs from '../Components/GetHiredComponents/Jobs'
import AdSpace from '../Components/GetHiredComponents/AdSpace'

const GetHired = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <EmojiBar />
            <AdSpace />
            <Jobs />
        </div>
    )
}

export default GetHired
