import React from 'react'
import NavBar from 'App/Components/SharedComponents/NavBar'
import Hero from 'App/Components/GetHiredComponents/Hero'
import EmojiBar from 'App/Components/GetHiredComponents/EmojiBar'
import Jobs from 'App/Components/GetHiredComponents/Jobs'
import AdSpace from 'App/Components/GetHiredComponents/AdSpace'

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
