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
            <div className="lg:px-72 px-0">
                <EmojiBar />
                <Jobs />
            </div>
        </div>
    )
}

export default GetHired
